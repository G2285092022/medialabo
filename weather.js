let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

let b1 = document.querySelector('#print');
b1.addEventListener('click',yoho);

function yoho(){

let kensaku = document.querySelector('li#kensaku')
kensaku.textContent=("世界の天気(検索結果1件");
let ido= document.querySelector('li#ido')
ido.textContent=("緯度:116.3972");
let keido= document.querySelector('li#keido')
keido.textContent=("経度:39.5907");
let tenki= document.querySelector('li#tenki')
tenki.textContent=("天気:曇りがち");
let saitei= document.querySelector('li#saitei')
saitei.textContent=("最低気温:9.94");
let saikou= document.querySelector('li#saikou')
saikou.textContent="最高気温:9.94";
let ondo= document.querySelector('li#ondo')
ondo.textContent=("湿度:14");
let huusoku= document.querySelector('li#huusoku')
huusoku.textContent=("風速:2.65");
let huukou= document.querySelector('li#huukou')
huukou.textContent=("風向:197");
let tosimei= document.querySelector('li#tosimei')
tosimei.textContent=("都市名:北京");
let y =data;
console.log(y.coord.lon);
console.log(y.coord.lat);
for(let x of data.weather){
  console.log(x.description);
}
console.log(y.main.temp_min);
console.log(y.main.temp_max);
console.log(y.main.humidity);
console.log(y.wind.speed);
console.log(y.wind.deg);
console.log(y.name);
}
