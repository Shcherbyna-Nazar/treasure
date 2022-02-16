from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class ProductModel(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_lenght=100)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    # product_owner = models.ForeignKey(User, on_delete=models.Cascade)
