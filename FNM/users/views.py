from django.shortcuts import render, redirect
from .models import User
from .forms import UserLoginForm, UserRegistrationForm
from django.contrib import messages


# Create your views here.

def register_user:
  form = UserRegistrationForm
  if request.method == 'POST':
    form = UserRegistrationForm(request.POST)
    if form.is_valid():
      new_user = form.save(commit=False)
      new_user.save()
      return redirect('home')
    else:
      messages.error(request, 'SUCK SOME COCK U STUPID BITCH!!!')
    
  context = {'form': form}
  return render(request, "login_register.html", context)

def login_user:
  form = UserLoginForm
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
  context = {'form': form}
  return render(request, "login_register.html", context)

