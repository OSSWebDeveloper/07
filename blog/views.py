# blog/views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import *
from django.db.models import Count


def _get_current_worker(request):
    worker_id = request.session.get("worker_id")
    if not worker_id:
        return None
    try:
        return Worker.objects.get(id=worker_id)
    except Worker.DoesNotExist:
        return None


def index(request):
    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        password = request.POST.get("password", "")
        try:
            worker = Worker.objects.get(name=username, password=password)
            request.session["worker_id"] = worker.id
            # Role-based redirect
            if worker.category == "Teacher":
                return redirect("teacher_home", id=worker.id)
            elif worker.category == "Student":
                return redirect("student_home")
            else:
                return redirect("/admin/")
        except Worker.DoesNotExist:
            messages.error(request, "Login yoki parol noto‘g‘ri.")
    return render(request, "index.html")


# =========================
# STUDENT PAGES
# =========================
def student_home(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")
    return render(request, "student/home.html", {"worker": worker})


def student_lessons(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    # Student qaysi guruhlarga tegishli bo‘lsa, shu guruhlardagi lesson_group larni olamiz
    lesson_groups = Lesson_group.objects.filter(
        groups__in=worker.student_groups.all()
    ).prefetch_related("lessons").distinct()

    return render(
        request,
        "student/lesson/lesson.html",
        {"worker": worker, "lesson_groups": lesson_groups},
    )



def student_lesson_detail(request, lesson_id: int):
    """
    Bitta darsning batafsil sahifasi.
    """
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")
    
    lesson = get_object_or_404(Lesson, id=lesson_id)
    
    # Keyingi darsni olish (shu modul ichida, id bo‘yicha)
    next_lesson = (
        Lesson.objects.filter(
            lesson_group=lesson.lesson_group,
            modul=lesson.modul,       # faqat shu modul ichidagi darslar
            id__gt=lesson.id
        )
        .order_by("-date")
        .first()
    )
    
    return render(
        request,
        "student/lesson/lesson_details.html",
        {"worker": worker, "lesson": lesson, "next_lesson": next_lesson},
    )




def student_reyting(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")
    return render(request, "student/reyting.html", {"worker": worker})


def student_setting(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")
    return render(request, "student/setting.html", {"worker": worker})


# =========================
# TEACHER PAGES
# =========================

def teacher_home(request, id: int):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    # Har bir group uchun o‘quvchilar sonini hisoblash
    groups = Group.objects.annotate(total_students=Count("students"))

    return render(
        request,
        "teacher/home/home.html",
        {"worker": worker, "teacher_id": id, "groups": groups},
    )



from django.db.models import Max

def teacher_lessons(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    lesson_groups = Lesson_group.objects.annotate(max_modul=Max("lessons__modul"))

    return render(
        request,
        "teacher/lesson/lesson.html",
        {"worker": worker, "lesson_groups": lesson_groups},
    )



def teacher_lesson_detail(request, lesson_group_id: int):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    lesson_group = get_object_or_404(Lesson_group, id=lesson_group_id)
    lessons = Lesson.objects.filter(lesson_group=lesson_group).order_by("modul")

    return render(
        request,
        "teacher/lesson/lesson2.html",
        {
            "worker": worker,
            "lesson_group": lesson_group, 
            "lessons": lessons,
        },
    )


def teacher_lesson_edit(request, lesson_group_id: int, lesson_id: int):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    lesson_group = get_object_or_404(Lesson_group, id=lesson_group_id)
    lesson = get_object_or_404(Lesson, id=lesson_id, lesson_group=lesson_group)

    if request.method == "POST":
        title = request.POST.get("title", "").strip()
        modul = request.POST.get("modul", "").strip()
        description = request.POST.get("description", "").strip()
        video = request.FILES.get("video")
        note = request.FILES.get("note")
        homework = request.FILES.get("homework")

        # faqat kiritilganlarini yangilash
        if title:
            lesson.title = title
        if modul:
            try:
                lesson.modul = int(modul)
            except ValueError:
                messages.error(request, "Modul raqam bo‘lishi kerak.")
                return redirect(request.path)
        if description:
            lesson.description = description
        if video:
            lesson.video = video
        if note:
            lesson.note = note
        if homework:
            lesson.homework = homework

        lesson.save()
        messages.success(request, "Dars muvaffaqiyatli o'zgartirildi.")
        return redirect(request.path)

    return render(
        request,
        "teacher/lesson/lesson_edit.html",
        {"worker": worker, "lesson_group": lesson_group, "lesson": lesson},
    )

def teacher_lesson_add(request, lesson_group_id: int):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    lesson_group = get_object_or_404(Lesson_group, id=lesson_group_id)

    if request.method == "POST":
        title = request.POST.get("title", "").strip()
        modul = request.POST.get("modul", "").strip()
        description = request.POST.get("description", "").strip()
        video = request.FILES.get("video")
        note = request.FILES.get("note")
        homework = request.FILES.get("homework")

        if not title or not modul:
            messages.error(request, "Sarlavha va modul raqami kiritilishi kerak.")
            return redirect(request.path)

        try:
            modul = int(modul)
        except ValueError:
            messages.error(request, "Modul raqam bo‘lishi kerak.")
            return redirect(request.path)

        Lesson.objects.create(
            lesson_group=lesson_group,
            title=title,
            modul=modul,
            description=description,
            video=video,
            note=note,
            homework=homework,
        )

        messages.success(request, "Yangi dars muvaffaqiyatli qo'shildi.")
        return redirect("teacher_lesson_detail", lesson_group_id=lesson_group.id)

    return render(
        request,
        "teacher/lesson/lesson_add.html",
        {"worker": worker, "lesson_group": lesson_group},
    )


def teacher_reyting(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")
    return render(request, "teacher/reyting/reyting.html", {"worker": worker})


def teacher_setting(request):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")
    return render(request, "teacher/setting/setting.html", {"worker": worker})


def teacher_group_detail(request, teacher_id: int, group_id: int):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    # Guruh ma'lumotini yuborib qo'yamiz (mavjud bo'lmasa xatoga tushmaydi)
    group = None
    try:
        group = Group.objects.get(id=group_id)
        total_students = Group.objects.count()
    except Exception:
        group = None

    context = {
        "worker": worker,
        "teacher_id": teacher_id,
        "group": group,
        "group_id": group_id,
        "total_students": total_students,
    }
    return render(request, "teacher/home/guruhlar/detail.html", context)

from django.shortcuts import render, redirect, get_object_or_404

def teacher_group_students(request, teacher_id: int, group_id: int):
    worker = _get_current_worker(request)
    if not worker:
        return redirect("index")

    # Guruhni olish (topilmasa 404 sahifa)
    group = get_object_or_404(Group, id=group_id, teacher_id=teacher_id)

    students = group.students.all()

    return render(
        request,
        "teacher/home/guruhlar/detail.html",
        {
            "worker": worker,
            "teacher_id": teacher_id,
            "group": group,
            "group_id": group_id,
            "students": students,
        },
    )

# =========================
# AUTH
# =========================
def logout_view(request):
    request.session.flush()
    return redirect("index")
