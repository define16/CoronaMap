from .models import InfectedPeople
from pprint import pprint

class DataProcessing():
    GREEN = "#00ff00"
    YELLOW = "#ffff00"
    RED = "#FF0000"
    BLACK = "#000000"
    colour_template = {"자차": GREEN, "도보": YELLOW, "대중교통": RED}

    def separate_by_date(self, results):
        """
        커스텀 오버레이, 날짜별 방문 장소를 분리
        results : Queryset
        """
        results_dic = {}
        person_dic = {}
        check_person_num: int = 1
        total_spot_cnt: int = 1
        spot_cnt:int = 0
        check_date: int = 0

        for result in results:
            # if result.person_num != check_person_num or len(results) == total_spot_cnt:  # 사람별로 구분
            if result.person_num != check_person_num:  # 사람별로 구분
                results_dic["person_" + str(check_person_num)] = person_dic
                spot_cnt = 0
                person_dic = {}

            tmp_transportation = result.transportation
            color = self.convert_color(tmp_transportation)

            if int(result.visited_date) != check_date :
                change_date = 1  # 날짜가 바뀌었을 때
            else :
                change_date = 0  # 날짜가 안 바뀌었을 때(즉, 같은날 이동)
            spot_dic = {'person_num' : result.person_num, 'region': result.region ,'region_id': result.region_id ,
                        'visited_date': result.visited_date, 'address': result.address,'place': result.place,
                        'latitude': result.latitude, 'longitude': result.longitude,
                        'transportation': result.transportation,'color': color, 'change_date' : change_date}
            person_dic[str(spot_cnt)] = spot_dic
            spot_cnt += 1
            check_date = result.visited_date
            check_person_num = result.person_num
            total_spot_cnt += 1

        results_dic["person_" + str(check_person_num)] = person_dic # 마지막 Index 저장

        return results_dic

    def separate_by_transport(self, results_dic: dict):
        """
        날짜-이동수단별 분리
        results_dic : separate_by_date를 마친 dictionary
        """
        results_transportation_dic = {}
        for key, results in results_dic.items():  # 사람별로 구분
            date_tmp = 0
            transport_tmp = ""
            latitude_before = ""
            longitude_before = ""
            path_dic = []
            transport_dic = []
            transport_idx = 0
            path_idx = 0

            for result in results.values():  # 날짜 + 이동수단로 구분
                # 날짜별로 구분
                if transport_tmp == "" or result.get("transportation") == transport_tmp:  # 같은 이동수단으로 다음 장소로 이동한 경우
                    latitude_before = result.get("latitude")
                    longitude_before = result.get("longitude")
                    spot_dic = {"latitude": result.get("latitude"), "longitude": result.get("longitude"),
                                "color": self.convert_color(result.get("transportation"))}
                    path_dic.append(spot_dic)
                    path_idx += 1
                else:  # 이동수단을 변경한 경우
                    spot_dic = {"latitude": latitude_before, "longitude": longitude_before,
                                "color": self.convert_color(transport_tmp)}
                    path_dic.append(spot_dic)
                    path_idx += 1
                    transport_dic.append(path_dic)  # 현 이동수단으로 움직인 경로를 저장
                    transport_idx += 1
                    path_dic = []  # 경로 초기화
                    path_idx = 0
                    spot_dic = {"latitude": result.get("latitude"), "longitude": result.get("longitude"),
                                "color": self.convert_color(result.get("transportation"))}
                    path_dic.append(spot_dic)
                    path_idx += 1

                transport_tmp = result.get("transportation")  # 이전(index-1) 이동수단

            transport_dic.append(path_dic)
            results_transportation_dic[key] = transport_dic
        return results_transportation_dic

    def separate_by_region(self,results) :
        regions_dic = {}
        regions_rows = InfectedPeople.objects.values('region').order_by('region').distinct()  # -는 내림차순
        for row in regions_rows :
            regions_dic[row.get('region')] = []
        for key, result in results.items() :
            region_tmp = []
            for value in result.values():
                if value.get('region') in region_tmp :
                    continue
                else :
                    region_tmp.append(value.get('region'))
            for region_name in region_tmp :
                tmp_list = regions_dic.get(region_name)
                tmp_list.append(key)
                regions_dic[region_name] = tmp_list

        return regions_dic


    def convert_color(self, transportation) :
        if transportation in self.colour_template.keys():
            return self.colour_template.get(transportation)
        return self.BLACK

    def print_separate_by_date(self, results_dic):
        print("row :", len(results_dic))
        for key,results in results_dic.items() :
            print(key)
            print(results)
            for result in results.values():
                print("person_num : " + str(result.get("person_num")))
                print("region : " + result.get("region"))
                print("visited_date : " + str(result.get("visited_date")))
                print("address : " + result.get("address"))
                print("place : " + result.get("place"))
                print("latitude : " + result.get("latitude"))
                print("longitude : " + result.get("longitude"))
                print("transportation : " + result.get("transportation"))
                print("color : " + result.get("color"))
                print("change_date : " + str(result.get("change_date")))
                print()

    def print_separate_by_transport(self,results_transportation_dic):
        print("row :", len(results_transportation_dic))
        for key, results in results_transportation_dic.items():
            print("[" + key + "]")
            for date, result in results.items():
                print("[" + date + "]")
                for k1, path in result.items():
                    print("[change Transport]", k1)
                    for k2, spot in path.items():
                        print("key :", k2)
                        print("latitude :", spot.get('latitude'))
                        print("longitude :", spot.get('longitude'))
                        print("color :", spot.get('color'))
                        print()
