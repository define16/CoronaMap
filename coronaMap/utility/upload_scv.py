import csv
import json
import os
import sys
import pymysql;

# D:\Programing Folder\Python\Corona\coronaMap\coronaMap\conf\dbkey.json
# D:\Programing Folder\Python\Corona\coronaMap\utility\data\real.csv
def init():
    global db, cursor;
    path = os.path.join(os.path.abspath("../coronaMap"), 'conf', 'dbkey.json')
    with open(path, 'r') as f:
        json_data = json.load(f)
    mariadb = json_data['mariadb']  # 테스트용

    db = pymysql.connect(host=mariadb['HOST'], port=int(mariadb['PORT']), user=mariadb['USER'], passwd=mariadb['PASSWORD'], db=mariadb['NAME'], charset='utf8');
    cursor = db.cursor()

def insert_data(data, data_size):
    try:
        progressbar: int = 0
        for line in data:
            progressbar += 1;
            if (line[0].isdigit()):
                sql = "INSERT INTO infected_people (person_num, region, region_id, visited_date, place, address, latitude, longitude, transportation) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, tuple(line))
                # print(sql, tuple(line))

                print("Inserting (%d%%): [%d / %d] " % (progressbar/data_size * 100, progressbar, data_size))
        db.commit()

    finally:
        db.close();

# 파일명을 인자 값에서 가지고 온다.
path = os.path.join(os.path.abspath("./"), 'data', str(sys.argv[1]))
print(path)
init()
f = open(path, 'r', encoding='utf-8')
data = csv.reader(f)
data_size = len(open(path, 'r', encoding='utf-8').readlines())
insert_data(data, data_size)
f.close()