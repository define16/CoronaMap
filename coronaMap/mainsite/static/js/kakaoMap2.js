var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.7811132	,	128.9347671), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다.

// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다.
var linePath = [
    new kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
    new kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
    new kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
    new kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
    new kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
    new kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
    new kakao.maps.LatLng(37.49754540521486, 127.02546694890695)
];

//// 지도에 표시할 선을 생성합니다
//var polyline = new kakao.maps.Polyline({
//    path: linePath, // 선을 구성하는 좌표배열 입니다
//    strokeWeight: 5, // 선의 두께 입니다
//    strokeColor: '#FFAE00', // 선의 색깔입니다
//    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
//    strokeStyle: 'solid' // 선의 스타일입니다
//});

//if (navigator.geolocation) {
//
//    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//    navigator.geolocation.getCurrentPosition(function(position) {
//
//        var lat = position.coords.latitude, // 위도
//            lon = position.coords.longitude; // 경도
//
//        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//            message = '<div style="padding:3px; width:100%; height:100%; font-size:0.85em;">사용자 위치</div>'; // 인포윈도우에 표시될 내용입니다
//
//        // 마커와 인포윈도우를 표시합니다
//        displayMarker(locPosition, message);
//
//      });
//
//} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
//
//    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
//        message = 'geolocation을 사용할수 없어요..'
//
//    displayMarker(locPosition, message);
//}
//
//function displayMarker(locPosition, message) {
//
//    // 마커를 생성합니다
//    var marker = new kakao.maps.Marker({
//        map: map,
//        position: locPosition
//    });
//
//    var iwContent = message, // 인포윈도우에 표시할 내용
//        iwRemoveable = true;
//
//    // 인포윈도우를 생성합니다
//    var infowindow = new kakao.maps.InfoWindow({
//        content : iwContent,
//        removable : iwRemoveable
//    });
//
//    // 인포윈도우를 마커위에 표시합니다
//    infowindow.open(map, marker);
//
//     지도 중심좌표를 접속위치로 변경합니다
//    map.setCenter(locPosition);
//}

// 지도에 선을 표시합니다
//polyline.setMap(map);

var locations = [[38.3724912,128.4143097,'1번'],
                [37.6732922,128.7065569,'2번']];



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

// 편의점 마커가 표시될 좌표 배열입니다
var storePositions = [
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
    new kakao.maps.LatLng(38.1960432	,	128.5761283),
    new kakao.maps.LatLng(37.7553367	,	128.9152179),
    new kakao.maps.LatLng(37.7492664	,	128.8887254),
    new kakao.maps.LatLng(37.7811132	,	128.9347671),

];

// 주차장 마커가 표시될 좌표 배열입니다
var carparkPositions = [
    new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
    new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
    new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
    new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
    new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
    new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
    new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)
];


var polylines = [];

var markerImageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
    coffeeMarkers = [], // 커피숍 마커 객체를 가지고 있을 배열입니다
    storeMarkers = [], // 편의점 마커 객체를 가지고 있을 배열입니다
    carparkMarkers = []; // 주차장 마커 객체를 가지고 있을 배열입니다


createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다

changeMarker('coffee'); // 지도에 커피숍 마커가 보이도록 설정합니다


// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;
}


// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });

    return marker;
}

// 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
function createCoffeeMarkers() {

    for (var i = 0; i < coffeePositions.length; i++) {

        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {
                spriteOrigin: new kakao.maps.Point(10, 0),
                spriteSize: new kakao.maps.Size(36, 98)
            };

        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
            marker = createMarker(coffeePositions[i], markerImage);



        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        coffeeMarkers.push(marker);



    }
}

// 커피숍 마커들의 지도 표시 여부를 설정하는 함수입니다
function setCoffeeMarkers(map) {

    for (var i = 0; i < coffeeMarkers.length; i++) {
        coffeeMarkers[i].setMap(map);

    }
}


// 편의점 마커를 생성하고 편의점 마커 배열에 추가하는 함수입니다
function createStoreMarkers() {
    for (var i = 0; i < storePositions.length; i++) {

        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {
                spriteOrigin: new kakao.maps.Point(10, 36),
                spriteSize: new kakao.maps.Size(36, 98)
            };

        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
            marker = createMarker(storePositions[i], markerImage);


        // 생성된 마커를 편의점 마커 배열에 추가합니다
        storeMarkers.push(marker);


    }
}

