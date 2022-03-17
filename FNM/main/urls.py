from . import views
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [

    path('', views.home, name='home'),
    path('products/', include('products.urls')),
    path('', include('users.urls')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
