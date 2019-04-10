from django.urls import path

from materials import views

urlpatterns = [
    path('', views.list_materials, name='read'),
    path('<int:id>/edit/', views.update_model, name='edit'),
    path('remove/<int:id>/', views.remove_material, name='remove'),
    path('create/', views.create_material, name='create'),
    path('create/new/', views.add_in_base, name='add'),
    path('<int:id>/', views.update_material, name='update'),
]
