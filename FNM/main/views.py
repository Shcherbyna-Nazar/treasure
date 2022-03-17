import json

from django.core import serializers
from django.forms import model_to_dict
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from products.cart import Cart
from .models import Product
from django.contrib.auth.models import User


def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


# Create your views here.
def home(request):
    if is_ajax(request):
        products = Product.objects.all()
        for item in products:
            item.product_photo = item.product_photo.url
        data = serializers.serialize('json', products, fields=("name", "price", "description", "product_photo"))
        return JsonResponse({'new_product': data}, status=200)
    else:
        cart = Cart(request)
        total = cart.get_total_price()

        products = Product.objects.all()
        context = {'products': products, 'cart': cart, 'total': total}
        return render(request, 'main/index.html', context)
