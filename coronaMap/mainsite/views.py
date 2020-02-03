from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def post(request):
    return render(request, 'post.html')

def prevent(request):
    return render(request, 'prevent.html')


def mapTest(request):
    return render(request, 'index2.html')


