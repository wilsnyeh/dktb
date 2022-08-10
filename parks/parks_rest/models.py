from django.db import models

# Create your models here.


class Park(models.Model):
    name = models.CharField(max_length=250, unique=True)
    state = models.CharField(max_length=250)
    city = models.CharField(max_length=250, blank=True, null=True)
    description = models.TextField()
    weather_info = models.TextField()
    entrance_fee = models.CharField(max_length=25, null=True)
    contact_num = models.CharField(max_length=200)
    image_url = models.URLField(null=True, blank=True)
