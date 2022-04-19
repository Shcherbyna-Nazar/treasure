from django.contrib.auth import login, authenticate, logout
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from .models import User
from .forms import UserLoginForm, UserRegistrationForm, UserEditForm
from django.contrib import messages


# Create your views here.

def transpose_name_of_field(name):
    if name == 'First Name':
        return 'first_name'
    if name == 'Last Name':
        return 'last_name'
    if name == 'Country':
        return 'country'
    if name == 'Email':
        return 'email'
    if name == 'Phone':
        return 'phone'
    return ''

def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'


def u_logout(request):
    if request.user.is_authenticated:
        logout(request)
    return redirect('home')


def register_user(request):
    form = UserRegistrationForm()
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data['password'])
            new_user.save()
            return redirect('login')

        else:
            messages.error(request, 'SUCK SOME COCK U STUPID BITCH!!!')

    context = {'form': form}
    return render(request, "users\login_register.html", context)


def login_user(request):
    page = 'login'
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'SUCK SOME COCK U STUPID BITCH!!!')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'SUCK SOME COCK U STUPID BITCH!!!')
    context = {'page': page}
    return render(request, "users\login_register.html", context)


@csrf_exempt
def profile(request):
    #print(request.__dict__)
    user = User.objects.get(username=request.user)
    if request.method == 'POST':
        name = request.POST.get('name')
        value = request.POST.get('value')
        print(value, name)
        transpose_name = transpose_name_of_field(name)
        if hasattr(user, transpose_name):
            setattr(user, transpose_name, value)
            user.save()
        return redirect('profile')

    return render(request, 'profile.html', {'user': user, })
