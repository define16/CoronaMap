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
    TODO : 하단의 문제점 해결하기, 지역별로 나누기
    1. 이동수단 색상이 맞지 않음.
    2. 다른 사람의 이동경로와 이어짐.
    """
    processing = DataProcessing()

    results = InfectedPeople.objects.all().order_by('id') # -는 내림차순

    # 커스텀 오버레이, 날짜별 방문 장소를 분리
    results_dic = processing.separate_by_date(results)

    # 날짜-이동수단별 분리
    results_transportation_dic = processing.separate_by_transport(results_dic)
    # results_transportation_tmp_dic = processing.separate_by_transport_tmp(results_dic)
    # results_transportation_tmp2_dic = processing.separate_by_transport_tmp2(results_dic)
    results_transportation_tmp3_dic = processing.separate_by_transport_tmp3(results_dic)
    results_region_dic = processing.separate_by_region(results_dic)

    # print(results_transportation_tmp_dic)
    # print(results_transportation_tmp2_dic)
    results_json = json.dumps(results_dic).encode('utf-8').decode()

    results_transportation_json = json.dumps(results_transportation_dic).encode('utf-8').decode()
    # results_transportation_tmp_json = json.dumps(results_transportation_tmp_dic).encode('utf-8').decode() # 추가
    # results_transportation_tmp2_json = json.dumps(results_transportation_tmp2_dic).encode('utf-8').decode() # 추가
    results_transportation_tmp3_json = json.dumps(results_transportation_tmp3_dic).encode('utf-8').decode() # 추가

    results_region_json = json.dumps(results_region_dic).encode('utf-8').decode()  # 추가
    
    # print(type(results_json))
    # print(results_transportation_json)

    # processing.print_separate_by_date(results_dic)
    # processing.print_separate_by_transport(results_transportation_dic)

    return render(request, 'index.html', {'api_key' : kakao_api, 'total_person_cnt' : len(results_dic) ,  'results_map'
    : results_json, 'results_transportation_map' : results_transportation_tmp3_json, 'results_region_map' : results_region_json})

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



## 새로운 application 생성 후 옮기기.
def region_post(request) :
    if request.method == "POST":
        pass





