from django.db import models

# Create your models here.
class ParkVO(models.Model):
    name = models.CharField(max_length=50, unique=True)
    state = models.CharField(max_length=2, unique=True)
    parks_visited = models.BooleanField(default=False)


class Account(models.Model):
    username = models.CharField(max_length=30, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    park = models.ForeignKey(
        ParkVO,
        related_name= "Accounts",
        on_delete= models.CASCADE 
    )
