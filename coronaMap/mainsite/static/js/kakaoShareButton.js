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

Kakao.init(params.api);
Kakao.Link.createDefaultButton({
  container: '#kakao-link-btn',
  objectType: 'feed',
  content: {
    title: 'CoronaMapGW',
    description: '강원도 시군구별 코로나19 확진자 동선을 시각화한 사이트입니다. ',
    imageUrl: '',
    link: {
      mobileWebUrl: 'https://coronamapgw.com'
    }
  },

  buttons: [
    {
      title: '사이트 접속',
      link: {
        mobileWebUrl: 'https://coronamapgw.com'
      }
    }
  ]
});
