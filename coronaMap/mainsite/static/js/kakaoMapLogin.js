//<![CDATA[
// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('754fb9128b5e18c3f22b652f95ae05cc');
// 카카오 로그인 버튼을 생성합니다.
Kakao.Auth.createLoginButton({
  container: '#kakao-login-btn',
  success: function(authObj) {
    alert(JSON.stringify(authObj));
  },
  fail: function(err) {
     alert(JSON.stringify(err));
  }
});
//]]>