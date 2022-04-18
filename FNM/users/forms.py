from django import forms
from django.contrib.auth.hashers import make_password
from django.forms import ModelForm

from .models import User


class UserRegistrationForm(ModelForm):
    password = forms.CharField(label='Пароль', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Повторите пароль', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'country', 'phone']
        labels = {
            'country': "Страна",
            'phone': "Телефон"
        }

    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError('Passwords don\'t match.')
        return cd['password2']


class UserLoginForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password']


class UserEditForm(ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'country', 'email']
