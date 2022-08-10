from django.contrib import admin
from .models import Account, ParkVO

# Register your models here.


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    pass


@admin.register(ParkVO)
class ParkVOAdmin(admin.ModelAdmin):
    pass
