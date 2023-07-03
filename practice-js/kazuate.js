// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisu = 0;


hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu.textContent = console.log(kaisu);
  let yoso = document.querySelector('span#answer');
  yoso.textContent=4;
  let kekka = document.querySelector('p#result');
  console.log(kaisu +"回目の予想"+yoso);
  if(kotae===yoso){
    if(kaisu >=4){
    kekka.textconsole.log("答えは"+kotae+"でした。すでにゲームは終わってます");
  }  else {
    kekka.textconsole.log("正解です。おめでとう!");
  }  

} else {
      if(kaisu===3){
        kekka.textconsole.log("まちがい、残念でした答えは"+kotae+"でした。");
    } else if(kekka>=4){
        kekka.textconsole.log("答えは"+kotae+"でした。すでにゲームは終わってます");
    } else if (kotae>yoso){
        kekka.textconsole.log("まちがい、答えはもっと大きいですよ");
      } else{
        kekka.textconsole.log("まちがい、答えはもっと小さいですよ");
        kaisu.textConsole += 1;
      }
}
kaisu++;
}
