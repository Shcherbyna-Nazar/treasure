from django.shortcuts import render
from .models import Product
from django.contrib.auth.models import User

# Create your views here.
def home(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'main/index.html', context)

