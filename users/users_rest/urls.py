from django.contrib import admin
from django.urls import path, include
from .views import accounts_list, account_detail, api_user_token, park_vo_list

urlpatterns = [
    path('accounts/',accounts_list, name='accounts_list'),
    path('accounts/<int:id>/',account_detail, name='accounts_detail'),
    path("accounts/tokens/mine/", api_user_token, name='api_user_token'),
    path('dashboard/<int:id>/',account_detail, name='dashboard'),
    path("accounts/parks/", park_vo_list, name='park_vo_list'),
    
]