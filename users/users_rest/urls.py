from django.contrib import admin
from django.urls import path, include
from .views import accounts_list, account_detail

urlpatterns = [
    path('accounts/',accounts_list, name='accounts_list'),
    path('accounts/<int:id>/',account_detail, name='accounts_detail'),
]