// 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
function setStoreMarkers(map) {
    for (var i = 0; i < storeMarkers.length; i++) {
        storeMarkers[i].setMap(map);
    }
}



// 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createCarparkMarkers() {
    for (var i = 0; i < carparkPositions.length; i++) {

        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {
                spriteOrigin: new kakao.maps.Point(10, 72),
                spriteSize: new kakao.maps.Size(36, 98)
            };

        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),
            marker = createMarker(carparkPositions[i], markerImage);

        // 생성된 마커를 주차장 마커 배열에 추가합니다
        carparkMarkers.push(marker);
    }
}

// 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
function setCarparkMarkers(map) {
    for (var i = 0; i < carparkMarkers.length; i++) {
        carparkMarkers[i].setMap(map);
    }
}




// 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
function changeMarker(type){

    var coffeeMenu = document.getElementById('coffeeMenu');
    var storeMenu = document.getElementById('storeMenu');
    var carparkMenu = document.getElementById('carparkMenu');

    // 커피숍 카테고리가 클릭됐을 때
    if (type === 'coffee') {

        // 커피숍 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = 'menu_selected';

        // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
        storeMenu.className = '';
        carparkMenu.className = '';

        var polyline = new kakao.maps.Polyline({
        path: coffeePositions, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: '#FFAE00', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
        });

        // 커피숍 마커들만 지도에 표시하도록 설정합니다
        setCoffeeMarkers(map);
        setStoreMarkers(null);
        setCarparkMarkers(null);

        polylines.push(polyline);

        deletepolyline(polylines);
        polyline.setMap(map);


    } else if (type === 'store') { // 편의점 카테고리가 클릭됐을 때

        // 편의점 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = '';
        storeMenu.className = 'menu_selected';
        carparkMenu.className = '';


        // 편의점 마커들만 지도에 표시하도록 설정합니다
        deletepolyline(polylines);
        setCoffeeMarkers(null);
        setStoreMarkers(map);
        setCarparkMarkers(null);

        var polyline = new kakao.maps.Polyline({
        path: storePositions, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: '#09FE00', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
        });

        polylines.push(polyline);
        polyline.setMap(map);




    } else if (type === 'carpark') { // 주차장 카테고리가 클릭됐을 때

        // 주차장 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = '';
        storeMenu.className = '';
        carparkMenu.className = 'menu_selected';

        // 주차장 마커들만 지도에 표시하도록 설정합니다
        deletepolyline(polylines);
        setCoffeeMarkers(null);
        setStoreMarkers(null);
        setCarparkMarkers(map);

        var polyline = new kakao.maps.Polyline({
        path: carparkPositions, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 15, // 선의 두께 입니다
        strokeColor: '#FFAE00', // 선의 색깔입니다
        strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
        });

        polylines.push(polyline);
        polyline.setMap(map);

    }

function deletepolyline(polylines){
    for (var i = 0; i<polylines.length; i++){
        polylines[i].setMap(null);
    }
    polylines = [];
}

//var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
//imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
//    markerPosition = new kakao.maps.LatLng(37.7811132	,	128.9347671); // 마커가 표시될 위치입니다
//
//
//
//// 마커를 생성합니다
//var marker = new kakao.maps.Marker({
//    position: markerPosition,
//    image: markerImage // 마커이미지 설정
//});

}
//
//var content = '<div class="wrap">' +
//            '    <div class="info">' +
//            '        <div class="title">' +
//            '            카카오 스페이스닷원' +
//            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
//            '        </div>' +
//            '        <div class="body">' +
//            '            <div class="img">' +
//            '                <img src="http://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
//            '           </div>' +
//            '            <div class="desc">' +
//            '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
//            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
//            '                <div><a href="http://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
//            '            </div>' +
//            '        </div>' +
//            '    </div>' +
//            '</div>';
//
//var position = new kakao.maps.LatLng(37.7811132	,	128.9347671);
//
//var overlay = new kakao.maps.CustomOverlay({
//    content: content,
//    map: map,
//    position: position
//});
//
//// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
//kakao.maps.event.addListener(marker, 'click', function() {
//    overlay.setMap(map);
//});
//
//// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
//function closeOverlay() {
//    overlay.setMap(null);
//}


marker.setMap(map);


