from django.shortcuts import render, HttpResponse
import json
import os
from .models import InfectedPeople
from .processing import DataProcessing



key_path = os.path.join( os.getcwd(), 'coronaMap' , 'conf', 'apikey.json')
with open(key_path, 'r') as f:
    json_data = json.load(f)

# kakao_api = json_data['kakao'] # 본 서버용
kakao_api = json_data['kakao_test'] # 테스트용

# Create your views here.
def index(request):
    """
    TODO : 확진자 명수, 카테고리별로 확진자 그룹핑 로직 추가
    날짜별,교통수단별 이동경로에 색깔 적용하기 (새로운 map인 results_transportation을 추가로 만들어서 넘기기.)
    각 날짜의 마지막 교통수단의 경로가 누락됨
    """
    processing = DataProcessing()

    results = InfectedPeople.objects.all().order_by('id') # -는 내림차순

    # 커스텀 오버레이, 날짜별 방문 장소를 분리
    results_dic = processing.separate_by_date(results)

    # 날짜-이동수단별 분리
    results_transportation_dic = processing.separate_by_transport(results_dic)
    results_transportation_tmp_dic = processing.separate_by_transport_tmp(results_dic)
    
    results_json = json.dumps(results_dic).encode('utf-8').decode()
    results_transportation_json = json.dumps(results_transportation_dic).encode('utf-8').decode()
    
    results_transportation_tmp_json = json.dumps(results_transportation_tmp_dic).encode('utf-8').decode() # 추가
    
    print(type(results_json))
    print(type(results_transportation_json))
    
    processing.print_separate_by_date(results_dic)
    processing.print_separate_by_transport(results_transportation_dic)

    return render(request, 'index.html', {'api_key' : kakao_api, 'total_person_cnt' : len(results_dic) ,  'results_map'
    : results_json, 'results_transportation_map' : results_transportation_tmp_json})

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


# ssl 인증용
def ssl(request):
    path = search()[1]
    f = open(path,'r')
    txt = f.readline()
    return HttpResponse(txt)

# ssl 인증용
def search():
    dirname = os.path.join(os.getcwd(),'mainsite','.well-known/acme-challenge')
    filenames = os.listdir(dirname)
    full_filename = os.path.join(dirname, filenames[0])
    urlname = '.well-known/acme-challenge/' + filenames[0]
    return urlname, full_filename



