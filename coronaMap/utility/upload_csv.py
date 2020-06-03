import csv
import json
import os
import shutil
import sys
import pymysql;

# D:\Programing Folder\Python\Corona\coronaMap\coronaMap\conf\dbkey.json
# D:\Programing Folder\Python\Corona\coronaMap\utility\data\real.csv
def init():
    global db, cursor;
    path = os.path.join(os.path.abspath("../coronaMap"), 'conf', 'dbkey.json')
    print(path)
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
                if line[8] in ['도보', '자차', '대중교통', '미공개']:
                    pass
                else :
                    line[8] = '미공개'
                if line[3] == '-':
                    line[3] = 19900101

                sql = "INSERT INTO infected_people (person_num, region, region_id, visited_date, place, address, latitude, longitude, transportation) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)"
#                cursor.execute(sql, tuple(line))
                print(line)
                print("Inserting (%d%%): [%d / %d] " % (progressbar/data_size * 100, progressbar, data_size))
        # db.commit()

    finally:
        # db.close();
        pass


file_list = os.listdir(os.path.join(".",'data'))
file_list_csv = [file for file in file_list if file.endswith(".csv")]

print(file_list_csv)

#init()
for file_csv in file_list_csv:
    path = os.path.join(".",'data', file_csv)
    f = open(path, 'r', encoding='utf-8')
    data = csv.reader(f)
    data_size = len(open(path, 'r', encoding='utf-8').readlines())
    insert_data(data, data_size)
    if not os.path.isdir('finish'):
        os.makedirs('finish')

    shutil.move(os.path.join('.','data', file_csv), os.path.join('.','finish'))

    f.close()
