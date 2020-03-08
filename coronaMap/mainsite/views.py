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
    날짜별로 이동경로 만들기. (새로운 list 만들어서 구분 넣기. 날짜가 바뀔때만 1을 삽입. 아닌 경우 0을 삽입)

    """
    colour_template = {"자차" : GREEN, "도보" : YELLOW, "대중교통" : RED}

    results_map = {}
    total_person_num: int = 1
    total_spot_cnt: int = 1
    spot_cnt:int = 0
    person_map = {}

    check_date: int = 0
    change_date:int = 0

    results = InfectedPeople.objects.all().order_by('id') # -는 내림차순

    for result in results:
        if result.person_num != total_person_num or len(results) == total_spot_cnt:
            results_map["person_" + str(total_person_num)] = person_map
            spot_cnt = 0


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

    print(total_person_cnt)
    for key in results_map :
        results = results_map.get(key)
        print(key)
        print(results)
        print(results_map.get(key).get("spot_cnt"))
        for result in results.values():
            print("person_num : " + str(result.get("person_num")))
            # print("region : " + result.get("region"))
            print("visited_date : " + str(result.get("visited_date")))
            # print("address : " + result.get("address"))
            # print("place : " + result.get("place"))
            # print("latitude : " + result.get("latitude"))
            # print("longitude : " + result.get("longitude"))
            # print("transportation : " + result.get("transportation"))
            # print("color : " + result.get("color"))
            print("change_date : " + str(result.get("change_date")))
            print()



    return render(request, 'index.html', {'api_key' : kakao_api, 'total_person_cnt' : total_person_cnt ,  'results_map' : results_map})

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