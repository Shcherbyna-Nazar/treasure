from django.shortcuts import render

def tank1(request, id):
    context = {'id':id}
    return render(request, 'products/0001.html', context)
