from django.urls import path

from .views import (
    parks_list,
    park_detail,
)

urlpatterns = [
    path("list/", parks_list, name="parks_list"),
    path("list/<int:id>", park_detail, name="park_detail"),
]
