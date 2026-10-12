(function () {
  var V = "1";

  function src(file) {
    return "assets/audio/" + file + "?v=" + V;
  }

  function svg(inner) {
    return '<svg viewBox="0 0 128 128" width="128" height="128" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }

  var stroke = 'stroke="#243044" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';

  var icons = {
    cat: svg(
      '<path d="M34 58 L42 22 L56 50" fill="#ffb15a" ' + stroke + '/>' +
      '<path d="M94 58 L86 22 L72 50" fill="#ffb15a" ' + stroke + '/>' +
      '<ellipse cx="64" cy="78" rx="36" ry="32" fill="#ffb15a" ' + stroke + '/>' +
      '<circle cx="50" cy="74" r="5" fill="#243044"/>' +
      '<circle cx="78" cy="74" r="5" fill="#243044"/>' +
      '<path d="M64 84 l-6 8 h12 z" fill="#ff7a93" ' + stroke + '/>' +
      '<path d="M22 78h16M90 78h16M24 90h14M90 90h14" fill="none" stroke="#243044" stroke-width="4" stroke-linecap="round"/>'
    ),
    dog: svg(
      '<path d="M28 70c-8 8-10 28-2 36 8-6 14-8 18-8" fill="#c9844a" ' + stroke + '/>' +
      '<path d="M100 70c8 8 10 28 2 36-8-6-14-8-18-8" fill="#c9844a" ' + stroke + '/>' +
      '<ellipse cx="64" cy="74" rx="34" ry="32" fill="#e0a36a" ' + stroke + '/>' +
      '<ellipse cx="64" cy="86" rx="16" ry="12" fill="#f3d2b0" ' + stroke + '/>' +
      '<circle cx="50" cy="68" r="5" fill="#243044"/>' +
      '<circle cx="78" cy="68" r="5" fill="#243044"/>' +
      '<ellipse cx="64" cy="82" rx="5" ry="4" fill="#243044"/>' +
      '<path d="M58 96c4 6 10 6 14 0" fill="#e85d4c" ' + stroke + '/>'
    ),
    cow: svg(
      '<path d="M36 40c-2-12 8-16 12-8" fill="none" ' + stroke + '/>' +
      '<path d="M92 40c2-12-8-16-12-8" fill="none" ' + stroke + '/>' +
      '<ellipse cx="64" cy="76" rx="38" ry="34" fill="#fffaf3" ' + stroke + '/>' +
      '<ellipse cx="42" cy="62" rx="8" ry="6" fill="#243044"/>' +
      '<ellipse cx="90" cy="70" rx="7" ry="5" fill="#243044"/>' +
      '<ellipse cx="64" cy="92" rx="16" ry="12" fill="#f3b6c2" ' + stroke + '/>' +
      '<circle cx="58" cy="90" r="3" fill="#243044"/>' +
      '<circle cx="70" cy="90" r="3" fill="#243044"/>' +
      '<circle cx="48" cy="72" r="4" fill="#243044"/>' +
      '<circle cx="80" cy="72" r="4" fill="#243044"/>'
    ),
    chicken: svg(
      '<path d="M48 34c2-12 16-16 22-6 6-8 18-4 16 8" fill="#e23b3b" ' + stroke + '/>' +
      '<ellipse cx="62" cy="78" rx="34" ry="28" fill="#ffd15c" ' + stroke + '/>' +
      '<circle cx="86" cy="62" r="16" fill="#ffe08a" ' + stroke + '/>' +
      '<circle cx="92" cy="60" r="3.5" fill="#243044"/>' +
      '<path d="M98 66 l16 4-16 6z" fill="#f28c28" ' + stroke + '/>' +
      '<path d="M46 100 l-8 14M62 104 l0 14M78 100 l8 14" fill="none" ' + stroke + '/>'
    ),
    bird: svg(
      '<ellipse cx="62" cy="74" rx="28" ry="22" fill="#4dabf7" ' + stroke + '/>' +
      '<circle cx="86" cy="58" r="16" fill="#74c0fc" ' + stroke + '/>' +
      '<circle cx="92" cy="56" r="3.5" fill="#243044"/>' +
      '<path d="M98 62 l16 3-16 5z" fill="#f59f00" ' + stroke + '/>' +
      '<path d="M40 70c-16 2-22 16-12 22 8-8 16-10 24-8" fill="#4dabf7" ' + stroke + '/>' +
      '<path d="M48 96 l-6 14M66 98 l6 12" fill="none" ' + stroke + '/>'
    ),
    pig: svg(
      '<ellipse cx="64" cy="76" rx="38" ry="32" fill="#ffb3c7" ' + stroke + '/>' +
      '<path d="M34 48c2-14 12-16 16-6" fill="#ff8fab" ' + stroke + '/>' +
      '<path d="M94 48c-2-14-12-16-16-6" fill="#ff8fab" ' + stroke + '/>' +
      '<ellipse cx="64" cy="84" rx="16" ry="12" fill="#ff8fab" ' + stroke + '/>' +
      '<circle cx="58" cy="84" r="3" fill="#243044"/>' +
      '<circle cx="70" cy="84" r="3" fill="#243044"/>' +
      '<circle cx="48" cy="68" r="4" fill="#243044"/>' +
      '<circle cx="80" cy="68" r="4" fill="#243044"/>'
    ),
    sheep: svg(
      '<circle cx="40" cy="70" r="16" fill="#fff" ' + stroke + '/>' +
      '<circle cx="64" cy="60" r="18" fill="#fff" ' + stroke + '/>' +
      '<circle cx="88" cy="70" r="16" fill="#fff" ' + stroke + '/>' +
      '<circle cx="52" cy="84" r="16" fill="#fff" ' + stroke + '/>' +
      '<circle cx="76" cy="84" r="16" fill="#fff" ' + stroke + '/>' +
      '<ellipse cx="96" cy="78" rx="14" ry="12" fill="#f3d2b0" ' + stroke + '/>' +
      '<circle cx="100" cy="76" r="2.5" fill="#243044"/>' +
      '<path d="M48 104 v12M70 104 v12" fill="none" ' + stroke + '/>'
    ),
    horse: svg(
      '<path d="M78 30c12 2 18 16 14 28l10 6-12 6c-2 8-8 16-16 20-18 8-36 2-44-10 6-2 12-10 14-10 0-8 6-18 16-24 4-12 10-18 18-16z" fill="#c9844a" ' + stroke + '/>' +
      '<path d="M88 28c8-10 22-6 22 6" fill="none" ' + stroke + '/>' +
      '<circle cx="80" cy="50" r="3.5" fill="#243044"/>' +
      '<ellipse cx="42" cy="74" rx="9" ry="6" fill="#f3d2b0" ' + stroke + '/>' +
      '<path d="M40 102 v12M60 106 v12M82 102 v12" fill="none" ' + stroke + '/>'
    ),
    drum: svg(
      '<ellipse cx="64" cy="78" rx="40" ry="16" fill="#f4e1c1" ' + stroke + '/>' +
      '<path d="M24 78 v22c0 10 18 16 40 16s40-6 40-16V78" fill="#e03131" ' + stroke + '/>' +
      '<path d="M24 90c10 8 24 12 40 12s30-4 40-12" fill="none" stroke="#ffd43b" stroke-width="4"/>' +
      '<path d="M30 46 l18 28M98 42 l-16 30" fill="none" ' + stroke + '/>' +
      '<circle cx="30" cy="44" r="6" fill="#f4e1c1" ' + stroke + '/>' +
      '<circle cx="98" cy="40" r="6" fill="#f4e1c1" ' + stroke + '/>'
    ),
    bell: svg(
      '<path d="M64 22 v10" fill="none" ' + stroke + '/>' +
      '<path d="M40 46 h48 l8 36c-14 10-50 10-64 0z" fill="#ffd43b" ' + stroke + '/>' +
      '<ellipse cx="64" cy="46" rx="24" ry="8" fill="#ffe066" ' + stroke + '/>' +
      '<circle cx="64" cy="86" r="6" fill="#f08c00" ' + stroke + '/>' +
      '<path d="M48 96 h32" fill="none" ' + stroke + '/>'
    ),
    triangle: svg(
      '<path d="M64 30 L100 98 H28 Z" fill="#dee2e6" ' + stroke + '/>' +
      '<path d="M64 48 L86 88 H42 Z" fill="none" stroke="#868e96" stroke-width="4"/>' +
      '<path d="M82 70 l18 22" fill="none" ' + stroke + '/>' +
      '<circle cx="102" cy="94" r="6" fill="#ced4da" ' + stroke + '/>'
    ),
    castanet: svg(
      '<ellipse cx="46" cy="70" rx="22" ry="28" fill="#d97706" ' + stroke + ' transform="rotate(-18 46 70)"/>' +
      '<ellipse cx="82" cy="70" rx="22" ry="28" fill="#b45309" ' + stroke + ' transform="rotate(18 82 70)"/>' +
      '<circle cx="46" cy="78" r="4" fill="#fde68a"/>' +
      '<circle cx="82" cy="78" r="4" fill="#fde68a"/>'
    ),
    xylophone: svg(
      '<rect x="22" y="36" width="70" height="10" rx="4" fill="#ff6b6b" ' + stroke + ' transform="rotate(-8 57 41)"/>' +
      '<rect x="24" y="52" width="74" height="10" rx="4" fill="#ffd43b" ' + stroke + ' transform="rotate(-8 61 57)"/>' +
      '<rect x="26" y="68" width="78" height="10" rx="4" fill="#69db7c" ' + stroke + ' transform="rotate(-8 65 73)"/>' +
      '<rect x="28" y="84" width="82" height="10" rx="4" fill="#4dabf7" ' + stroke + ' transform="rotate(-8 69 89)"/>' +
      '<path d="M96 30 l10 16" fill="none" ' + stroke + '/>' +
      '<circle cx="108" cy="48" r="5" fill="#fff3bf" ' + stroke + '/>'
    ),
    melodica: svg(
      '<rect x="28" y="48" width="78" height="36" rx="8" fill="#40c057" ' + stroke + '/>' +
      '<rect x="36" y="54" width="8" height="18" fill="#fff" stroke="#243044" stroke-width="3"/>' +
      '<rect x="48" y="54" width="8" height="18" fill="#fff" stroke="#243044" stroke-width="3"/>' +
      '<rect x="60" y="54" width="8" height="18" fill="#fff" stroke="#243044" stroke-width="3"/>' +
      '<rect x="42" y="54" width="6" height="12" fill="#243044"/>' +
      '<rect x="54" y="54" width="6" height="12" fill="#243044"/>' +
      '<path d="M28 66 H16 c-6 0-8 10-2 12 h10" fill="#dee2e6" ' + stroke + '/>' +
      '<ellipse cx="12" cy="80" rx="6" ry="5" fill="#fff" ' + stroke + '/>'
    ),
    piano: svg(
      '<rect x="18" y="36" width="92" height="64" rx="8" fill="#343a40" ' + stroke + '/>' +
      '<rect x="26" y="44" width="76" height="46" fill="#f8f9fa" stroke="#243044" stroke-width="3"/>' +
      '<path d="M38 44 v28M50 44 v46M62 44 v28M74 44 v46M86 44 v28" fill="none" stroke="#243044" stroke-width="3"/>' +
      '<rect x="34" y="44" width="8" height="26" fill="#243044"/>' +
      '<rect x="46" y="44" width="8" height="26" fill="#243044"/>' +
      '<rect x="70" y="44" width="8" height="26" fill="#243044"/>' +
      '<rect x="82" y="44" width="8" height="26" fill="#243044"/>'
    ),
    woodfish: svg(
      '<ellipse cx="64" cy="72" rx="40" ry="28" fill="#e03131" ' + stroke + '/>' +
      '<path d="M40 72 h36" fill="none" stroke="#ffd43b" stroke-width="6" stroke-linecap="round"/>' +
      '<circle cx="92" cy="64" r="4" fill="#243044"/>' +
      '<path d="M86 58c8-10 18-8 20 2" fill="none" ' + stroke + '/>' +
      '<path d="M78 28 l6 16" fill="none" ' + stroke + '/>' +
      '<circle cx="76" cy="24" r="7" fill="#f4e1c1" ' + stroke + '/>'
    )
  };

  var items = [
    { id: "cat", name: "貓", category: "animals", file: "cat.mp3" },
    { id: "dog", name: "狗", category: "animals", file: "dog.mp3" },
    { id: "cow", name: "牛", category: "animals", file: "cow.mp3" },
    { id: "chicken", name: "雞", category: "animals", file: "chicken.mp3" },
    { id: "bird", name: "鳥", category: "animals", file: "bird.mp3" },
    { id: "pig", name: "豬", category: "animals", file: "pig.mp3" },
    { id: "sheep", name: "羊", category: "animals", file: "sheep.mp3" },
    { id: "horse", name: "馬", category: "animals", file: "horse.mp3" },
    { id: "drum", name: "鼓", category: "instruments", file: "drum.mp3" },
    { id: "bell", name: "鈴", category: "instruments", file: "bell.mp3" },
    { id: "triangle", name: "三角鐵", category: "instruments", file: "triangle.mp3" },
    { id: "castanet", name: "響板", category: "instruments", file: "castanet.mp3" },
    { id: "xylophone", name: "木琴", category: "instruments", file: "xylophone.mp3" },
    { id: "melodica", name: "口風琴", category: "instruments", file: "melodica.mp3" },
    { id: "piano", name: "鋼琴", category: "instruments", file: "piano.mp3" },
    { id: "woodfish", name: "木魚", category: "instruments", file: "woodfish.mp3" }
  ];

  var i;
  for (i = 0; i < items.length; i += 1) {
    items[i].src = src(items[i].file);
    items[i].svg = icons[items[i].id];
  }

  window.SOUND_DATA = {
    version: V,
    categories: {
      animals: { id: "animals", name: "動物叫聲", blurb: "貓、狗、牛、雞、鳥、豬、羊、馬" },
      instruments: { id: "instruments", name: "課堂樂器", blurb: "鼓、鈴、三角鐵、響板、木琴、口風琴、鋼琴、木魚" },
      mix: { id: "mix", name: "混合", blurb: "兩類一齊，逐題仍然同一類裏面揀" }
    },
    items: items
  };
})();
