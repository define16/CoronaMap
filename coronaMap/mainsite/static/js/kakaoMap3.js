var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(38.2737631,	128.5554013), // 지도의 중심좌표
        level: 8// 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.


// 커피숍 마커가 표시될 좌표 배열입니다
var coffeePositions = [
    new kakao.maps.LatLng(38.2737631,	128.5554013),
    new kakao.maps.LatLng(38.2706048,	128.5568356),
    new kakao.maps.LatLng(38.2015581,	128.593468),
    new kakao.maps.LatLng(38.2005926,	128.5947703),
    new kakao.maps.LatLng(38.2654241,	128.3596247),
    new kakao.maps.LatLng(37.2568971,	128.0482991),
    new kakao.maps.LatLng(38.2071264,	128.5746114)
];

var positions = [
    {
        content: '<div>카카오22</div>',
        latlng: new kakao.maps.LatLng(38.2737631,	128.5554013)
    },
    {
        content: '<div>생태연못222</div>',
        latlng: new kakao.maps.LatLng(38.2706048,	128.5568356)
    },
    {
        content: '<div>텃밭</div>',
        latlng: new kakao.maps.LatLng(38.2015581,	128.593468)
    },
    {
        content: '<div>근린공원222</div>',
        latlng: new kakao.maps.LatLng(38.2005926,	128.5947703)
    },
    {
        content: '<div>근린공원222</div>',
        latlng: new kakao.maps.LatLng(38.2654241,	128.3596247)
    },
    {
        content: '<div>근린공원222</div>',
        latlng: new kakao.maps.LatLng(37.2568971,	128.0482991)
    },
    {
        content: '<div>근린공원</div>',
        latlng: new kakao.maps.LatLng(38.2071264,	128.5746114)
    },
];

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

var polyline = new kakao.maps.Polyline({
            path: coffeePositions, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FF0000', // 선의 색깔입니다
            strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);


for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });



    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    infowindow.open(map, marker); 

	// kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    // kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
	
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

function makeClick(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}	

marker.setMap(map);

