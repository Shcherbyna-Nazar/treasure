from django.conf import settings
from django.core import serializers
from django.http import JsonResponse
from django.shortcuts import render
from products.cart import Cart

from .models import Product
from .page import Page


def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


# Create your views here.
def home(request):
    if is_ajax(request):
        cur_page = int(request.COOKIES.get('cur_page'))
        cur_page += 1
        mx = settings.MAX_PRODUCTS_ON_PAGE
        amount_of_products = len(Product.objects.all())
        if (cur_page - 1) * mx < amount_of_products:
            products = Product.objects.all()[(cur_page - 1) * mx: min(amount_of_products, cur_page * mx)]
        for item in products:
            item.product_photo = item.product_photo.url
        data = serializers.serialize('json', products)
        response = JsonResponse({'new_product': data}, status=200)
        response.set_cookie('cur_page', cur_page)
        return response
    else:
        cart = Cart(request)
        print(request.user.is_authenticated)
        total = cart.get_total_price()
        products = Product.objects.all()[0:settings.MAX_PRODUCTS_ON_PAGE]
        context = {'products': products, 'cart': cart, 'total': total}
        response = render(request, 'main/index.html', context)
        response.set_cookie('cur_page', 1)
        return response
