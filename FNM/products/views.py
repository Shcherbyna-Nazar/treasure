from django.shortcuts import render, get_object_or_404
from main.models import Product


def tank1(request, id):
    product = Product.objects.get(pk=id)
    # print(product.id)
    return render(request, 'products/0001.html', {'product': product})
