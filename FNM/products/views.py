from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from main.models import Product
from .cart import Cart
from main.views import home
from .forms import QualityForm


def tank1(request, id):
    product = Product.objects.get(pk=id)
    cart = Cart(request)
    total = cart.get_total_price()
    if request.method == 'POST':
        form = QualityForm(request.POST)
        if form.is_valid():
            quantity = form.cleaned_data.get("quantity")

            cart.add(product=product, quantity=quantity)
            cart.session.set_expiry(300)
        return redirect('tank1', id)
    else:
        form = QualityForm(initial={'quantity':1})

        return render(request, 'products/0001.html', {'product': product,
                                                      'cart': cart,
                                                      'total': total,
                                                      'form': form,
                                                      })


def cart_show(request):
    cart = Cart(request)
    total = cart.get_total_price()
    if request.method == 'POST':
        if '_del_element' in request.POST:
            product = Product.objects.get(pk=request.POST['_del_element'])
            cart.remove(product=product)
            return redirect('cart')
        if '_clean_cart' in request.POST:
            cart.clear()
            return redirect('home')
    if not cart.session.get(settings.CART_SESSION_ID):
        return redirect('/')
    return render(request, 'products/cart.html', {'cart': cart, 'total': total})
