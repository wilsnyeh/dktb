from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse

# Create your models here.
class ParkVO(models.Model):
    name = models.CharField(max_length=250, unique=True)
    state = models.CharField(max_length=250)
    parks_visited = models.BooleanField(default=False)


class Account(AbstractUser):
    username = models.CharField(max_length=30, unique=True)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=128, null=False, blank=False, default=False)

    # parks = models.ForeignKey(
    #     ParkVO,
    #     related_name= "Accounts",
    #     on_delete= models.CASCADE 
    # )
    def get_api_url(self):
        return reverse("accounts_list", kwargs={"pk": self.pk})

