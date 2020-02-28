# CoronaMap
코로나 바이스러의 이동경로를 보여주는 웹 어플리케이션

# 언어 및 프레임워크
Python, Django

# 실행 전 설정
1. coronaMap/coronaMap/dbkey.json 생성
    <pre><code>{
     "mariadb": {
      "NAME": "DB명",
      "USER": "User명",
      "PASSWORD": "Password",
      "HOST": "Host명",
      "PORT": "Port번호"
     }
    }</code></pre>
2. 초기화 스크립트 실행
    <pre><code># sh ./coronaMap/coronaMap/init/bin/init.sh </code></pre>


# 실행
<pre><code># python manage.py runserver</code></pre>

# 버전
1. Django : 2.2.4 (구름 기준)
2. MariaDB : 10.1.43-MariaDB
3. OS : Ubunto 18.04