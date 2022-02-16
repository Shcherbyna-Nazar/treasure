from django.shortcuts import render

def tank1(request):
    context = {}
    return render(request, '0001.html', context)
