from django.urls import path
from . import views

urlpatterns = [
  path('/regiser', views.register, name='register'),
  path('/login', views.login, name='login'),
  
]
