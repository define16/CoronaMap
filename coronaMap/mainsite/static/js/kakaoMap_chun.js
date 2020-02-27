



var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.8797218	,	127.7293184), // 지도의 중심좌표
        level: 7// 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.




var positions = [

// 	4호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">신천지새명동센터</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8797218	,	127.7293184)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">명동입구 정류장(2054)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8791271	,	127.7289193)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">퇴계주공4차 정류장(1125)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8541466	,	127.7456576)
    },
// 	5호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">춘천고속버스터미널</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.864655	,	127.717466)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">신천지새명동센터</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8797218	,	127.7293184)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">두레약국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8802101	,	127.728497)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">명동입구 정류장(1671)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8797309	,	127.7266095)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">유승한내들 정류장(1567)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8644562	,	127.7261656)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">59쌀피자</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8621999	,	127.7309406)
    },


	
];


// 4번환자
var pos_4 = [
    new kakao.maps.LatLng(37.8797218	,	127.7293184),
	new kakao.maps.LatLng(37.8791271	,	127.7289193),
	new kakao.maps.LatLng(37.8541466	,	127.7456576)
];


var polyline = new kakao.maps.Polyline({
            path: pos_4, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#F8BA00', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);

// 5번환자
var pos_5 = [
    new kakao.maps.LatLng(37.864655	,	127.717466),
	new kakao.maps.LatLng(37.8797218	,	127.7293184),
	new kakao.maps.LatLng(37.8802101	,	127.728497),
	new kakao.maps.LatLng(37.8797309	,	127.7266095),
	new kakao.maps.LatLng(37.8644562	,	127.7261656),
	new kakao.maps.LatLng(37.8621999	,	127.7309406)
];


var polyline = new kakao.maps.Polyline({
            path: pos_5, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#EF5FA7', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

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

// var content = '<div class ="label"><span class="left"></span><span class="center">카카오!</span><span class="right"></span></div>';

// // 커스텀 오버레이가 표시될 위치입니다 
// var position = new kakao.maps.LatLng(38.2071264,	128.5746114);  

// // 커스텀 오버레이를 생성합니다
// var customOverlay = new kakao.maps.CustomOverlay({
//     position: position,
//     content: content   
// });
// customOverlay.setMap(map);

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


marker.setMap(map);


