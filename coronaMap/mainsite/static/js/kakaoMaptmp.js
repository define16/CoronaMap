
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.7880199,128.4472971), // 지도의 중심좌표
        level: 12// 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

    if (navigator.geolocation) {

       // GeoLocation을 이용해서 접속 위치를 얻어옵니다
       navigator.geolocation.getCurrentPosition(function(position) {

           var lat = position.coords.latitude, // 위도
               lon = position.coords.longitude; // 경도

           var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
               message = '<div style="padding:3px; width:100%; height:100%; font-size:0.85em;">사용자 위치</div>'; // 인포윈도우에 표시될 내용입니다

           // 마커와 인포윈도우를 표시합니다
           displayMarker(locPosition, message);

         });

    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

       var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
           message = 'geolocation을 사용할수 없어요..'

       displayMarker(locPosition, message);
    }


    // 마커
    {% for result in results %}
    {% if result == 1 %}
    var positions_{{result.person_id}} = [

    // 	1호환자
        {
            content: '<div class ="label"><span class="left"></span><span class="center">{{result.person_num}}</span><span class="right"></span></div>',
            latlng: new kakao.maps.LatLng({{result.latitude}} ,{{result.longitude}})
        },

        // 마지막 부분
        {
            content: '<div class ="label"><span class="left"></span><span class="center">CU삼척대학로점</span><span class="right"></span></div>',
            latlng: new kakao.maps.LatLng(37.4435721	,	129.1631689)
        }

    ];
    {% endfor %}

    // 환자 이동경로
    {% for result in results %}
    var pos_1 = [
        new kakao.maps.LatLng(38.2737631,	128.5554013),
        new kakao.maps.LatLng(38.2706048,	128.5568356),
        new kakao.maps.LatLng(38.2015581,	128.593468),
        new kakao.maps.LatLng(38.2005926,	128.5947703),
        new kakao.maps.LatLng(38.2654241,	128.3596247),
        new kakao.maps.LatLng(37.2568971,	128.0482991),
        new kakao.maps.LatLng(38.2071264,	128.5746114)
    ];

    var polyline = new kakao.maps.Polyline({
                path: pos_1, // 선을 구성하는 좌표배열 입니다
                strokeWeight: 5, // 선의 두께 입니다
                strokeColor: '#FF0000', // 선의 색깔입니다
                strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'solid' // 선의 스타일입니다
    });
    {% endfor %}
    polyline.setMap(map);





    for (var i = 0; i < positions.length; i ++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });

    // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: positions[i].latlng,
            content: positions[i].content
        });

        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);

    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }


    function displayMarker(locPosition, message) {

       // 마커를 생성합니다
       var marker = new kakao.maps.Marker({
           map: map,
           position: locPosition
       });

       var iwContent = message, // 인포윈도우에 표시할 내용
           iwRemoveable = true;

       // 인포윈도우를 생성합니다
       var infowindow = new kakao.maps.InfoWindow({
           content : iwContent,
           removable : iwRemoveable
       });

       // 인포윈도우를 마커위에 표시합니다
       infowindow.open(map, marker);

        // 지도 중심좌표를 접속위치로 변경합니다
       map.setCenter(locPosition);
    }

    // TODO : 각 지역을 불러오기
    // 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
    function changeMarker(type){

        var coffeeMenu = document.getElementById('');
        var storeMenu = document.getElementById('');
        var carparkMenu = document.getElementById('');

        // 커피숍 카테고리가 클릭됐을 때
        if (type === '') {

            // 커피숍 카테고리를 선택된 스타일로 변경하고
            coffeeMenu.className = 'menu_selected';

            // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
            storeMenu.className = '';
            carparkMenu.className = '';

            // 커피숍 마커들만 지도에 표시하도록 설정합니다
            setCoffeeMarkers(map);
            setStoreMarkers(null);
            setCarparkMarkers(null);

        } else if (type === '') { // 편의점 카테고리가 클릭됐을 때

            // 편의점 카테고리를 선택된 스타일로 변경하고
            coffeeMenu.className = '';
            storeMenu.className = 'menu_selected';
            carparkMenu.className = '';

            // 편의점 마커들만 지도에 표시하도록 설정합니다
            setCoffeeMarkers(null);
            setStoreMarkers(map);
            setCarparkMarkers(null);

        } else if (type === '') { // 주차장 카테고리가 클릭됐을 때

            // 주차장 카테고리를 선택된 스타일로 변경하고
            coffeeMenu.className = '';
            storeMenu.className = '';
            carparkMenu.className = 'menu_selected';

            // 주차장 마커들만 지도에 표시하도록 설정합니다
            setCoffeeMarkers(null);
            setStoreMarkers(null);
            setCarparkMarkers(map);
        }
    }

    marker.setMap(map);