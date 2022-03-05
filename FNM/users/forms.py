from django.forms import ModelForm
from .models import User


class UserRegistrationForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'ig_username', 'password', ]


class UserLoginForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password']
