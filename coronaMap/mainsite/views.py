from django.shortcuts import render, HttpResponse
import json
import os


key_path = os.path.join( os.getcwd(), 'coronaMap' ,'init', 'conf', 'apikey.json')
with open(key_path, 'r') as f:
    json_data = json.load(f)

# kakao_api = json_data['kakao'] # 본 서버용
kakao_api = json_data['kakao_test'] # 테스트용

# Create your views here.
def index(request):   
    return render(request, 'index.html', {'api_key' : kakao_api})

def status(request):
    return render(request, 'status.html')

def board_mask(request):
    return render(request, 'board_mask.html')

def nearby_clinic(request):
    return render(request, 'nearby_clinic.html')

def prevent(request):
    return render(request, 'prevent.html')


def mapTest2(request):
    return render(request, 'index3.html')

def sokgo(request):
    return render(request, 'sok_go.html')

def dongsam(request):
    return render(request, 'dong_sam.html')

def gang(request):
    return render(request, 'gang.html')

def chun(request):
    return render(request, 'chun.html')


# ssl 인증
def ssl(request):
    path = search()[1]
    f = open(path,'r')
    txt = f.readline()
    return HttpResponse(txt)

def search():
    dirname = os.path.join(os.getcwd(),'mainsite','.well-known/acme-challenge')
    filenames = os.listdir(dirname)
    full_filename = os.path.join(dirname, filenames[0])
    urlname = '.well-known/acme-challenge/' + filenames[0]
    return urlname, full_filename