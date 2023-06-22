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
  kaisu=kaisu+1;

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;
  
  // 課題3-1: 正解判定する
  console.log(kaisu +"回目の予想"+yoso);

  if(kotae===yoso){
    if(kotae===yoso&&kaisu<3)  
    console.log('正解です、おめでとう！');
    } else if(kotae===yoso&&kaisu>4){
      console.log('答えは'+kotae+'でした。すでにゲームは終わってます');
    }  
    
    if(kotae!==yoso&&kaisu<5){
      if(yoso>kotae){
        console.log('まちがい、答えはもっと小さいですよ');
    } else if(yoso<kotae){
      console.log('まちがい、答えはもっと大きいですよ');
      }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
}
