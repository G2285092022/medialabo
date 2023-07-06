// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let kaisu = 0;




// ボタンを押した後の処理をする関数 hantei() の定義

let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei);


function hantei() {
  kaisu.textContent = console.log(kaisu);
  let i = document.querySelector('input[name="suuzi"]');
  let yoso = i.value;
  let kaisu1 = document.querySelector('span#kaisu');
  let yoso1 = document.querySelector('span#answer');
  kaisu1.textContent = kaisu;
  yoso.textContent = yoso;
  console.log(kaisu +"回目の予想:"+yoso);
  let kekka = document.querySelector('p#result');

  if(kotae===yoso){
    if(kaisu >=4){
    kekka.textContent="答えは"+kotae+"でした。すでにゲームは終わってます";
    console.log("答えは"+kotae+"でした。すでにゲームは終わってます");
  }  else {
    kekka.textContent="正解です。おめでとう!";
    console.log("正解です。おめでとう!")
  }  

} else {
      if(kaisu===3){
        kekka.textContent="まちがい、残念でした答えは"+kotae+"でした。";
        console.log("答えは"+kotae+"でした。すでにゲームは終わってます");
    } else if(kekka>=4){
        kekka.textContent="答えは"+kotae+"でした。すでにゲームは終わってます";
        console.log("答えは"+kotae+"でした。すでにゲームは終わってます");
    } else if (kotae>yoso){
        kekka.textContent("まちがい、答えはもっと大きいですよ");
        kekka.textconsole.log("まちがい、答えはもっと大きいですよ");
      } else{
        kekka.textconsole.log("まちがい、答えはもっと小さいですよ");
        kaisu.textConsole += 1;
      }
}
kaisu++;
}
