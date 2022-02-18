from . import views
from django.urls import path

urlpatterns = [

    path('<int:id>',views.tank1, name='tank1')

]