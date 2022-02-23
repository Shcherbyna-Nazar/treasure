from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from main.models import Product
from .cart import Cart
from main.views import home


def tank1(request, id):
    product = Product.objects.get(pk=id)
    cart = Cart(request)
    total = cart.get_total_price()
    if request.method == 'POST':
        cart.add(product=product)
        cart.session.set_expiry(300)
        return redirect('tank1', id)
    else:
        return render(request, 'products/0001.html', {'product': product, 'cart': cart, 'total': total})


def cart_show(request):
    cart = Cart(request)
    total = cart.get_total_price()
    if not cart.session.get(settings.CART_SESSION_ID):
        return redirect('/')
    return render(request, 'products/cart.html', {'cart': cart, 'total': total})
