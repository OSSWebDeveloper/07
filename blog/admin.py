from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Worker)
# admin.site.register(Group)
admin.site.register(Lesson)



@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ('name', 'teacher',  'homeworks_submitted')
    filter_horizontal = ('students',)  # Dual list (chapda barcha, o‘ngda guruhdagilar)
    search_fields = ('name', 'teacher__name', 'students__name')  # Qidiruv qo‘shildi

@admin.register(Lesson_group)
class Lesson_group_admin(admin.ModelAdmin):
    filter_horizontal = ('groups', 'teachers',)  # Dual list (chapda barcha, o‘ngda guruhdagilar)

