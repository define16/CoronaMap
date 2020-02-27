



var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.7553367	,	128.9152179), // 지도의 중심좌표
        level: 7// 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.





var positions = [

// 	3호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">자택 입암동</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7553367	,	128.9152179)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉의료원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7492664	,	128.8887254)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">국군복지단 WA마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7811132	,	128.9347671)
    },

];


// 3번환자
var pos_3 = [
    new kakao.maps.LatLng(37.7553367	,	128.9152179),
	new kakao.maps.LatLng(37.7492664	,	128.8887254),
	new kakao.maps.LatLng(37.7811132	,	128.9347671)
];


var polyline = new kakao.maps.Polyline({
            path: pos_3, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#00A2FF', // 선의 색깔입니다
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


