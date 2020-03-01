var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(38.1960474,128.5739396), // 지도의 중심좌표
        level: 8// 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.





var positions = [
// 	1호환자
    {
        content: '<div class ="label"><span class="left"></span><span class="center">애플24편의점아야진</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2737631,	128.5554013)
    },
    {
        content: '<div class ="label"><span class="left"></span><span class="center">아야진항구</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2706048,	128.5568356)
    },
    {
        content: '<div class ="label"><span class="left"></span><span class="center">속초이마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2015581,	128.593468)
    },
    {
        content: '<div class ="label"><span class="left"></span><span class="center">아바이마을</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2005926,	128.5947703)
    },
    {
        content: '<div class ="label"><span class="left"></span><span class="center">고성진부령미술관</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2654241,	128.3596247)
    },
    {
        content: '<div class ="label"><span class="left"></span><span class="center">치악휴게소</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.2568971,	128.0482991)
    },
    {
        content: '<div class ="label"><span class="left"></span><span class="center">사랑약국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2071264,	128.5746114)
    },
// 	2호환자
	 {
        content: '<div class ="label"><span class="left"></span><span class="center">자택 금호동</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2068758	,	128.5881271)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">간성투썸플레이스</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.3789305	,	128.4730371)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">일호식당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.1952536	,	128.5731771)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">가덕국수</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2099005	,	128.5865252)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">속초시외버스터미널 앞</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2106879	,	128.588693)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">K팝스타코인노래연습장</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2039806	,	128.5899286)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">스타벅스중앙로점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2039806	,	128.5899286)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">짬뽕의신</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.1938753	,	128.5746344)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">파스쿠찌 영랑호점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2165444	,	128.5795317)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">매자식당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2102033	,	128.5865082)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">다사랑미용실</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.2039806	,	128.5899286)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">우동당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.1864654	,	128.603429)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">속초시보건소</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(38.1960432	,	128.5761283)
    },

];

// 1번환자
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
polyline.setMap(map);


// 2번환자
var pos_2 = [
    new kakao.maps.LatLng(38.2068758	,	128.5881271),
    new kakao.maps.LatLng(38.3789305	,	128.4730371),
    new kakao.maps.LatLng(38.1952536	,	128.5731771),
    new kakao.maps.LatLng(38.2099005	,	128.5865252),
    new kakao.maps.LatLng(38.2106879	,	128.588693),
    new kakao.maps.LatLng(38.2039806	,	128.5899286),
    new kakao.maps.LatLng(38.1938753	,	128.5746344),
	new kakao.maps.LatLng(38.2165444	,	128.5795317),
	new kakao.maps.LatLng(38.2102033	,	128.5865082),
	new kakao.maps.LatLng(38.2039806	,	128.5899286),
	new kakao.maps.LatLng(38.1864654	,	128.603429),
	new kakao.maps.LatLng(38.1960432	,	128.5761283)
];


var polyline = new kakao.maps.Polyline({
            path: pos_2, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#81D653', // 선의 색깔입니다
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
