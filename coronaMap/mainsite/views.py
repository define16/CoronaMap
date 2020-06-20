from django.shortcuts import render, HttpResponse
import json
import os
from .models import InfectedPeople
from .processing import DataProcessing
from django.shortcuts import redirect


key_path = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'coronaMap' , 'conf', 'apikey.json')
with open(key_path, 'r') as f:
    json_data = json.load(f)

kakao_api = json_data['kakao'] # 본 서버용
# kakao_api = json_data['kakao_test'] # 테스트용
processing = DataProcessing()

# Create your views here.
def index(request):
    results = InfectedPeople.objects.all().order_by('person_num', 'visited_date') # -는 내림차순

    # 커스텀 오버레이, 날짜별 방문 장소를 분리
    results_dic = processing.separate_by_date(results)

    # 날짜-이동수단별 분리
    results_transportation_dic = processing.separate_by_transport(results_dic)
    results_region_dic = processing.separate_by_region(results_dic)

    results_json = json.dumps(results_dic).encode('utf-8').decode()
    results_transportation_json = json.dumps(results_transportation_dic).encode('utf-8').decode() # 추가
    results_region_json = json.dumps(results_region_dic).encode('utf-8').decode()  # 추가

    return render(request, 'index.html', {'api_key' : kakao_api, 'total_person_cnt' : len(results_dic) ,  'results_map'
    : results_json, 'results_transportation_map' : results_transportation_json, 'results_region_map' : results_region_json})

def status(request):
    return render(request, 'status.html')

def board_mask(request):
    return render(request, 'board_mask.html')

def nearby_clinic(request):
    return render(request, 'nearby_clinic.html')

def prevent(request):
    return render(request, 'prevent.html')

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