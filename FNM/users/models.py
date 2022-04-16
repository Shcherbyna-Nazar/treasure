from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    ig_username = models.CharField(max_length=100)
    country = models.CharField(default="Unknown", max_length=100)
    phone = models.CharField(default="+380962853438", max_length=20);
