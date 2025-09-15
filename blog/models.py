from django.db import models

class Worker(models.Model):
    CATEGORY_CHOICES = [
        ('Admin', 'Admin'),
        ('Teacher', 'Teacher'),
        ('Student', 'Student'),
    ]
    
    name = models.CharField('Ismi', max_length=255)
    password = models.CharField('Paroli', max_length=255)
    category = models.CharField('Kategoriyasi', max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name


class Group(models.Model):
    teacher = models.ForeignKey(
        Worker,
        on_delete=models.CASCADE,
        related_name="groups",
        limit_choices_to={'category': 'Teacher'}  # faqat Teacher bo‘lishi mumkin
    )
    name = models.CharField(max_length=255)
    students = models.ManyToManyField(
        Worker,
        related_name="student_groups",
        limit_choices_to={'category': 'Student'}  # faqat Student qo‘shiladi
    )
    homeworks_submitted = models.PositiveIntegerField(default=1 )

    def __str__(self):
        return f"{self.name} ({self.teacher.name})"

class Lesson_group(models.Model):
    title = models.CharField(max_length=255)
    groups = models.ManyToManyField(   # ForeignKey o‘rniga ManyToMany qo‘ydik
        Group,
        related_name="lessons"
    )
    teachers = models.ManyToManyField(
        Worker,
        related_name="teacher_groups",
        limit_choices_to={'category': 'Teacher'}  # faqat teacher qo‘shiladi
    )
    def __str__(self):
        return self.title

class Lesson(models.Model):
    lesson_number = models.IntegerField(default=1, editable=False)
    lesson_group = models.ForeignKey("Lesson_group", on_delete=models.CASCADE, related_name="lessons")
    modul = models.IntegerField(default=1)
    title = models.CharField(max_length=255)
    
    video = models.FileField(upload_to='lessons/videos/', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    note = models.FileField(upload_to='lessons/notes/', null=True, blank=True)
    homework = models.FileField(upload_to='lessons/homeworks/', null=True, blank=True)
    date = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.pk:  # faqat yangi obyekt yaratilganda
            last_lesson = Lesson.objects.filter(
                lesson_group=self.lesson_group,
                modul=self.modul
            ).order_by("-lesson_number").first()

            if last_lesson:
                self.lesson_number = last_lesson.lesson_number + 1
            else:
                self.lesson_number = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.lesson_number})"

