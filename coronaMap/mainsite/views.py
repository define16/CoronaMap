from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def status(request):
    return render(request, 'status.html')

def board_mask(request):
    return render(request, 'board_mask.html')

def nearby_clinic(request):
    return render(request, 'nearby_clinic.html')

def prevent(request):
    return render(request, 'prevent.html')

def mapTest(request):
    return render(request, 'index.html')

def mapTest2(request):
    return render(request, 'index3.html')


