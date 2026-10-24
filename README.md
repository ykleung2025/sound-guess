# 聲音小偵探（估估聲）

小學一年級用的課堂聲音遊戲。老師用平板或電腦投影來操作，學生聽聲之後舉手或大聲講答案。

語言：繁體中文（香港）。大字、大掣，適合約六至七歲，亦適合投到螢幕。

網址（合併到 `main` 並開啟 GitHub Pages 之後）：<https://ykleung2025.github.io/sound-guess/>

## 點樣玩

首頁三步：**老師播聲 → 學生估 → 老師確認**。

1. 老師按「開始上課」（這一下會開啟聲音，瀏覽器先至准播放）。
2. 揀「動物叫聲」、「課堂樂器」或「混合」。
3. 每題按金色大掣「再聽一次」播聲。這粒掣成題都在。
4. 學生聽完，舉手或講答案。畫面一開始就有四幅大圖同中文名，俾全班睇住估。金色掣「再聽一次」只播聲，唔會標出而家播緊邊一張。
5. 老師先確認：
   - 估中：按「同學答啱喇」，或點中正確嗰幅圖。嗰張先會標「答啱」。
   - 未中：按「再估一次」，或者點錯嗰張。未顯示答案，可以再聽。
   - 想公開：按「顯示答案」。正確嗰張先標「答案」。可以再按「隱藏答案」。
6. 按「下一題」。計分可以開或者關，開咗會見到星星同 X／N。

學生唔使自己撳選項。選項掣係俾老師記錄全班答案。

每項旁邊有「朗讀」，用瀏覽器語音讀個名，優先粵語 `zh-HK`。如果這部裝置沒有語音，畫面會寫「這部裝置未能朗讀，請讀畫面上的字。」沒有朗讀都可以玩。

鍵盤（可選）：空白鍵再聽一次，C 同學答啱喇，R 再估一次，A 顯示或隱藏答案，N 下一題。

## 兩類題目

**動物叫聲**（4 題）：貓、狗、牛、雞。

**課堂樂器**（4 題）：鼓、鈴、三角鈴、響板。

**混合**（8 題）：兩類一齊練習。每一題的四個選擇仍然屬同一類，避免動物同樂器撈亂。

`assets/audio/` 仲留住鳥、豬、羊、馬、木琴、口風琴、鋼琴、木魚嘅 mp3。呢啲錄音唔喺今次題庫，畫面亦唔會出現。授權表下面照樣列出。

## 聲音

聲音檔在 `assets/audio/`，短 mp3，跟網頁一齊存放。課堂播放唔使登入，亦唔使連去其他網站。請在學生估之前按「再聽一次」，因為瀏覽器要老師先撳一下，先至准出聲。

出處同授權見下面，詳細檔名亦寫在 `assets/audio/LICENSES.txt`。

| 檔案 | 內容 | 作者 | 授權 | 出處 |
| --- | --- | --- | --- | --- |
| `cat.mp3` | 貓 | freemaster2 | CC0 1.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Meow_of_a_Siamese_cat_-_freemaster2.wav) |
| `dog.mp3` | 狗 | abhisheky948 | CC0 1.0 | [Freesound 625501](https://freesound.org/people/abhisheky948/sounds/625501/) |
| `cow.mp3` | 牛 | spurioustransients | CC0 1.0 | [Freesound 513565](https://freesound.org/people/spurioustransients/sounds/513565/) |
| `chicken.mp3` | 雞 | arelitron | CC0 1.0 | [Freesound 582624](https://freesound.org/people/arelitron/sounds/582624/) |
| `bird.mp3` | 鳥 | LilMati | CC0 1.0 | [Freesound 714572](https://freesound.org/people/LilMati/sounds/714572/) |
| `pig.mp3` | 豬 | TheKingOfGeeks360 | CC0 1.0 | [Freesound 842313](https://freesound.org/people/TheKingOfGeeks360/sounds/842313/) |
| `sheep.mp3` | 羊 | Chipsplease | CC0 1.0 | [Freesound 669765](https://freesound.org/people/Chipsplease/sounds/669765/) |
| `horse.mp3` | 馬 | Hü | 公有領域 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wiehern.ogg) |
| `drum.mp3` | 鼓 | TheEndOfACycle | CC0 1.0 | [Freesound 673516](https://freesound.org/people/TheEndOfACycle/sounds/673516/) |
| `bell.mp3` | 鈴 | brittgym98 | CC0 1.0 | [Freesound 533561](https://freesound.org/people/brittgym98/sounds/533561/) |
| `triangle.mp3` | 三角鈴 | Joseph SARDIN / BigSoundBank | CC0 1.0 | [Triangle #1](https://bigsoundbank.com/triangle-1-s1687.html) |
| `castanet.mp3` | 響板 | loganzsound | CC0 1.0 | [Freesound 774639](https://freesound.org/people/loganzsound/sounds/774639/) |
| `xylophone.mp3` | 木琴 | Aeonemi | CC0 1.0 | [Freesound 184012](https://freesound.org/people/Aeonemi/sounds/184012/) |
| `melodica.mp3` | 口風琴 | ari__inez | CC0 1.0 | [Freesound 833954](https://freesound.org/people/ari__inez/sounds/833954/) |
| `piano.mp3` | 鋼琴 | mamax | CC0 1.0 | [Freesound 44355](https://freesound.org/people/mamax/sounds/44355/) |
| `woodfish.mp3` | 木魚 | jonopodmore | CC0 1.0 | [Freesound 607215](https://freesound.org/people/jonopodmore/sounds/607215/) |

CC0 可以自由使用同改。公有領域的馬嘶聲由作者 Hü 放出。Freesound 的檔用咗 CC0 預覽 mp3，再截短、調響度、轉成 mp3。木魚原錄音一下很短，所以重複三次。牛、三角鈴等只留最清楚的一段。

圖是網頁入面的側面插圖（動物同課堂樂器），用 `overflow: visible` 完整顯示，沒有裁切。

## 點樣打開

用 Chrome、Edge、Safari 或 Firefox 打開 `index.html`。檔案在本機，打開之後播聲音唔使再上網。朗讀要視乎裝置有沒有粵語語音。

如果學校電腦不允許直接打開檔案：

```bash
python3 -m http.server 47321
```

然後打開 <http://127.0.0.1:47321/>。

## GitHub Pages

網站是靜態檔，放在倉庫根目錄（`index.html`）。

1. 把這個分支合併到 `main`。
2. 打開倉庫 Settings → Pages。
3. Source 選 Deploy from a branch，Branch 選 `main`，資料夾選 `/ (root)`，然後 Save。

幾分鐘後可以開 <https://ykleung2025.github.io/sound-guess/>。樣式、插圖同程式帶有 `?v=4`，方便更新後少被舊快取擋住。
