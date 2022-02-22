from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from products.cart import Cart
from .models import Product
from django.contrib.auth.models import User


# Create your views here.
def home(request):
    cart = Cart(request)
    total = cart.get_total_price()
    if not cart.session.get(settings.CART_SESSION_ID):
        return redirect('/')

    products = Product.objects.all()
    context = {'products': products, 'cart': cart, 'total': total}
    return render(request, 'main/index.html', context)
