/* 2026 M2 Christmas Village — 공용 규칙 (사이트와 Apps Script가 같이 씀) */
var SHARED = (function () {
  var S = {};
  S.VERSION = 6;                                   // 그림·파일을 바꾸면 1씩 올리기
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

  // ---------- 추억 트리 ----------
  S.TREE = {
    perStudent: 3,      // 1인 최대 장식 수
    minPeople: 5,       // 오늘 이 인원 이상 들어오고, 들어온 친구가 모두 달면 '오늘 트리 완성!'
    maxLen: 80,         // 메시지 최대 글자 수
    types: [
      { key: 'star', name: '별', sub: '나의 소원', ph: '예) 중3 때도 지금처럼 웃으면서 지내기!' },
      { key: 'ribbon', name: '리본', sub: '행복했던 순간', ph: '예) 시험 끝나고 다 같이 떡볶이 먹은 날!' },
      { key: 'bell', name: '종', sub: '선생님께', ph: '예) 선생님 1년 동안 감사했어요! 🎄' },
      { key: 'heart', name: '하트', sub: '친구들에게', ph: '예) 다들 중3 가서도 파이팅!!' },
      { key: 'gift', name: '선물', sub: '소중했던 것', ph: '예) 우리 반 친구들이랑 보낸 시간' },
      { key: 'snow', name: '눈송이', sub: '중3의 나에게', ph: '예) 중3의 나야, 포기하지 말고 끝까지!' }
    ]
  };
  // 오늘 진행도: joined = 오늘 로그인한 학생 수, done = 그중 장식을 1개 이상 단 학생 수
  S.treeProgress = function (today) {
    var j = (today && today.joined) || 0, d = Math.min(j, (today && today.done) || 0);
    return { joined: j, done: d, ratio: j ? d / j : 0, complete: j >= S.TREE.minPeople && d >= j };
  };
  S.todayKey = function (date) {
    var t = date || new Date();
    return t.getFullYear() + '-' + ('0' + (t.getMonth() + 1)).slice(-2) + '-' + ('0' + t.getDate()).slice(-2);
  };
  S.treeType = function (key) {
    for (var i = 0; i < S.TREE.types.length; i++) if (S.TREE.types[i].key === key) return S.TREE.types[i];
    return null;
  };

  // ---------- 비밀 우체국 ----------
  S.LETTER = { min: 10, max: 500, points: 1000 };   // 선생님께 편지: 1인 1통, 1,000포인트
  S.checkLetter = function (text, extra) {
    text = String(text || '').trim();
    if (text.length < S.LETTER.min) return S.LETTER.min + '자 이상 써 줘!';
    if (text.length > S.LETTER.max) return S.LETTER.max + '자까지만 쓸 수 있어!';
    if (S.findBadWord(text, extra)) return '바르고 고운 말로 다시 써 줘!';
    return '';
  };

  // ---------- 방명록 (다음 중2에게 한마디) ----------
  S.GUESTBOOK = { max: 40, perStudent: 1, points: 500 };
  S.checkGuestbook = function (text, extra) {
    text = String(text || '').trim();
    if (text.length < 2) return '한마디를 적어 줘!';
    if (text.length > S.GUESTBOOK.max) return S.GUESTBOOK.max + '자까지만 쓸 수 있어!';
    if (S.findBadWord(text, extra)) return '바르고 고운 말로 다시 써 줘!';
    if (S.findPersonalInfo(text)) return '전화번호나 주소는 쓸 수 없어!';
    if (/(.)\1{7,}/.test(text.replace(/\s/g, ''))) return '같은 글자는 조금만 반복해 줘!';
    return '';
  };

  // ---------- 금지어 검사 (띄어쓰기·특수문자·숫자 끼워넣기 우회도 잡기) ----------
  S.BAD_WORDS = [
    '시발', '씨발', '씨바', '시바', '씨빨', '시벌', '씨벌', '쓰발', '슈발', 'ㅅㅂ', 'ㅆㅂ', 'ㅅㅃ', 'ㅆㅃ', 'sibal', 'tlqkf',
    '병신', '븅신', '빙신', '병쉰', 'ㅂㅅ', 'ㅄ', '좆', '존나', '졸라', '조낸', 'ㅈㄴ', 'ㅈㄹ', '지랄', '염병', '옘병',
    '개새', '개색', '개세', '새끼', '색기', '쌔끼', 'ㅅㄲ', '미친', '미쳤냐', 'ㅁㅊ', '닥쳐', '꺼져', '엿먹',
    '등신', '멍청', '찐따', '애미', '애비', '느금', '니미', '느개비', '패드립', '죽어', '죽을래', '뒤져', '뒈져',
    '꼴통', '돼지새', '틀딱', '한남', '김치녀', '섹스', '야동', 'ㅗ', '엿같', '개같', '개빡', '쓰레기같', '루저',
    '장애인같', '정신병', '발암', '극혐', '꺼지', '닥치', 'fuck', 'shit', 'bitch', 'damn'
  ];
  S.normalize = function (t) {
    return String(t || '').toLowerCase().replace(/[^0-9a-z가-힣ㄱ-ㅎㅏ-ㅣ]/g, '').replace(/[0-9]/g, '');
  };
  S.findBadWord = function (text, extra) {
    var n = S.normalize(text), list = S.BAD_WORDS.concat(extra || []);
    var squeeze = n.replace(/(.)\1+/g, '$1');                         // 씨이이발 → 씨이발, ㅅㅅㅂ → ㅅㅂ
    var noFill = squeeze.replace(/[이으아어ㅣㅡㅏㅓ]/g, '');             // 씨이발 → 씨발 (끼워넣은 모음 빼기)
    for (var i = 0; i < list.length; i++) {
      var w = S.normalize(list[i]);
      if (!w) continue;
      if (n.indexOf(w) >= 0 || squeeze.indexOf(w) >= 0) return list[i];
      var wf = w.replace(/[이으아어ㅣㅡㅏㅓ]/g, '');
      if (wf.length >= 2 && noFill.indexOf(wf) >= 0) return list[i];
    }
    return null;
  };
  S.findPersonalInfo = function (text) {
    var t = String(text || '');
    if (/01[016789][\s.\-]?\d{3,4}[\s.\-]?\d{4}/.test(t)) return '전화번호';
    if (/https?:|www\.|\.(com|net|kr|co)\b|@[a-z0-9_]{3,}/i.test(t)) return '주소';
    return null;
  };
  S.checkTreeMessage = function (msg, extra) {
    msg = String(msg || '').trim();
    if (!msg) return '메시지를 적어 줘!';
    if (msg.length > S.TREE.maxLen) return S.TREE.maxLen + '자까지만 쓸 수 있어!';
    if (S.findBadWord(msg, extra)) return '바르고 고운 말로 다시 써 줘!';
    return '';
  };

  return S;
})();
if (typeof module !== 'undefined') module.exports = SHARED;
