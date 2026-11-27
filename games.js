/* 2026 M2 Christmas Village — 게임랜드 미니게임 4종 */
(function () {
  'use strict';
  var OUT = '#4A2C1A';

  // ================= 캐릭터 그림 =================
  function hat() {
    return '<path d="M22 36 Q36 2 70 10 Q84 14 86 30 L80 34 Z" fill="#E43B45" stroke="' + OUT + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<rect x="16" y="28" width="68" height="13" rx="6.5" fill="#fff" stroke="' + OUT + '" stroke-width="4"/>' +
      '<circle cx="86" cy="26" r="7.5" fill="#fff" stroke="' + OUT + '" stroke-width="4"/>';
  }
  function face(eyeY, wink) {
    var eyes = wink
      ? '<path d="M33 ' + eyeY + ' q5 -6 10 0" fill="none" stroke="' + OUT + '" stroke-width="4" stroke-linecap="round"/><path d="M57 ' + eyeY + ' q5 -6 10 0" fill="none" stroke="' + OUT + '" stroke-width="4" stroke-linecap="round"/>'
      : '<circle cx="38" cy="' + eyeY + '" r="4.2" fill="' + OUT + '"/><circle cx="62" cy="' + eyeY + '" r="4.2" fill="' + OUT + '"/>' +
        '<circle cx="39.5" cy="' + (eyeY - 1.6) + '" r="1.3" fill="#fff"/><circle cx="63.5" cy="' + (eyeY - 1.6) + '" r="1.3" fill="#fff"/>';
    return eyes +
      '<ellipse cx="29" cy="' + (eyeY + 10) + '" rx="6" ry="3.6" fill="#FF9DAE" opacity=".8"/>' +
      '<ellipse cx="71" cy="' + (eyeY + 10) + '" rx="6" ry="3.6" fill="#FF9DAE" opacity=".8"/>';
  }
  var mouth = '<path d="M45 72 q2.5 3.5 5 0 q2.5 3.5 5 0" fill="none" stroke="' + OUT + '" stroke-width="3" stroke-linecap="round"/>';
  function head(fill) { return '<circle cx="50" cy="60" r="32" fill="' + fill + '" stroke="' + OUT + '" stroke-width="4"/>'; }

  var CHARS = {
    posu: '<path d="M44 30 q4 -10 8 0" fill="#FFD43B" stroke="' + OUT + '" stroke-width="3"/>' + head('#FFD43B') + face(58) +
      '<path d="M44 66 L56 66 L50 74 Z" fill="#FF9F1C" stroke="' + OUT + '" stroke-width="3" stroke-linejoin="round"/>' + hat(),
    wabi: '<ellipse cx="36" cy="22" rx="9" ry="22" fill="#fff" stroke="' + OUT + '" stroke-width="4"/><ellipse cx="36" cy="24" rx="4" ry="14" fill="#FFB3C1"/>' +
      '<ellipse cx="64" cy="22" rx="9" ry="22" fill="#fff" stroke="' + OUT + '" stroke-width="4"/><ellipse cx="64" cy="24" rx="4" ry="14" fill="#FFB3C1"/>' +
      head('#FFFFFF') + face(58, true) + mouth +
      '<path d="M24 86 Q50 96 76 86 L76 94 Q50 102 24 94 Z" fill="#E43B45" stroke="' + OUT + '" stroke-width="3.5"/>',
    dibi: head('#7BD66A') + face(60) +
      '<circle cx="38" cy="60" r="9" fill="none" stroke="#1F7A45" stroke-width="3.5"/><circle cx="62" cy="60" r="9" fill="none" stroke="#1F7A45" stroke-width="3.5"/>' +
      '<path d="M47 60 h6" stroke="#1F7A45" stroke-width="3.5"/>' + mouth + hat(),
    kkomi: '<circle cx="24" cy="38" r="9" fill="#C98A55" stroke="' + OUT + '" stroke-width="4"/><circle cx="76" cy="38" r="9" fill="#C98A55" stroke="' + OUT + '" stroke-width="4"/>' +
      head('#D9995E') + '<ellipse cx="50" cy="72" rx="15" ry="11" fill="#FBE3C4"/>' + face(57) +
      '<ellipse cx="50" cy="67" rx="4" ry="3" fill="' + OUT + '"/>' + mouth + hat(),
    sora: '<path d="M78 52 q14 -8 12 8 q-6 2 -12 0" fill="#7CC7F2" stroke="' + OUT + '" stroke-width="3.5"/>' +
      head('#8FD3F7') + '<ellipse cx="50" cy="76" rx="18" ry="9" fill="#EAF7FF"/>' + face(58) + mouth + hat(),
    bora: '<path d="M22 46 L26 18 L44 34 Z" fill="#C7A6F2" stroke="' + OUT + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M78 46 L74 18 L56 34 Z" fill="#C7A6F2" stroke="' + OUT + '" stroke-width="4" stroke-linejoin="round"/>' +
      head('#C7A6F2') + face(58, true) + mouth +
      '<path d="M20 64 h10 M20 70 h10 M70 64 h10 M70 70 h10" stroke="' + OUT + '" stroke-width="2.5" stroke-linecap="round"/>'
  };
  var ITEMS = {
    tree: '<path d="M50 8 L80 52 H66 L86 82 H14 L34 52 H20 Z" fill="#2E9E57" stroke="' + OUT + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<rect x="43" y="82" width="14" height="12" fill="#8B5A2B" stroke="' + OUT + '" stroke-width="4"/>' +
      '<path d="M50 2 l4 8 9 1 -7 6 2 9 -8 -5 -8 5 2 -9 -7 -6 9 -1 Z" fill="#FFD43B" stroke="' + OUT + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<circle cx="40" cy="44" r="4" fill="#E43B45"/><circle cx="60" cy="62" r="4" fill="#FFD43B"/><circle cx="36" cy="70" r="4" fill="#4DABF7"/>',
    bell: '<path d="M50 14 C30 14 26 34 26 52 L18 72 H82 L74 52 C74 34 70 14 50 14 Z" fill="#FFD43B" stroke="' + OUT + '" stroke-width="4" stroke-linejoin="round"/>' +
      '<circle cx="50" cy="80" r="8" fill="#F59F00" stroke="' + OUT + '" stroke-width="4"/>' +
      '<path d="M34 10 q16 -10 32 0 l-6 8 -10 -4 -10 4 Z" fill="#E43B45" stroke="' + OUT + '" stroke-width="3.5" stroke-linejoin="round"/>',
    gift: '<rect x="14" y="38" width="72" height="50" rx="5" fill="#E43B45" stroke="' + OUT + '" stroke-width="4"/>' +
      '<rect x="8" y="28" width="84" height="16" rx="4" fill="#F0525B" stroke="' + OUT + '" stroke-width="4"/>' +
      '<rect x="43" y="28" width="14" height="60" fill="#FFD43B" stroke="' + OUT + '" stroke-width="3"/>' +
      '<path d="M50 28 C34 8 18 14 28 26 Z M50 28 C66 8 82 14 72 26 Z" fill="#FFD43B" stroke="' + OUT + '" stroke-width="4"/>',
    snowball: '<circle cx="50" cy="54" r="34" fill="#F4F8FF" stroke="' + OUT + '" stroke-width="4"/>' +
      '<path d="M30 66 q20 14 40 0" fill="none" stroke="#C9D6EA" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M36 44 l8 6 M44 44 l-8 6 M56 44 l8 6 M64 44 l-8 6" stroke="' + OUT + '" stroke-width="3.5" stroke-linecap="round"/>' +
      '<path d="M42 64 q8 -6 16 0" fill="none" stroke="' + OUT + '" stroke-width="3.5" stroke-linecap="round"/>'
  };
  function svg(key, extra) {
    var body = CHARS[key] || ITEMS[key];
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"' + (extra || '') + '>' + body + '</svg>';
  }
  var imgCache = {};
  function img(key) {
    if (!imgCache[key]) {
      var im = new Image();
      im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg(key));
      imgCache[key] = im;
    }
    return imgCache[key];
  }
  ['posu', 'gift'].forEach(img);

  // ================= 효과음 =================
  var actx;
  function tone(f, t, d, type, vol) {
    var o = actx.createOscillator(), g = actx.createGain();
    o.type = type || 'square'; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(vol || 0.06, t); g.gain.exponentialRampToValueAtTime(0.0008, t + d);
    o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + d + 0.02);
    return o;
  }
  function sfx(kind) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      actx.resume();
      var t = actx.currentTime;
      if (kind === 'jump') { var o = tone(420, t, 0.15, 'square', 0.04); o.frequency.exponentialRampToValueAtTime(820, t + 0.12); }
      else if (kind === 'coin') { tone(988, t, 0.08, 'square', 0.05); tone(1319, t + 0.07, 0.18, 'square', 0.05); }
      else if (kind === 'hit') { var h = tone(300, t, 0.35, 'sawtooth', 0.07); h.frequency.exponentialRampToValueAtTime(60, t + 0.3); }
      else if (kind === 'pop') tone(660, t, 0.09, 'triangle', 0.12);
      else if (kind === 'bad') { tone(200, t, 0.18, 'square', 0.06); tone(150, t + 0.1, 0.2, 'square', 0.06); }
      else if (kind === 'drop') tone(520, t, 0.1, 'triangle', 0.12);
      else if (kind === 'perfect') { tone(784, t, 0.08, 'triangle', 0.12); tone(1175, t + 0.06, 0.16, 'triangle', 0.12); }
      else if (kind === 'flip') tone(880, t, 0.05, 'triangle', 0.08);
      else if (kind === 'match') { tone(659, t, 0.1, 'triangle', 0.12); tone(988, t + 0.08, 0.18, 'triangle', 0.12); }
      else if (kind === 'win') { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, t + i * 0.09, 0.25, 'triangle', 0.12); }); tone(1047, t + 0.4, 0.6, 'triangle', 0.12); }
    } catch (e) {}
  }

  // ================= 종이 가루 =================
  function confetti(host) {
    var c = document.createElement('canvas');
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:60';
    host.appendChild(c);
    var W = c.width = host.clientWidth, H = c.height = host.clientHeight, ctx = c.getContext('2d');
    var cols = ['#E43B45', '#FFD43B', '#2E9E57', '#4DABF7', '#FF8FAB', '#fff'];
    var ps = [];
    for (var i = 0; i < 140; i++) ps.push({ x: W / 2 + (Math.random() - .5) * W * .3, y: H * .45, vx: (Math.random() - .5) * W * 1.4, vy: -Math.random() * H * 1.6 - H * .3, r: Math.random() * 6, s: 5 + Math.random() * 6, c: cols[i % cols.length] });
    var last = performance.now(), life = 0;
    (function f(now) {
      var dt = Math.min(.033, (now - last) / 1000); last = now; life += dt;
      ctx.clearRect(0, 0, W, H);
      ps.forEach(function (p) {
        p.vy += H * 2.2 * dt; p.vx *= .985; p.x += p.vx * dt; p.y += p.vy * dt; p.r += dt * 8;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore();
      });
      if (life < 2.6) requestAnimationFrame(f); else c.remove();
    })(last);
  }

  // ================= 기록 =================
  function bestKey(id) { return 'cv-best-' + id + '-' + ((window.CV && CV.me() && CV.me().name) || ''); }
  function getBest(id) { try { var v = localStorage.getItem(bestKey(id)); return v == null ? null : Number(v); } catch (e) { return null; } }
  function setBest(id, v) { try { localStorage.setItem(bestKey(id), String(v)); } catch (e) {} }

  // ================= 공통 화면 =================
  var GAMES = {
    run: { title: '달려라 포스!', help: '화면을 누르면 점프! 두 번 누르면 더 높이 뛰어요.<br>눈덩이와 눈사람을 피하고 선물을 모아요.', unit: '점', lowerBetter: false, make: Runner },
    stack: { title: '선물 쌓기', help: '움직이는 선물이 아래 선물 위에 왔을 때 눌러요.<br>삐져나온 부분은 떨어져요. 딱 맞추면 퍼펙트!', unit: '층', lowerBetter: false, make: Stacker },
    whack: { title: '캐릭터를 잡아라!', help: '눈더미에서 나온 친구들을 빨리 눌러요. (30초)<br>황금 포스는 +3점, 눈덩이를 누르면 -2점!', unit: '점', lowerBetter: false, make: Whack },
    memory: { title: '메모리 카드', help: '카드 두 장을 뒤집어 같은 그림을 찾아요.<br>빨리 다 맞힐수록 좋은 기록!', unit: '초', lowerBetter: true, make: Memory }
  };
  var root, area, cur, curId, stats;

  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

  function open(id) {
    root = document.getElementById('s-game');
    area = root.querySelector('.game-area');
    stats = root.querySelector('.game-stats');
    root.querySelector('.game-title').textContent = GAMES[id].title;
    curId = id;
    showIntro();
  }
  function setStats(html) { stats.innerHTML = html; }
  function clearArea() { if (cur && cur.stop) cur.stop(); cur = null; area.innerHTML = ''; }

  function showIntro() {
    clearArea();
    var g = GAMES[curId], b = getBest(curId);
    setStats(b == null ? '' : '내 최고 기록 <b>' + b + g.unit + '</b>');
    var box = el('<div class="g-card"><div class="g-icon">' + svg(curId === 'stack' ? 'gift' : curId === 'memory' ? 'bora' : curId === 'whack' ? 'kkomi' : 'posu') + '</div>' +
      '<h3>' + g.title + '</h3><p>' + g.help + '</p><button class="big-btn g-start">시작하기</button></div>');
    area.appendChild(box);
    box.querySelector('.g-start').onclick = start;
  }
  function start() {
    clearArea();
    cur = GAMES[curId].make(area, { stats: setStats, end: finish });
  }
  function finish(score) {
    var g = GAMES[curId], old = getBest(curId);
    var isBest = old == null || (g.lowerBetter ? score < old : score > old);
    if (isBest) setBest(curId, score);
    if (window.CV && CV.saveScore) CV.saveScore(curId, score);
    setTimeout(function () {
      var box = el('<div class="g-over"><div class="g-card">' +
        '<h3>' + (curId === 'memory' ? '다 찾았어!' : '게임 끝!') + '</h3>' +
        '<div class="g-score">' + score + '<small>' + g.unit + '</small></div>' +
        '<p>' + (isBest ? '<b class="g-new">새 최고 기록!</b>' : '내 최고 기록 ' + old + g.unit) + '</p>' +
        '<div class="g-btns"><button class="big-btn g-again">다시 하기</button><button class="big-btn light g-list">다른 게임 하기</button></div></div></div>');
      area.appendChild(box);
      box.querySelector('.g-again').onclick = start;
      box.querySelector('.g-list').onclick = function () { close(); CV.go('gameland'); };
      sfx(isBest ? 'win' : 'drop');
      if (isBest) confetti(root);
    }, 450);
  }
  function close() { clearArea(); }

  // 캔버스 도우미
  function makeCanvas(host) {
    var c = document.createElement('canvas');
    c.className = 'g-canvas'; host.appendChild(c);
    var ctx = c.getContext('2d'), o = { c: c, ctx: ctx, W: 0, H: 0 };
    o.fit = function () {
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      o.W = host.clientWidth; o.H = host.clientHeight;
      c.width = Math.round(o.W * dpr); c.height = Math.round(o.H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    o.fit();
    return o;
  }
  function loop(step) {
    var on = true, last = performance.now();
    function f(now) {
      if (!on) return;
      var dt = Math.min(0.033, (now - last) / 1000); last = now;
      step(dt);
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
    return function () { on = false; };
  }
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  // ================= 01 달려라 포스 =================
  function Runner(host, ui) {
    var cv = makeCanvas(host), ctx = cv.ctx;
    var chick = img('posu');
    var S = {}, alive = true, stopLoop, shake = 0;
    function reset() {
      var H = cv.H;
      S = { y: 0, vy: 0, jumps: 0, t: 0, dist: 0, gifts: 0, obs: [], items: [], spawn: 1.2, giftT: 1.8, trees: [], flakes: [], bob: 0 };
      for (var i = 0; i < 8; i++) S.trees.push({ x: Math.random() * cv.W * 1.2, s: .6 + Math.random() * .6 });
      for (var j = 0; j < 40; j++) S.flakes.push({ x: Math.random() * cv.W, y: Math.random() * H, r: 1 + Math.random() * 2.5, v: 20 + Math.random() * 40 });
    }
    reset();
    function ground() { return cv.H * 0.82; }
    function size() { return cv.H * 0.2; }
    function jump() {
      if (!alive) return;
      if (S.jumps < 2) { S.vy = -cv.H * (S.jumps ? 1.25 : 1.5); S.jumps++; sfx('jump'); }
    }
    function score() { return Math.floor(S.dist / (cv.W * 0.04)) + S.gifts * 10; }
    var onDown = function (e) { e.preventDefault(); jump(); };
    var onKey = function (e) { if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); jump(); } };
    cv.c.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', cv.fit);

    stopLoop = loop(function (dt) {
      var W = cv.W, H = cv.H, G = ground(), sz = size();
      if (alive) {
        S.t += dt;
        var speed = Math.min(W * 0.95, W * 0.42 * (1 + S.t * 0.035));
        S.dist += speed * dt; S.bob += dt * 14;
        S.vy += H * 4.2 * dt; S.y += S.vy * dt;
        if (S.y > 0) { S.y = 0; S.vy = 0; S.jumps = 0; }
        S.spawn -= dt; S.giftT -= dt;
        if (S.spawn <= 0) {
          var kind = Math.random() < 0.55 ? 'ball' : 'man';
          S.obs.push({ x: W + 40, kind: kind, r: H * 0.055, rot: 0 });
          S.spawn = (0.85 + Math.random() * 0.9) * (W * 0.42 / speed) + 0.35;
        }
        if (S.giftT <= 0) {
          S.items.push({ x: W + 40, y: G - H * (0.22 + Math.random() * 0.2), got: false });
          S.giftT = 1.2 + Math.random() * 1.4;
        }
        S.obs.forEach(function (o) { o.x -= speed * dt; o.rot -= speed * dt / (o.r || 1); });
        S.items.forEach(function (g) { g.x -= speed * dt; });
        S.obs = S.obs.filter(function (o) { return o.x > -100; });
        S.items = S.items.filter(function (g) { return g.x > -100 && !g.got; });
        S.trees.forEach(function (t) { t.x -= speed * 0.25 * dt; if (t.x < -120) t.x = W + Math.random() * 200; });

        // 부딪힘
        var px = W * 0.16, cy = G + S.y - sz * 0.42, cr = sz * 0.3;
        S.obs.forEach(function (o) {
          var circles = o.kind === 'ball' ? [[o.x, G - o.r, o.r]] : [[o.x, G - o.r * 1.1, o.r * 1.1], [o.x, G - o.r * 2.8, o.r * 0.8]];
          circles.forEach(function (c) {
            var dx = c[0] - px, dy = c[1] - cy;
            if (dx * dx + dy * dy < Math.pow(c[2] + cr * 0.85, 2)) {
              alive = false; shake = 0.35; sfx('hit');
              ui.end(score());
            }
          });
        });
        S.items.forEach(function (g) {
          var dx = g.x - px, dy = g.y - cy;
          if (dx * dx + dy * dy < Math.pow(cr + H * 0.05, 2)) { g.got = true; S.gifts++; sfx('coin'); }
        });
        ui.stats('점수 <b>' + score() + '</b> · 선물 <b>' + S.gifts + '</b>');
      }
      S.flakes.forEach(function (f) { f.y += f.v * dt; f.x -= 15 * dt; if (f.y > H) { f.y = -5; f.x = Math.random() * W; } });

      // 그리기
      ctx.save();
      if (shake > 0) { shake -= dt; ctx.translate((Math.random() - .5) * 12, (Math.random() - .5) * 12); }
      var sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, '#2B2A6B'); sky.addColorStop(1, '#8C4F8F');
      ctx.fillStyle = sky; ctx.fillRect(-20, -20, W + 40, H + 40);
      ctx.fillStyle = '#FFF3C4'; ctx.beginPath(); ctx.arc(W * 0.85, H * 0.18, H * 0.08, 0, 7); ctx.fill();
      S.trees.forEach(function (t) {
        var th = H * 0.32 * t.s, tw = th * 0.55, tx = t.x, ty = G - H * 0.02;
        ctx.fillStyle = '#1E5B3A';
        ctx.beginPath(); ctx.moveTo(tx, ty - th); ctx.lineTo(tx + tw / 2, ty); ctx.lineTo(tx - tw / 2, ty); ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,.85)';
        ctx.beginPath(); ctx.moveTo(tx, ty - th); ctx.lineTo(tx + tw * 0.14, ty - th * 0.72); ctx.lineTo(tx - tw * 0.14, ty - th * 0.72); ctx.closePath(); ctx.fill();
      });
      ctx.fillStyle = '#FFFFFF'; ctx.fillRect(-20, G, W + 40, H - G + 20);
      ctx.fillStyle = '#D7E4F5'; ctx.fillRect(-20, G, W + 40, H * 0.025);
      ctx.fillStyle = '#fff';
      S.flakes.forEach(function (f) { ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 7); ctx.fill(); });

      S.items.forEach(function (g) {
        var s = H * 0.1; ctx.drawImage(img('gift'), g.x - s / 2, g.y - s / 2, s, s);
      });
      S.obs.forEach(function (o) {
        ctx.lineWidth = Math.max(2, H * 0.008); ctx.strokeStyle = OUT;
        if (o.kind === 'ball') {
          ctx.save(); ctx.translate(o.x, G - o.r); ctx.rotate(o.rot);
          ctx.fillStyle = '#F4F8FF'; ctx.beginPath(); ctx.arc(0, 0, o.r, 0, 7); ctx.fill(); ctx.stroke();
          ctx.strokeStyle = '#C9D6EA'; ctx.beginPath(); ctx.arc(0, 0, o.r * 0.55, 0.3, 2.2); ctx.stroke();
          ctx.restore();
        } else {
          ctx.fillStyle = '#F4F8FF';
          ctx.beginPath(); ctx.arc(o.x, G - o.r * 1.1, o.r * 1.1, 0, 7); ctx.fill(); ctx.stroke();
          ctx.beginPath(); ctx.arc(o.x, G - o.r * 2.8, o.r * 0.8, 0, 7); ctx.fill(); ctx.stroke();
          ctx.fillStyle = OUT;
          ctx.beginPath(); ctx.arc(o.x - o.r * 0.28, G - o.r * 2.9, o.r * 0.1, 0, 7); ctx.arc(o.x + o.r * 0.28, G - o.r * 2.9, o.r * 0.1, 0, 7); ctx.fill();
          ctx.fillStyle = '#FF9F1C'; ctx.beginPath(); ctx.moveTo(o.x - o.r * 0.1, G - o.r * 2.7); ctx.lineTo(o.x - o.r * 0.6, G - o.r * 2.62); ctx.lineTo(o.x - o.r * 0.1, G - o.r * 2.55); ctx.fill();
          ctx.fillStyle = '#E43B45'; ctx.fillRect(o.x - o.r * 0.8, G - o.r * 2.05, o.r * 1.6, o.r * 0.28);
        }
      });
      var px2 = W * 0.16, bob = alive && S.y === 0 ? Math.sin(S.bob) * sz * 0.03 : 0;
      ctx.fillStyle = 'rgba(80,100,140,.18)';
      ctx.beginPath(); ctx.ellipse(px2, G + sz * 0.02, sz * 0.32 * (1 + S.y / (H * 0.6)), sz * 0.06, 0, 0, 7); ctx.fill();
      ctx.save(); ctx.translate(px2, G + S.y - sz / 2 + bob);
      ctx.rotate(alive ? (S.y < 0 ? -0.18 : Math.sin(S.bob) * 0.06) : 1.2);
      if (chick.complete) ctx.drawImage(chick, -sz / 2, -sz / 2, sz, sz);
      ctx.restore();
      ctx.restore();
    });
    return {
      stop: function () {
        stopLoop(); window.removeEventListener('keydown', onKey); window.removeEventListener('resize', cv.fit);
      }
    };
  }

  // ================= 03 선물 쌓기 =================
  function Stacker(host, ui) {
    var cv = makeCanvas(host), ctx = cv.ctx;
    var COLS = [['#E43B45', '#FFD43B'], ['#2E9E57', '#FFD43B'], ['#4DABF7', '#E43B45'], ['#FF8FAB', '#FFFFFF'], ['#FFD43B', '#E43B45'], ['#9B6BD6', '#FFD43B']];
    var W, H, bh, stack, curB, falls = [], cam = 0, alive = true, combo = 0, flash = 0, stopLoop;
    function init() {
      W = cv.W; H = cv.H; bh = H * 0.08;
      var w0 = W * 0.28;
      stack = [{ x: W / 2 - w0 / 2, w: w0 }];
      next();
    }
    function next() {
      var top = stack[stack.length - 1], n = stack.length;
      var fromLeft = n % 2 === 1;
      curB = { x: fromLeft ? -top.w * 0.3 : W - top.w * 0.7, w: top.w, dir: fromLeft ? 1 : -1, sp: Math.min(W * 1.1, W * 0.3 * (1 + n * 0.06)) };
    }
    function drop() {
      if (!alive) return;
      var top = stack[stack.length - 1];
      var L = Math.max(curB.x, top.x), R = Math.min(curB.x + curB.w, top.x + top.w), ov = R - L;
      var level = stack.length;
      if (ov <= 0) {
        falls.push({ x: curB.x, w: curB.w, lv: level, dy: 0, vy: 0, rot: 0, ci: level });
        alive = false; sfx('hit'); ui.end(stack.length - 1); return;
      }
      if (Math.abs(curB.x - top.x) < W * 0.01) {
        stack.push({ x: top.x, w: top.w }); combo++; flash = 0.35; sfx('perfect');
      } else {
        combo = 0; sfx('drop');
        if (curB.x < top.x) falls.push({ x: curB.x, w: top.x - curB.x, lv: level, dy: 0, vy: 0, rot: 0, ci: level });
        else falls.push({ x: R, w: curB.x + curB.w - R, lv: level, dy: 0, vy: 0, rot: 0, ci: level });
        stack.push({ x: L, w: ov });
      }
      ui.stats('<b>' + (stack.length - 1) + '</b>층' + (combo > 1 ? ' · 퍼펙트 ' + combo + '연속!' : ''));
      next();
    }
    var onDown = function (e) { e.preventDefault(); drop(); };
    var onKey = function (e) { if (e.code === 'Space') { e.preventDefault(); drop(); } };
    cv.c.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onKey);
    init();
    ui.stats('<b>0</b>층');

    function drawBox(x, y, w, ci, alpha) {
      var c = COLS[ci % COLS.length];
      ctx.globalAlpha = alpha == null ? 1 : alpha;
      ctx.lineWidth = Math.max(2, H * 0.006); ctx.strokeStyle = OUT;
      rr(ctx, x, y, w, bh, Math.min(8, w / 4)); ctx.fillStyle = c[0]; ctx.fill(); ctx.stroke();
      var rw = Math.min(w * 0.18, bh * 0.45);
      if (w > rw * 1.5) { ctx.fillStyle = c[1]; ctx.fillRect(x + w / 2 - rw / 2, y + 2, rw, bh - 4); }
      ctx.fillStyle = 'rgba(255,255,255,.25)'; ctx.fillRect(x + 4, y + 4, w - 8, bh * 0.18);
      ctx.globalAlpha = 1;
    }
    stopLoop = loop(function (dt) {
      if (cv.W !== W) { /* 크기 변화는 무시 (게임 중) */ }
      var baseY = H * 0.9;
      if (alive) {
        curB.x += curB.dir * curB.sp * dt;
        if (curB.x + curB.w > W + curB.w * 0.3) curB.dir = -1;
        if (curB.x < -curB.w * 0.3) curB.dir = 1;
      }
      var target = Math.max(0, (stack.length - 6) * bh);
      cam += (target - cam) * Math.min(1, dt * 6);
      falls.forEach(function (f) { f.vy += H * 3 * dt; f.dy += f.vy * dt; f.rot += dt * 2; });
      falls = falls.filter(function (f) { return f.dy < H * 1.5; });
      if (flash > 0) flash -= dt;

      var bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#5B1A24'); bg.addColorStop(1, '#A8323E');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      for (var i = 0; i < 12; i++) {
        ctx.fillStyle = i % 3 === 0 ? 'rgba(255,212,59,.75)' : i % 3 === 1 ? 'rgba(255,255,255,.55)' : 'rgba(126,214,106,.6)';
        ctx.beginPath(); ctx.arc(W * (i + 0.5) / 12, H * 0.06 + Math.sin(i) * H * 0.015, H * 0.012, 0, 7); ctx.fill();
      }
      ctx.fillStyle = '#7A4A2A'; ctx.fillRect(0, baseY + cam, W, H);
      ctx.fillStyle = '#5E361C'; ctx.fillRect(0, baseY + cam, W, H * 0.015);
      stack.forEach(function (b, i) { drawBox(b.x, baseY - (i + 1) * bh + cam, b.w, i); });
      if (alive) {
        var y = baseY - (stack.length + 1) * bh + cam;
        drawBox(curB.x, y, curB.w, stack.length);
        ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(curB.x, y + bh, curB.w, H);
      }
      falls.forEach(function (f) {
        ctx.save();
        var y = baseY - (f.lv + 1) * bh + cam + f.dy;
        ctx.translate(f.x + f.w / 2, y + bh / 2); ctx.rotate(f.rot * (f.x < W / 2 ? -0.3 : 0.3));
        drawBox(-f.w / 2, -bh / 2, f.w, f.ci, 0.9);
        ctx.restore();
      });
      if (flash > 0) {
        ctx.fillStyle = 'rgba(255,240,170,' + flash + ')'; ctx.fillRect(0, 0, W, H);
        ctx.font = (H * 0.07) + 'px Jua, sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = '#fff';
        ctx.strokeStyle = OUT; ctx.lineWidth = H * 0.012;
        ctx.strokeText('퍼펙트!', W / 2, H * 0.3); ctx.fillText('퍼펙트!', W / 2, H * 0.3);
      }
    });
    return { stop: function () { stopLoop(); window.removeEventListener('keydown', onKey); } };
  }

  // ================= 04 캐릭터를 잡아라 =================
  function Whack(host, ui) {
    var KINDS = ['posu', 'wabi', 'dibi', 'kkomi', 'sora', 'bora'];
    var wrap = el('<div class="wh-wrap"></div>');
    for (var i = 0; i < 9; i++) {
      wrap.appendChild(el('<div class="wh-hole"><div class="wh-pop" data-i="' + i + '"></div><div class="wh-snow"></div></div>'));
    }
    host.appendChild(wrap);
    var pops = wrap.querySelectorAll('.wh-pop');
    var score = 0, left = 30, alive = true, timers = [], t0 = performance.now();
    function show() { ui.stats('점수 <b>' + score + '</b> · 남은 시간 <b>' + Math.ceil(left) + '</b>초'); }
    show();
    function float(p, txt, good) {
      var f = el('<div class="wh-float' + (good ? '' : ' bad') + '">' + txt + '</div>');
      p.parentNode.appendChild(f); setTimeout(function () { f.remove(); }, 700);
    }
    function spawn() {
      if (!alive) return;
      var free = Array.prototype.filter.call(pops, function (p) { return !p.classList.contains('up'); });
      if (free.length) {
        var p = free[Math.floor(Math.random() * free.length)];
        var r = Math.random(), type = r < 0.12 ? 'gold' : r < 0.3 ? 'bomb' : 'norm';
        var key = type === 'bomb' ? 'snowball' : type === 'gold' ? 'posu' : KINDS[Math.floor(Math.random() * KINDS.length)];
        p.innerHTML = svg(key); p.dataset.type = type; p.classList.toggle('gold', type === 'gold');
        p.classList.remove('hit'); p.classList.add('up');
        var el2 = (performance.now() - t0) / 1000;
        var stay = Math.max(560, 1150 - el2 * 18);
        timers.push(setTimeout(function () { p.classList.remove('up'); }, stay));
      }
      var el3 = (performance.now() - t0) / 1000;
      timers.push(setTimeout(spawn, Math.max(330, 820 - el3 * 16)));
    }
    wrap.addEventListener('pointerdown', function (e) {
      var p = e.target.closest('.wh-pop');
      if (!p || !alive || !p.classList.contains('up') || p.classList.contains('hit')) return;
      e.preventDefault();
      p.classList.add('hit');
      var t = p.dataset.type;
      if (t === 'bomb') { score = Math.max(0, score - 2); sfx('bad'); float(p, '-2', false); wrap.classList.add('shake'); setTimeout(function () { wrap.classList.remove('shake'); }, 300); }
      else if (t === 'gold') { score += 3; sfx('coin'); float(p, '+3', true); }
      else { score += 1; sfx('pop'); float(p, '+1', true); }
      setTimeout(function () { p.classList.remove('up'); }, 160);
      show();
    });
    var tick = setInterval(function () {
      left -= 0.1;
      if (left <= 0 && alive) {
        left = 0; alive = false; clearInterval(tick);
        pops.forEach(function (p) { p.classList.remove('up'); });
        ui.end(score);
      }
      show();
    }, 100);
    timers.push(setTimeout(spawn, 500));
    return { stop: function () { alive = false; clearInterval(tick); timers.forEach(clearTimeout); } };
  }

  // ================= 05 메모리 카드 =================
  function Memory(host, ui) {
    var KINDS = ['posu', 'wabi', 'dibi', 'kkomi', 'sora', 'bora', 'tree', 'bell'];
    var deck = KINDS.concat(KINDS);
    for (var i = deck.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = deck[i]; deck[i] = deck[j]; deck[j] = t; }
    var grid = el('<div class="mm-grid"></div>');
    deck.forEach(function (k, i) {
      grid.appendChild(el('<button class="mm-card" data-k="' + k + '" aria-label="카드 ' + (i + 1) + '"><div class="mm-in"><div class="mm-back"></div><div class="mm-front">' + svg(k) + '</div></div></button>'));
    });
    host.appendChild(grid);
    var open = [], lock = false, pairs = 0, moves = 0, start = null, timer;
    function sec() { return start ? Math.floor((performance.now() - start) / 1000) : 0; }
    function show() { ui.stats('시간 <b>' + sec() + '</b>초 · 시도 <b>' + moves + '</b>번 · 찾은 짝 <b>' + pairs + '</b>/8'); }
    show();
    timer = setInterval(show, 250);
    grid.addEventListener('click', function (e) {
      var c = e.target.closest('.mm-card');
      if (!c || lock || c.classList.contains('open') || c.classList.contains('done')) return;
      if (!start) start = performance.now();
      c.classList.add('open'); sfx('flip'); open.push(c);
      if (open.length === 2) {
        moves++; lock = true;
        var a = open[0], b = open[1];
        if (a.dataset.k === b.dataset.k) {
          setTimeout(function () {
            a.classList.add('done'); b.classList.add('done'); sfx('match');
            open = []; lock = false; pairs++; show();
            if (pairs === 8) { clearInterval(timer); ui.end(sec()); }
          }, 280);
        } else {
          setTimeout(function () { a.classList.remove('open'); b.classList.remove('open'); open = []; lock = false; }, 750);
        }
        show();
      }
    });
    return { stop: function () { clearInterval(timer); } };
  }

  window.Games = { open: open, close: close, svg: svg, sfx: sfx, confetti: confetti };
})();
