from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    ig_username = models.CharField(max_length=100)
<<<<<<< HEAD
=======
    country = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
>>>>>>> 0852ba0 (q)
