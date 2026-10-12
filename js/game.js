(function () {
  var data = window.SOUND_DATA;
  var speech = window.SoundSpeech;
  var app = document.getElementById("app");
  var cache = {};
  var audioCtx = null;
  var playToken = 0;

  var state = {
    screen: "home",
    unlocked: false,
    category: "animals",
    queue: [],
    index: 0,
    options: [],
    status: "listen",
    played: false,
    scoreOn: true,
    correctCount: 0,
    roundScored: false,
    wrongIds: {},
    playing: false
  };

  try {
    state.scoreOn = window.sessionStorage.getItem("sound-guess-score") !== "0";
  } catch (err) { /* keep default */ }

  function itemById(id) {
    var i;
    for (i = 0; i < data.items.length; i += 1) {
      if (data.items[i].id === id) return data.items[i];
    }
    return null;
  }

  function shuffle(list) {
    var a = list.slice();
    var i;
    for (i = a.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function currentItem() {
    return state.queue[state.index] || null;
  }

  function getAudio(src) {
    if (!cache[src]) {
      var audio = new Audio(src);
      audio.preload = "auto";
      cache[src] = audio;
    }
    return cache[src];
  }

  function stopAudio() {
    var keys = Object.keys(cache);
    var i;
    for (i = 0; i < keys.length; i += 1) {
      try {
        cache[keys[i]].pause();
        cache[keys[i]].currentTime = 0;
      } catch (err) { /* ignore */ }
    }
    state.playing = false;
  }

  function unlockAudio() {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) {
      if (!audioCtx) audioCtx = new Ctx();
      try { audioCtx.resume(); } catch (err) { /* ignore */ }
    }
    var primer = getAudio(data.items[0].src);
    var previous = primer.volume;
    primer.volume = 0.001;
    var result;
    try {
      result = primer.play();
    } catch (err) {
      primer.volume = previous || 1;
      return;
    }
    var finish = function () {
      try {
        primer.pause();
        primer.currentTime = 0;
      } catch (err) { /* ignore */ }
      primer.volume = previous || 1;
      state.unlocked = true;
    };
    if (result && result.then) result.then(finish).catch(finish);
    else finish();
    var n;
    for (n = 0; n < data.items.length; n += 1) getAudio(data.items[n].src);
  }

  function categoryName(id) {
    return (data.categories[id] && data.categories[id].name) || "";
  }

  function poolFor(category) {
    if (category === "mix") return data.items.slice();
    return data.items.filter(function (item) { return item.category === category; });
  }

  function buildOptions(correct) {
    var same = data.items.filter(function (item) {
      return item.category === correct.category && item.id !== correct.id;
    });
    return shuffle(shuffle(same).slice(0, 3).concat([correct]));
  }

  function stars(count) {
    var text = "";
    var i;
    var shown = Math.min(count, 8);
    for (i = 0; i < shown; i += 1) text += "★";
    if (count > 8) text += "…";
    return text || "☆";
  }

  function setScreen(name) {
    state.screen = name;
    render();
  }

  function startClass() {
    unlockAudio();
    state.screen = "pick";
    render();
  }

  function startCategory(category) {
    unlockAudio();
    if (speech) speech.quiet();
    stopAudio();
    state.category = category;
    state.queue = shuffle(poolFor(category));
    state.index = 0;
    state.correctCount = 0;
    state.screen = "round";
    beginRound();
  }

  function beginRound() {
    var item = currentItem();
    if (!item) {
      state.screen = "done";
      render();
      return;
    }
    if (speech) speech.quiet();
    stopAudio();
    state.options = buildOptions(item);
    state.status = "listen";
    state.played = false;
    state.roundScored = false;
    state.wrongIds = {};
    state.playing = false;
    render();
  }

  function playCurrent() {
    var item = currentItem();
    if (!item) return;
    if (speech) speech.quiet();
    stopAudio();
    var audio = getAudio(item.src);
    try { audio.currentTime = 0; } catch (err) { /* ignore */ }
    state.played = true;
    state.playing = true;
    if (state.status === "listen" || state.status === "error") state.status = "ready";
    var token = ++playToken;
    render();
    var pending = audio.play();
    var failed = function () {
      state.playing = false;
      state.status = "error";
      render();
    };
    if (pending && pending.then) pending.then(function () {}).catch(failed);
    audio.onended = function () {
      if (token !== playToken) return;
      state.playing = false;
      var button = document.getElementById("replay");
      if (button) button.classList.remove("is-playing");
    };
  }

  function markCorrect() {
    if (state.status === "revealed" || state.status === "correct") return;
    var item = currentItem();
    if (!item) return;
    state.status = "correct";
    if (state.scoreOn && !state.roundScored) {
      state.correctCount += 1;
      state.roundScored = true;
    }
    render();
    burst();
  }

  function markRetry(id) {
    if (state.status === "correct" || state.status === "revealed") return;
    state.status = "retry";
    if (id) state.wrongIds[id] = true;
    render();
  }

  function toggleReveal() {
    if (state.status === "correct") return;
    state.status = state.status === "revealed" ? "ready" : "revealed";
    render();
  }

  function nextRound() {
    if (state.index >= state.queue.length - 1) {
      if (speech) speech.quiet();
      stopAudio();
      state.screen = "done";
      render();
      return;
    }
    state.index += 1;
    beginRound();
  }

  function goHome() {
    if (speech) speech.quiet();
    stopAudio();
    state.screen = "home";
    render();
  }

  function toggleScore() {
    state.scoreOn = !state.scoreOn;
    try {
      window.sessionStorage.setItem("sound-guess-score", state.scoreOn ? "1" : "0");
    } catch (err) { /* ignore */ }
    render();
  }

  function choose(id) {
    var item = currentItem();
    if (!item || state.status === "correct" || state.status === "revealed") return;
    if (id === item.id) markCorrect();
    else markRetry(id);
  }

  function feedbackModel() {
    var item = currentItem();
    var name = item ? item.name : "";
    if (state.status === "error") {
      return { cls: "is-retry", title: "未能播放", body: "請再按一次「再聽一次」。" };
    }
    if (state.status === "correct") {
      return { cls: "is-correct", title: "同學答啱喇！", body: "答案係「" + name + "」。" };
    }
    if (state.status === "revealed") {
      return { cls: "is-reveal", title: "答案係「" + name + "」", body: "可以講多次個名，再去下一題。" };
    }
    if (state.status === "retry") {
      return { cls: "is-retry", title: "再估一次", body: "聽清楚啲。可以再聽一次，未顯示答案。" };
    }
    if (state.played) {
      return { cls: "", title: "學生可以估喇", body: "舉手或者大聲講。老師再點選，或者按下面的掣。" };
    }
    return { cls: "", title: "老師播聲", body: "按金色大掣「再聽一次」。學生聽完先估。" };
  }

  function choiceCard(option) {
    var item = currentItem();
    var locked = state.status === "correct" || state.status === "revealed";
    var classes = "choice";
    var badge = "";
    if (state.wrongIds[option.id]) classes += " is-wrong";
    if (item && option.id === item.id && (state.status === "correct" || state.status === "revealed")) {
      classes += state.status === "correct" ? " is-correct" : " is-answer";
      badge = '<span class="badge">' + (state.status === "correct" ? "答啱" : "答案") + "</span>";
    } else if (state.wrongIds[option.id]) {
      badge = '<span class="badge">再估</span>';
    }
    return (
      '<div class="' + classes + '">' +
        '<button type="button" class="choice-hit" data-action="choose" data-id="' + option.id + '"' +
          (locked ? " disabled" : "") + ' aria-label="' + option.name + '">' +
          '<span class="choice-art">' + option.svg + "</span>" +
          '<span class="choice-name">' + option.name + "</span>" +
        "</button>" +
        '<div class="choice-row">' +
          badge +
          '<button type="button" class="speak-btn js-option-speak" data-speak="' + option.name + '" data-idle-label="朗讀" aria-label="朗讀：' + option.name + '">朗讀</button>' +
        "</div>" +
      "</div>"
    );
  }

  function renderHome() {
    return (
      '<p class="eyebrow">小學一年級 · 老師操作</p>' +
      '<h1>聲音小偵探</h1>' +
      '<p class="subtitle">估估聲</p>' +
      '<ol class="flow">' +
        '<li><b>1</b>老師播聲</li>' +
        '<li class="arrow" aria-hidden="true">→</li>' +
        '<li><b>2</b>學生估</li>' +
        '<li class="arrow" aria-hidden="true">→</li>' +
        '<li><b>3</b>老師確認</li>' +
      "</ol>" +
      '<p class="lead">老師按掣播放聲音。學生聽完，舉手或者大聲講答案。老師再確認。學生唔使自己撳選項。</p>' +
      (state.screen === "home"
        ? '<button type="button" class="btn btn-xl" data-action="start">開始上課</button>'
        : renderPick())
    );
  }

  function renderPick() {
    var animals = data.categories.animals;
    var instruments = data.categories.instruments;
    var animalCount = poolFor("animals").length;
    var instrumentCount = poolFor("instruments").length;
    return (
      '<div class="panel">' +
        '<h2>揀一類</h2>' +
        '<p class="hint">第一次按下已經開啟聲音。入題之後，再按「再聽一次」先會播聲。</p>' +
        '<div class="cats">' +
          '<button type="button" class="btn cat cat-animals" data-action="pick" data-cat="animals"><strong>' + animals.name + "</strong><span>" + animals.blurb + " · " + animalCount + " 題</span></button>" +
          '<button type="button" class="btn cat cat-instruments" data-action="pick" data-cat="instruments"><strong>' + instruments.name + "</strong><span>" + instruments.blurb + " · " + instrumentCount + " 題</span></button>" +
          '<button type="button" class="btn cat cat-mix" data-action="pick" data-cat="mix"><strong>混合</strong><span>兩類一齊 · ' + (animalCount + instrumentCount) + " 題</span></button>" +
        "</div>" +
      "</div>"
    );
  }

  function renderRound() {
    var item = currentItem();
    var fb = feedbackModel();
    var total = state.queue.length;
    var last = state.index >= total - 1;
    var cards = "";
    var i;
    for (i = 0; i < state.options.length; i += 1) cards += choiceCard(state.options[i]);
    var scoreBlock = state.scoreOn
      ? '<span class="stars" aria-hidden="true">' + stars(state.correctCount) + '</span><span class="score-num">' + state.correctCount + "／" + total + "</span>"
      : "";
    return (
      '<div class="topbar">' +
        '<button type="button" class="btn btn-quiet btn-score" data-action="home">返回首頁</button>' +
        '<div><h2>' + categoryName(state.category) + '</h2><div class="progress">第 ' + (state.index + 1) + "／" + total + " 題</div></div>" +
        '<div class="score-cluster">' +
          scoreBlock +
          '<button type="button" class="btn btn-score" data-action="toggle-score" aria-pressed="' + (state.scoreOn ? "true" : "false") + '">計分：' + (state.scoreOn ? "開" : "關") + "</button>" +
        "</div>" +
      "</div>" +
      '<div class="feedback ' + fb.cls + '" role="status" aria-live="polite"><strong>' + fb.title + "</strong><p>" + fb.body + "</p></div>" +
      '<button type="button" class="btn btn-replay' + (state.playing ? " is-playing" : "") + '" id="replay" data-action="replay">再聽一次</button>' +
      '<p class="hint">答案選擇（投影俾學生睇，老師先點選）</p>' +
      '<div class="choices">' + cards + "</div>" +
      '<p class="hint">老師操作</p>' +
      '<div class="teacher">' +
        '<button type="button" class="btn btn-good" data-action="correct"' + (state.status === "correct" || state.status === "revealed" ? " disabled" : "") + ">同學答啱喇</button>" +
        '<button type="button" class="btn btn-retry" data-action="retry"' + (state.status === "correct" || state.status === "revealed" ? " disabled" : "") + ">再估一次</button>" +
        '<button type="button" class="btn btn-quiet" data-action="reveal"' + (state.status === "correct" ? " disabled" : "") + ">" + (state.status === "revealed" ? "隱藏答案" : "顯示答案") + "</button>" +
        '<button type="button" class="btn btn-next" data-action="next">' + (last ? "完成今堂" : "下一題") + "</button>" +
      "</div>" +
      '<details class="help"><summary>鍵盤</summary><p>空白鍵：再聽一次。C：同學答啱喇。R：再估一次。A：顯示或隱藏答案。N：下一題。</p></details>'
    );
  }

  function renderDone() {
    var total = state.queue.length;
    var score = state.scoreOn
      ? '<div class="done-score">' + state.correctCount + "／" + total + "</div><p>同學答啱 " + state.correctCount + " 題。</p><p class=\"stars\">" + stars(state.correctCount) + "</p>"
      : "<p>今堂 " + total + " 題都聽完喇。</p>";
    return (
      '<div class="panel done">' +
        "<h2>今堂完成</h2>" +
        "<p>同學聽得好專心。</p>" +
        score +
        '<div class="done-actions">' +
          '<button type="button" class="btn btn-xl" data-action="again">再玩這一類</button>' +
          '<button type="button" class="btn" data-action="pick-screen">揀另一類</button>' +
        "</div>" +
      "</div>"
    );
  }

  function render() {
    var html;
    if (state.screen === "round") html = renderRound();
    else if (state.screen === "done") html = renderDone();
    else html = renderHome();
    app.innerHTML = html;
    if (speech) speech.syncOptionButtons();
  }

  function burst() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var root = document.getElementById("confetti");
    if (!root) return;
    root.innerHTML = "";
    var colors = ["#ff5d73", "#ffd166", "#06d6a0", "#4cc9f0", "#f72585", "#ffe66d"];
    var i;
    for (i = 0; i < 42; i += 1) {
      var piece = document.createElement("i");
      piece.style.left = Math.random() * 100 + "%";
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = Math.random() * 0.15 + "s";
      root.appendChild(piece);
    }
    window.setTimeout(function () { root.innerHTML = ""; }, 1400);
  }

  app.addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (!button || button.disabled) return;
    var action = button.getAttribute("data-action");
    if (action === "start") startClass();
    else if (action === "pick") startCategory(button.getAttribute("data-cat"));
    else if (action === "replay") playCurrent();
    else if (action === "choose") choose(button.getAttribute("data-id"));
    else if (action === "correct") markCorrect();
    else if (action === "retry") markRetry(null);
    else if (action === "reveal") toggleReveal();
    else if (action === "next") nextRound();
    else if (action === "home") goHome();
    else if (action === "again") startCategory(state.category);
    else if (action === "pick-screen") {
      if (speech) speech.quiet();
      stopAudio();
      state.screen = "pick";
      render();
    }
    else if (action === "toggle-score") toggleScore();
  });

  document.addEventListener("keydown", function (event) {
    if (state.screen !== "round") return;
    var tag = event.target && event.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SUMMARY") return;
    var key = event.key;
    if ((key === " " || key === "Spacebar") && !(event.target && event.target.closest && event.target.closest("button"))) {
      event.preventDefault();
      playCurrent();
    } else if (key === "n" || key === "N") nextRound();
    else if (key === "a" || key === "A") toggleReveal();
    else if (key === "c" || key === "C") markCorrect();
    else if (key === "r" || key === "R") markRetry(null);
  });

  if (speech) speech.bindOptionSpeakers();
  render();
})();
