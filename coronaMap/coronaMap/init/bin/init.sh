#! /bin/bash
python -m pip install -r ../../../../requirements.txt
sleep .5
mysql -u root -p < ../create_table.sql
sleep .5
cd ../../../
sleep .5
python manage.py makemigrations
sleep .5
python manage.py migrate

echo "[Done initialize]"