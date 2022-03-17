import json

from django.core import serializers
from django.forms import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from products.cart import Cart
from .models import Product
from django.contrib.auth.models import User

from .page import Page


def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


# Create your views here.
def home(request):
    if is_ajax(request):
        page = Page(request)
        page.change_page()
        cur_page = page.cur_page
        print(cur_page)
        mx = settings.MAX_PRODUCTS_ON_PAGE
        amount_of_products = len(Product.objects.all())
        products = []
        if (cur_page - 1) * mx < amount_of_products:
            products = Product.objects.all()[(cur_page - 1) * mx: min(amount_of_products, cur_page * mx)]
        for item in products:
            item.product_photo = item.product_photo.url
        data = serializers.serialize('json', products, fields=("name", "price", "description", "product_photo"))
        return JsonResponse({'new_product': data}, status=200)
    else:
        page = Page(request)
        page.refresh()
        cart = Cart(request)
        total = cart.get_total_price()

        products = Product.objects.all()[0:settings.MAX_PRODUCTS_ON_PAGE]
        context = {'products': products, 'cart': cart, 'total': total}
        return render(request, 'main/index.html', context)
