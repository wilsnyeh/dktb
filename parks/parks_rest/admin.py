from django.contrib import admin
from .models import Park

# Register your models here.


@admin.register(Park)
class ParkAdmin(admin.ModelAdmin):
    pass
