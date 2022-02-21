from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from main.models import Product
from .cart import Cart


def tank1(request, id):
    product = Product.objects.get(pk=id)
    if request.method == 'POST':
        cart = Cart(request)
        cart.add(product=product)
        cart.session.set_expiry(300)

    return render(request, 'products/0001.html', {'product': product})


def cart_show(request):
    cart = Cart(request)
    total = cart.get_total_price()
    if not cart.session.get(settings.CART_SESSION_ID):
        return redirect('/')
    return render(request, 'products/cart.html', {'cart': cart, 'total': total})
