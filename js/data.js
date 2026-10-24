(function () {
  var V = "6";

  function src(file) {
    return "assets/audio/" + file + "?v=" + V;
  }

  function icon(id) {
    return '<img class="item-art" src="assets/icons/' + id + '.png?v=' + V + '" alt="" width="160" height="120" decoding="async">';
  }

  var items = [
    { id: "cat", name: "貓", category: "animals", file: "cat.mp3" },
    { id: "dog", name: "狗", category: "animals", file: "dog.mp3" },
    { id: "cow", name: "牛", category: "animals", file: "cow.mp3" },
    { id: "chicken", name: "雞", category: "animals", file: "chicken.mp3" },
    { id: "drum", name: "鼓", category: "instruments", file: "drum.mp3" },
    { id: "bell", name: "鈴", category: "instruments", file: "bell.mp3" },
    { id: "triangle", name: "三角鐵", category: "instruments", file: "triangle.mp3" },
    { id: "castanet", name: "響板", category: "instruments", file: "castanet.mp3" }
  ];

  var i;
  for (i = 0; i < items.length; i += 1) {
    items[i].src = src(items[i].file);
    items[i].svg = icon(items[i].id);
  }

  window.SOUND_DATA = {
    version: V,
    categories: {
      animals: {
        id: "animals",
        name: "動物叫聲",
        blurb: "貓、狗、牛、雞",
        heroes: ["cat", "dog", "cow"]
      },
      instruments: {
        id: "instruments",
        name: "課堂樂器",
        blurb: "鼓、鈴、三角鐵、響板",
        heroes: ["drum", "bell", "triangle"]
      },
      mix: {
        id: "mix",
        name: "混合",
        blurb: "兩類一齊練習",
        heroes: ["dog", "drum", "bell"]
      }
    },
    items: items
  };
})();
