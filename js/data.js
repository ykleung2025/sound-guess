(function () {
  var V = "2";

  function src(file) {
    return "assets/audio/" + file + "?v=" + V;
  }

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
    items[i].svg = window.SOUND_ART[items[i].id];
  }

  window.SOUND_DATA = {
    version: V,
    categories: {
      animals: {
        id: "animals",
        name: "動物叫聲",
        blurb: "貓、狗、牛、雞、鳥、豬、羊、馬",
        heroes: ["cat", "cow", "bird"]
      },
      instruments: {
        id: "instruments",
        name: "課堂樂器",
        blurb: "鼓、鈴、三角鐵、響板、木琴、口風琴、鋼琴、木魚",
        heroes: ["drum", "bell", "xylophone"]
      },
      mix: {
        id: "mix",
        name: "混合",
        blurb: "兩類一齊練習",
        heroes: ["dog", "drum", "piano"]
      }
    },
    items: items
  };
})();
