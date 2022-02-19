from django.shortcuts import render, get_object_or_404, redirect
from main.models import Product
from .cart import Cart


def tank1(request, id):
    product = Product.objects.get(pk=id)
    if request.method == 'POST':
        cart = Cart(request)
        cart.add(product=product)

    return render(request, 'products/0001.html', {'product': product})


def cart_show(request):
    cart = Cart(request)
    return render(request, 'products/cart.html', {'cart': cart})
