from . import views
from django.urls import path
urlpatterns = [

    path('', views.home, name='home'),
    path('tank1', views.tank1, name='tank1'),

]
