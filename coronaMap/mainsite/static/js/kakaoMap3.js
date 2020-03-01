



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

var positions = [
// 	1호환자(속초)
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
// 	2호환자(속초)
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
// 	3호환자(강릉)
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
// 	4호환자(춘천)
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
// 	5호환자(춘천)
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

	// 	6호환자(삼척)
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
    },
	
	// 	7호환자(원주)
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

	// 	8호환자(원주)
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
	
		// 	9호환자(강릉)
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
	
		// 	10호환자(강릉)
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
	
	//  11호환자(강릉)
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


