from django.contrib import admin
from django.urls import path, include
from .views import accounts_list

urlpatterns = [
    path('accounts/',accounts_list, name='accounts_list'),
]