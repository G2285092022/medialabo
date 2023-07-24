

let b1 = document.querySelector('#print');
b1.addEventListener('click',yoho);

function yoho(){
  let a = document.querySelector("select[id='tenki']");
  let id = a.value;

  let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/" + id + ".json";


  axios.get(url)
  .then(showResult)   
  .catch(showError)   
  .then(finish);      

}
function showResult(resp) {
  let data= resp.data;

if(typeof data=='string'){
data = JSON.parse(data);
}
let ido= document.querySelector('li#ido');
ido.textContent=data.coord.lon;
let keido= document.querySelector('li#keido');
keido.textContent=data.coord.lat;
let tenki= document.querySelector('li#tenki');
tenki.textContent=data.weather[0].description;
let saitei= document.querySelector('li#saitei');
saitei.textContent=data.main.temp_min;
let saikou= document.querySelector('li#saikou');
saikou.textContent=data.main.temp_max;
let ondo= document.querySelector('li#ondo');
ondo.textContent=data.main.humidity;
let huusoku= document.querySelector('li#huusoku');
huusoku.textContent=data.wind.speed;
let huukou= document.querySelector('li#huukou');
huukou.textContent=data.wind.deg;
let tosimei= document.querySelector('li#tosimei');
tosimei.textContent=data.name;
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


function showError(err){
  console.log(err);
}

function finish(){
  console.log('finish');
}
