/* 2026 M2 Christmas Village — 공용 규칙 (사이트와 Apps Script가 같이 씀) */
var SHARED = (function () {
  var S = {};
  S.VERSION = 1;                                   // 그림·파일을 바꾸면 1씩 올리기
  S.PROD_HOST = 'dybdaechim2.github.io';           // 이 주소에서만 진짜 서버 사용
  S.API_URL = '';                                  // Apps Script 웹 앱 주소 (2단계에서 넣음)
  S.TIMEOUT_MS = 25000;
  S.TEST_ACCOUNT = { name: '김덕배', code: '11111111' };

  // 이름 가리기: 김덕배 → 김*배, 홍길 → 홍*
  S.maskName = function (name) {
    name = String(name || '').trim();
    if (name.length <= 1) return name;
    if (name.length === 2) return name[0] + '*';
    return name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  };
  S.classLabel = function (s) { return s.grade + '학년 ' + s.teacher + ' 선생님 반'; };
  return S;
})();
if (typeof module !== 'undefined') module.exports = SHARED;
