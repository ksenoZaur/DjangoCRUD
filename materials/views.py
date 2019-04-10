from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from materials.models import Material


def list_materials(request):
    materials = Material.objects.all()
    # materials.html
    return render(request, 'materials/base.html', {'material': materials})


def update_material(request, id):
    material = Material.objects.get(pk=id)
    return render(request, 'materials/edit.html', {'material': material})


@csrf_exempt
def remove_material(request, id):
    print('Удаление материала')
    p = Material.objects.get(pk=id)
    p.delete()
    return HttpResponse('1')


@csrf_exempt
def update_model(request, id):
    print('title')
    if request.is_ajax():
        material = Material.objects.get(pk=id)
        material.title = request.POST['title']
        material.code_material = request.POST['code']
        balance = request.POST['balance'].replace(',', '.')
        material.balance = float(balance)
        material.save()
        return HttpResponse('Данные обновлены')
    else:
        return HttpResponse('')


def create_material(request):
    return render(request, 'materials/create.html')

@csrf_exempt
def add_in_base(request):
    title = request.POST['title']
    img = request.POST['img']
    code = request.POST['code']
    balance = request.POST['balance']

    material = Material(title=title, code_material=code, img=img, balance=balance)
    material.save()
    return list_materials(request)
