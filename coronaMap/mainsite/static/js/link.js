var scripts = document.getElementsByTagName('script');
var myScript = scripts[ scripts.length - 1 ];

var queryString = myScript.src.replace(/^[^\?]+\??/,'');

var params = parseQuery( queryString );

function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}
console.log("parparams : " + params.api); 

Kakao.init(params.api);
Kakao.Link.sendDefault({
container: '#kakao-link-btn',
objectType: 'feed',
content: {
title: '딸기 치즈 케익',
description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',

link: {
mobileWebUrl: 'https://developers.kakao.com',
webUrl: 'https://developers.kakao.com'
}
        },
social: {
likeCount: 286,
commentCount: 45,
sharedCount: 845
},

buttons: [
{
title: '웹으로 보기',
link: {
mobileWebUrl: 'https://developers.kakao.com',
webUrl: 'https://developers.kakao.com'
}
},
{
title: '앱으로 보기',
link: {
mobileWebUrl: 'https://developers.kakao.com',
webUrl: 'https://developers.kakao.com'
}
}
]
});
