from django.contrib import admin

from .models import UploadedDoc


@admin.register(UploadedDoc)
class UploadedDocAdmin(admin.ModelAdmin):
    list_display = ['id', 'created']
