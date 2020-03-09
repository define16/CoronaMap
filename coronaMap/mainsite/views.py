from django.shortcuts import render, HttpResponse
import json
import os
from .models import InfectedPeople

GREEN ="#00ff00"
YELLOW = "#ffff00"
RED =  "#FF0000"
BLACK = "#000000"


key_path = os.path.join( os.getcwd(), 'coronaMap' ,'init', 'conf', 'apikey.json')
with open(key_path, 'r') as f:
    json_data = json.load(f)

# kakao_api = json_data['kakao'] # 본 서버용
kakao_api = json_data['kakao_test'] # 테스트용

# Create your views here.
def index(request):
    """
    TODO : 확진자 명수, 카테고리별로 확진자 그룹핑 로직 추가
    날짜별,교통수단별 이동경로에 색깔 적용하기 (새로운 map인 results_transportation을 추가로 만들어서 넘기기.)
    """
    colour_template = {"자차" : GREEN, "도보" : YELLOW, "대중교통" : RED}
    results_map = {}
    person_map = {}
    total_person_num: int = 1
    total_spot_cnt: int = 1
    spot_cnt:int = 0
    check_date: int = 0
    change_date:int = 0

    results_transportation = {}
    separation_by_transport = {}

    results = InfectedPeople.objects.all().order_by('id') # -는 내림차순
    # 커스텀 오버레이, 날짜별 방문 장소를 분리
    for result in results:
        if result.person_num != total_person_num or len(results) == total_spot_cnt:
            results_map["person_" + str(total_person_num)] = person_map
            spot_cnt = 0
            person_map = {}

        if result.person_num == total_person_num :
            tmp_transportation = result.transportation
            if tmp_transportation in colour_template.keys() :
                color = colour_template.get(tmp_transportation)
            else :
                color = BLACK
            if int(result.visited_date) != check_date :
                change_date = 1 # 날짜가 바뀌었을 때
            else :
                change_date = 0; # 날짜가 안 바뀌었을 때(즉, 같은날 이동)
            spot_map = {'person_num' : result.person_num, 'region': result.region ,'visited_date': result.visited_date,'address': result.address,'place': result.place,
                        'latitude': result.latitude,'longitude': result.longitude,'transportation': result.transportation,'color': color, 'change_date' : change_date}
            person_map[str(spot_cnt)] = spot_map
            spot_cnt+=1
            check_date = result.visited_date

        total_person_num = result.person_num
        total_spot_cnt += 1

    total_person_cnt = len(results_map)


    # 날짜-이동수단별 분리
    for key,results in results_map.items(): # 사람별
        date_tmp = 0;
        transport_tmp = ""
        latitude_before = ""
        longitude_before = ""
        path_map = {}
        transport_map = {}
        date_map = {}
        person_transport_map = {}
        transport_idx = 0;
        date_idx = 0;
        path_idx = 0;
        for result in results.values(): # 날짜 + 이동수단
            print(result)
            if result.get("visited_date") == date_tmp: # 날짜별
                if transport_tmp == "" :
                    latitude_before = result.get("latitude")
                    longitude_before = result.get("longitude")
                    spot_map = {"latitude": result.get("latitude"), "longitude": result.get("longitude")}
                    path_map[str(path_idx)] = spot_map
                    path_idx += 1
                elif result.get("transportation") == transport_tmp : # 이동수단별
                    latitude_before = result.get("latitude")
                    longitude_before = result.get("longitude")
                    spot_map = {"latitude": result.get("latitude"), "longitude": result.get("longitude")}
                    path_map[str(path_idx)] = spot_map
                    path_idx += 1
                else :
                    spot_map = {"latitude": latitude_before, "longitude": longitude_before}
                    path_map[str(path_idx)] = spot_map
                    path_idx += 1
                    spot_map = {"latitude": result.get("latitude"), "longitude": result.get("longitude")}
                    path_map[str(path_idx)] = spot_map
                    path_idx += 1
            else:
                pass
            date_tmp = result.get("visited_date")


    # print(total_person_cnt)
    # for key,results in results_map.items() :
    #     print(key)
    #     print(results)
    #     for result in results.values():
    #         print("person_num : " + str(result.get("person_num")))
    #         print("region : " + result.get("region"))
    #         print("visited_date : " + str(result.get("visited_date")))
    #         print("address : " + result.get("address"))
    #         print("place : " + result.get("place"))
    #         print("latitude : " + result.get("latitude"))
    #         print("longitude : " + result.get("longitude"))
    #         print("transportation : " + result.get("transportation"))
    #         print("color : " + result.get("color"))
    #         print("change_date : " + str(result.get("change_date")))
    #         print()



    return render(request, 'index.html', {'api_key' : kakao_api, 'total_person_cnt' : total_person_cnt ,  'results_map'
    : results_map})

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