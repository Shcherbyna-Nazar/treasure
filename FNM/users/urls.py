from django.urls import path
from . import views

urlpatterns = [
  path('/regiser', views.register_user, name='register'),
  path('/login', views.login_user, name='login'),
  
]
