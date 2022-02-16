from django.shortcuts import render
from .models import ProductModel
from django.contrib.auth.models import User

# Create your views here.
def home(request):
    products = ProductModel.objects.all()
    context = {'products': products}
    return render(request, 'index.html', context)


def tank1(request):
    context = {}
    return render(request, '0001.html', context)
