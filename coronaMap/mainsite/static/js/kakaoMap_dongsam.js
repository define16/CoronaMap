



var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.4402407	,	129.1674001), // 지도의 중심좌표
        level: 7// 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.





var positions = [
   
	// 	6호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">삼척볼링센터</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4402407	,	129.1674001)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">세븐일레븐삼척삼원점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4399553	,	129.1672816)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">오션PC방</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.443025	,	129.1642814)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">만치만치</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4435794	,	129.1637047)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">역전할머니맥주동해천곡/세븐일레븐동해중앙</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.5211178	,	129.1164201)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">오션PC방</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.443025	,	129.1642814)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">맥도날드동해DT점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.5207639	,	129.1140241)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">데일리커피숍</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4442783	,	129.1633708)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">CU삼척대학로점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4435721	,	129.1631689)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">세븐일레븐동해중앙점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.5211178	,	129.1164201)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">모닝캄</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.442638	,	129.1646043)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">김밥천국삼척점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4426145	,	129.1642434)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">성내동사무소</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4461688	,	129.1628124)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">가고파사진관</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4447321	,	129.1635869)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">GS25삼척남양점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.442891	,	129.1642545)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">양과분식</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4440813	,	129.1634299)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">삼척아이비스PC</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4429523	,	129.1635254)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">역전할머니맥주동해천곡점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.5211178	,	129.1164201)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">오션PC방</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.443025	,	129.1642814)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">GS25삼척원당점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4394773	,	129.1521793)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">놀부부대찌개삼척점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4440813	,	129.1634299)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">삼척볼링센터</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4402407	,	129.1674001)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">오션PC방</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.443025	,	129.1642814)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">그랑프리당구장</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.443025	,	129.1642814)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">오션PC방</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.443025	,	129.1642814)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">CU삼척대학로점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4435721	,	129.1631689)
    }
	
];



// 6번환자
var pos_6 = [
    new kakao.maps.LatLng(37.4402407	,	129.1674001),
	new kakao.maps.LatLng(37.4399553	,	129.1672816),
	new kakao.maps.LatLng(37.443025	,	129.1642814),
	new kakao.maps.LatLng(37.4435794	,	129.1637047),
	new kakao.maps.LatLng(37.5211178	,	129.1164201),
	new kakao.maps.LatLng(37.443025	,	129.1642814),
	new kakao.maps.LatLng(37.5207639	,	129.1140241),
	new kakao.maps.LatLng(37.4442783	,	129.1633708),
	new kakao.maps.LatLng(37.4435721	,	129.1631689),
	new kakao.maps.LatLng(37.5211178	,	129.1164201),
	new kakao.maps.LatLng(37.442638	,	129.1646043),
	new kakao.maps.LatLng(37.4426145	,	129.1642434),
	new kakao.maps.LatLng(37.4461688	,	129.1628124),
	new kakao.maps.LatLng(37.4447321	,	129.1635869),
	new kakao.maps.LatLng(37.442891	,	129.1642545),
	new kakao.maps.LatLng(37.4440813	,	129.1634299),
	new kakao.maps.LatLng(37.4429523	,	129.1635254),
	new kakao.maps.LatLng(37.5211178	,	129.1164201),
	new kakao.maps.LatLng(37.443025	,	129.1642814),
	new kakao.maps.LatLng(37.4394773	,	129.1521793),
	new kakao.maps.LatLng(37.4440813	,	129.1634299),
	new kakao.maps.LatLng(37.4402407	,	129.1674001),
	new kakao.maps.LatLng(37.443025	,	129.1642814),
	new kakao.maps.LatLng(37.443025	,	129.1642814),
	new kakao.maps.LatLng(37.443025	,	129.1642814),
	new kakao.maps.LatLng(37.4435721	,	129.1631689)
];


var polyline = new kakao.maps.Polyline({
            path: pos_6, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#A15CDE', // 선의 색깔입니다
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


