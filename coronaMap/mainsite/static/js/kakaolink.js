<script type='text/javascript'>
function colme(){
    <!-- // // 사용할 앱의 JavaScript 키를 설정해 주세요. -->
    Kakao.init('754fb9128b5e18c3f22b652f95ae05cc');
    <!-- // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다. -->
     Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: 'CoronaMapGW',
        description: '강원도 시군구별 코로나19 확진자 동선을 시각화한 사이트입니다. ',
        imageUrl: '',
        link: {
          mobileWebUrl: 'http://coronamapgw.com'
        }
      },

      buttons: [
        {
          title: '사이트 접속',
          link: {
            mobileWebUrl: 'http://coronamapgw.com'
          }
        }
      ]
    });
        }
    </script>