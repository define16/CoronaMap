



var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.7492706,128.8865367), // 지도의 중심좌표
        level: 8// 지도의 확대 레벨
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
	
	// 	9호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉아산병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.818247,128.8570832)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">가톨릭관동대 CU편의점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7362967,128.8718417)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">관동대학교 교직원식당, 관동대우체국, 가톨릭관동대 유니버스텔</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7382873,128.8744725)
    },
	
	// 	10호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">사천우체국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.82331,128.8467418)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">사천농협</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8235734,128.8471935)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉아산병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.818247,128.8570832)
    },
	
	//  11호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">내곡동주민센터</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7389619,128.8787272)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">관동대학교 교직원식당, 관동대우체국, 가톨릭관동대 유니버스텔</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7382873,128.8744725)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉시청</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7519781,128.8736411)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">회산동육반장</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7400158,128.8649157)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉시청</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7519781,128.8736411)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉아산병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.818247,128.8570832)
    },

	//  12호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉아산병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8182428	,	128.8592719)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">사천하나로마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8245402	,	128.8495603)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">대은횟집</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.7654101	,	128.908181)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">삼보주유소</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8374023	,	128.8443841)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">연곡종로약국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8596494	,	128.8370124)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">굽네치킨포남점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.775386	,	128.9107572)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉아산병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8182428	,	128.8592719)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">백세약국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8183754	,	128.856158)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">강릉아산병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.8182428	,	128.8592719)
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

// 9번환자
var pos_9 = [
    new kakao.maps.LatLng(37.818247,128.8570832),
	new kakao.maps.LatLng(37.7362967,128.8718417),
	new kakao.maps.LatLng(37.7382873,128.8744725)
];


var polyline = new kakao.maps.Polyline({
            path: pos_9, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#327456', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);

// 10번환자
var pos_10 = [
    new kakao.maps.LatLng(37.82331,128.8467418),
	new kakao.maps.LatLng(37.8235734,128.8471935),
	new kakao.maps.LatLng(37.818247,128.8570832)
];


var polyline = new kakao.maps.Polyline({
            path: pos_10, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FF73FF', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);

// 11번환자
var pos_11 = [
    new kakao.maps.LatLng(37.7389619,128.8787272),
	new kakao.maps.LatLng(37.7382873,128.8744725),
	new kakao.maps.LatLng(37.7519781,128.8736411),
	new kakao.maps.LatLng(37.7400158,128.8649157),
	new kakao.maps.LatLng(37.7382873,128.8744725),
	new kakao.maps.LatLng(37.7519781,128.8736411),
	new kakao.maps.LatLng(37.818247,128.8570832)
	
];


var polyline = new kakao.maps.Polyline({
            path: pos_11, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FFD9CB', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);

// 12번환자
var pos_12 = [
    new kakao.maps.LatLng(37.8182428	,	128.8592719),
	new kakao.maps.LatLng(37.8245402	,	128.8495603),
	new kakao.maps.LatLng(37.7654101	,	128.908181),
	new kakao.maps.LatLng(37.8374023	,	128.8443841),
	new kakao.maps.LatLng(37.8596494	,	128.8370124),
	new kakao.maps.LatLng(37.775386	,	128.9107572),
	new kakao.maps.LatLng(37.8182428	,	128.8592719),
	new kakao.maps.LatLng(37.8183754	,	128.856158),
	new kakao.maps.LatLng(37.8182428	,	128.8592719)
	
];


var polyline = new kakao.maps.Polyline({
            path: pos_12, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#192553', // 선의 색깔입니다
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


