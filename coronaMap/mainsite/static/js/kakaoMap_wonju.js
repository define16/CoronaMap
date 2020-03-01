var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.3360898,	127.9296176), // 지도의 중심좌표
        level: 7// 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.





var positions = [
// 	7호환자
    {
        content: '<div class ="label"><span class="left"></span><span class="center">원주성지병원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3455286,	127.9520395)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">원주의료원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3330109,	127.9467128)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">연세대학교원주세브란스</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3484732,	127.9429899)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">자택(흥업면)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.2891174,	127.8648446)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">만앤휴멜코리아(근무지)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3312509,	127.8402338)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">태장동학관예배당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.382022,	127.945906)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">맛찬들삽겹살</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3360898,	127.9296176)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">만종역</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.353745,	127.89077)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">차신웅내과</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3420257,	127.9528802)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">수협바다마트(무실동)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3311766,	127.9233685)
    },
	
// 	8호환자
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">자택</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3498707,127.9186377)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">태장동학관예배당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.382022, 127.945906)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">현대오일뱅크 동원셀프주유소 </span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3296184,127.9431071)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">이마트24원주한라대점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3048583,127.9097637)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">단계동 원예하나로마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3411342,127.9367515)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">단계동 플러스마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3572039,127.9355961)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">현대오일뱅크 동원셀프주유소 </span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3296184,127.9431071)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">버거킹 명륜오일DT점</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3295598,127.945071)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">㈜대현유통문막하 주유소</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3352824,127.8560758)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">차신웅 내과</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3420299,127.9528855)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">단골약국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3421183,127.9529509)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">정지마을</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3559008,127.9362945)
    },
	{	
        content: '<div class ="label"><span class="left"></span><span class="center">원주의료원</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3330109,127.9467181)
    },
	
		//  13호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">태장동학관예배당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.382022	,	127.9481)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">토종추어탕</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3850202	,	127.9773154)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">원주역</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3566981	,	127.9457322)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">자택</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3412674	,	128.0127368)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">SG마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3427266	,	127.9844356)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">오토큐 신일자동차공업사</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.4176689	,	128.0167679)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">중앙동 제일은행</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3489402	,	127.9514645)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">중앙동 국민은행</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3500234	,	127.9507424)
    },


	//  14호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">태장동학관예배당</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.382022	,	127.9481)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">자택</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3722802	,	127.9344731)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">새원주해장국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3674092	,	127.9376725)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">종가집감자탕</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3152512	,	127.9604368)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">원주원예농협(우산동)</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3507455	,	127.9476315)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">자택</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3722802	,	127.9344731)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">중앙시장</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3500385	,	127.948753)
    },
	
	//  15호환자
	{
        content: '<div class ="label"><span class="left"></span><span class="center">자택</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3525786	,	127.9344104)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">원주축산농협하나로마트</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.3566673	,	127.9433233)
    },
	{
        content: '<div class ="label"><span class="left"></span><span class="center">원예하나로마트(단계동),아리시장약국</span><span class="right"></span></div>',
        latlng: new kakao.maps.LatLng(37.34113	,	127.9389402)
    },
	

];

// 7번환자
var pos_7 = [
    new kakao.maps.LatLng(37.3455286,	127.9520395),
	new kakao.maps.LatLng(37.3330109,	127.9467128),
	new kakao.maps.LatLng(37.3484732,	127.9429899),
	new kakao.maps.LatLng(37.2891174,	127.8648446),
	new kakao.maps.LatLng(37.3312509,	127.8402338),
	new kakao.maps.LatLng(37.382022,	127.945906),
	new kakao.maps.LatLng(37.3360898,	127.9296176),
	new kakao.maps.LatLng(37.353745,	127.89077),
	new kakao.maps.LatLng(37.3420257,	127.9528802),
	new kakao.maps.LatLng(37.3311766,	127.9233685)
];


var polyline = new kakao.maps.Polyline({
            path: pos_7, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#F8D3FF', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});
polyline.setMap(map);


// 8번환자
var pos_8 = [
    new kakao.maps.LatLng(37.3498707,127.9186377),
	new kakao.maps.LatLng(37.382022, 127.945906),
	new kakao.maps.LatLng(37.3296184,127.9431071),
	new kakao.maps.LatLng(37.3048583,127.9097637),
	new kakao.maps.LatLng(37.3411342,127.9367515),
	new kakao.maps.LatLng(37.3572039,127.9355961),
	new kakao.maps.LatLng(37.3296184,127.9431071),
	new kakao.maps.LatLng(37.3295598,127.945071),
	new kakao.maps.LatLng(37.3352824,127.8560758),
	new kakao.maps.LatLng(37.3420299,127.9528855),
	new kakao.maps.LatLng(37.3421183,127.9529509),
	new kakao.maps.LatLng(37.3559008,127.9362945),
	new kakao.maps.LatLng(37.3330109,127.9467181)
	
];


var polyline = new kakao.maps.Polyline({
            path: pos_8, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#FF9300', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});
polyline.setMap(map);

// 13번환자
var pos_13 = [
    new kakao.maps.LatLng(37.382022	,	127.9481),
	new kakao.maps.LatLng(37.3850202	,	127.9773154),
	new kakao.maps.LatLng(37.3566981	,	127.9457322),
	new kakao.maps.LatLng(37.3412674	,	128.0127368),
	new kakao.maps.LatLng(37.3427266	,	127.9844356),
	new kakao.maps.LatLng(37.4176689	,	128.0167679),
	new kakao.maps.LatLng(37.3489402	,	127.9514645),
	new kakao.maps.LatLng(37.3500234	,	127.9507424)

	
];


var polyline = new kakao.maps.Polyline({
            path: pos_13, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#929000', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);

// 14번환자
var pos_14 = [
    new kakao.maps.LatLng(37.382022	,	127.9481),
	new kakao.maps.LatLng(37.3722802	,	127.9344731),
	new kakao.maps.LatLng(37.3674092	,	127.9376725),
	new kakao.maps.LatLng(37.3152512	,	127.9604368),
	new kakao.maps.LatLng(37.3507455	,	127.9476315),
	new kakao.maps.LatLng(37.3722802	,	127.9344731),
	new kakao.maps.LatLng(37.3500385	,	127.948753)

	
];


var polyline = new kakao.maps.Polyline({
            path: pos_14, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#3D9284', // 선의 색깔입니다
            strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'solid' // 선의 스타일입니다
});

polyline.setMap(map);

// 15번환자
var pos_15 = [
    new kakao.maps.LatLng(37.3525786	,	127.9344104),
	new kakao.maps.LatLng(37.3566673	,	127.9433233),
	new kakao.maps.LatLng(37.34113	,	127.9389402),

	
];


var polyline = new kakao.maps.Polyline({
            path: pos_15, // 선을 구성하는 좌표배열 입니다
            strokeWeight: 5, // 선의 두께 입니다
            strokeColor: '#931755', // 선의 색깔입니다
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
