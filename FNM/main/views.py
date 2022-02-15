from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'index.html')


def tank1(request):
    return render(request, '0001.html')
