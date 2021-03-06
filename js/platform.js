

// codes for crypo exchange

const select = document.getElementById("exchangeSelect");

const country = document.getElementById("country");
const year = document.getElementById("incorpYear");

const volume = document.getElementById("volume");
const url = document.getElementById("url");

const image = document.getElementById("image");

const nameVol=document.getElementById('nameVol')
const imgVol=document.getElementById('imgVol')
const urlVol=document.getElementById('urlVol')

console.log(select)

async function getBtcData() {
  let response = await fetch(
    "https://api.coingecko.com/api/v3/exchanges"
  );
  let data = await response.json();
  console.log(data);
  return data;
}

getBtcData().then((data) => {
  display_btcexchange(data);
});

// display the exchange for selection
function display_btcexchange(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select.innerHTML += `<option value="${data[i].name}">${data[i].name}</option>`;
  }
}

// function to retrieve data after choosing the exchange
function retrieveBtcData(data) {
  let exchangeSelected = select.options[select.selectedIndex].value;
  console.log(exchangeSelected);
  let entry = Object.entries(data);
  console.log(entry[0][1]);
  let get_country = [];
  let get_year = [];
  let get_trustRank = [];
  let get_volume = [];
  let get_url = [];
  let get_image = "";

  for (let i = 0; i < entry.length; i++) {
    if (entry[i][1].name === exchangeSelected) {
      get_country = entry[i][1].country;
      get_year = entry[i][1].year_established;
      get_trustRank = entry[i][1].trust_score_rank;
      get_volume = entry[i][1].trade_volume_24h_btc.toFixed(0);
      get_url = entry[i][1].url;
      get_image = entry[i][1].image;
    }
  }

  country.innerHTML = `${get_country}`;
  year.innerHTML = `${get_year}`;
  creditRank.innerHTML = ` ${get_trustRank}`;
  volume.innerHTML = `${get_volume}`;
  url.innerHTML = `<a href=${get_url}>${get_url}</a> `;
  image.src = get_image;
 
}

// choose the platform based on the trading volume 


getBtcData().then((data) => {
    retrieve_exchange_byVolume(data);
    retrieve_exchange_byRank(data)
   
  });
//--- function to get the relevant platform---//

// select exchange by volume
let maxVol
function retrieve_exchange_byVolume(data){
    let entry = Object.entries(data);
  
    console.log(entry[2][1].image);
      // for (let i = 0; i < entry.length; i++){
      // ranking=  Math.min.apply(Math, entry.map(function(entry) { return entry[i][1].trust_score_rank; }))
      
      // console.log(ranking)
      let numArray=[]
      for (let i = 0; i < entry.length; i++){
       numArray.push(entry[i][1].trade_volume_24h_btc)
     
}
maxVol = Math.max(...numArray)
console.log(maxVol)
let get_image_vol="";
let get_name_vol=[];
let get_url_vol=""



for (let i = 0; i < entry.length; i++) {
  if (entry[i][1].trade_volume_24h_btc === maxVol){
 
    get_name_vol=entry[i][1].name
    get_image_vol=entry[i][1].image
    get_url_vol=entry[i][1].url
    
    
  }
}
nameVol.innerHTML=`${get_name_vol}`

imgVol.src = get_image_vol
urlVol.href = get_url_vol;



}


// select exchange by Trust Score
let bestRank

function retrieve_exchange_byRank(data){
    let entry = Object.entries(data);
  
 
      let bestRankArray=[]
      for (let i = 0; i < entry.length; i++){
       bestRankArray.push(entry[i][1].trust_score_rank)
     
}
bestRank= Math.min(...bestRankArray)
console.log(bestRank)
let get_image_rank="";
let get_name_rank=[];
let get_url_rank=""



for (let i = 0; i < entry.length; i++) {
  if (entry[i][1].trust_score_rank === bestRank){
 
    get_name_rank=entry[i][1].name
    get_image_rank=entry[i][1].image
    get_url_rank=entry[i][1].url
    
    
  }
}
document.getElementById('nameRank').innerHTML=`${get_name_rank}`

document.getElementById('imgRank').src = get_image_rank;
document.getElementById('urlRank').href = get_url_rank;

}



// change event
select.addEventListener("change", () => {
  getBtcData().then((data) => {
    retrieveBtcData(data);
  });
});

/*-- coding for crypto Derivative exchange from here */
const devSelect = document.getElementById("devExchangeSelect");

const devCountry = document.getElementById("devCountry");
const devYear = document.getElementById("devIncorpYear");
const futurePairNumber = document.getElementById("futurePairNumber");
const perpetualPairNumber = document.getElementById(
  "perpetualPairNumber"
);
const openContractNumber = document.getElementById("open");
const devVolume = document.getElementById("devVolume");
const devUrl = document.getElementById("devUrl");
const dec =document.getElementById('description')
const devImage = document.getElementById("devImage");

async function getData() {
  let response = await fetch(
    "https://api.coingecko.com/api/v3/derivatives/exchanges"
  );
  let data = await response.json();
  console.log(data);
  return data;
}

getData().then((data) => {
  display_exchange(data);
});

// display the exchange for selection
function display_exchange(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    devSelect.innerHTML += `<option value="${data[i].name}">${data[i].name}</option>`;
  }
}

// function to retrieve data after choosing the exchange
function retrieveData(data) {
  let devExchangeSelected = devSelect.options[devSelect.selectedIndex].value;
  console.log(devExchangeSelected);
  let entry = Object.entries(data);
  console.log(entry);
  let get_country = [];
  let get_year = [];
  let get_futurePairNumber = [];
  let get_perpetualPairNumber = [];
  let get_volume = [];
  let get_url = [];
  let get_openContract = [];
  let get_image = "";
  let get_description='';
  let volume_formatted;

  for (let i = 0; i < entry.length; i++) {
    if (entry[i][1].name === devExchangeSelected) {
      get_country = entry[i][1].country;
      get_year = entry[i][1].year_established;
      get_futurePairNumber = entry[i][1].number_of_futures_pairs;
      get_perpetualPairNumber = entry[i][1].number_of_perpetual_pairs;
      get_volume = entry[i][1].trade_volume_24h_btc;
      get_url = entry[i][1].url;
      get_image = entry[i][1].image;
      get_openContract = entry[i][1].open_interest_btc;
      get_description = entry[i][1].description;
      
      //format the number to a more readable way
      volume_formatted= new Intl.NumberFormat().format(get_volume)
  
    }
  }
//new Intl.NumberFormat().format(number)
  devCountry.innerHTML = `${get_country}`;
  devYear.innerHTML = `${get_year}`;
  futurePairNumber.innerHTML = `${get_futurePairNumber}`;
  perpetualPairNumber.innerHTML = `${get_perpetualPairNumber}`;
  devVolume.innerHTML = `${volume_formatted}`;
  openContractNumber.innerHTML = `${get_openContract}`;
  devUrl.innerHTML = `<a href=${get_url}>${get_url}</a> `;
  devImage.src = get_image;
  dec.innerHTML=`${get_description}`;
}

// change event
devSelect.addEventListener("change", () => {
  getData().then((data) => {
    retrieveData(data);
  });
});


// function to get the derivative platform with most pairs


getData().then((data) => {
  retrieve_exchange_bypair(data);
  retrieve_exchange_byopen(data);
});

let maxPair
function retrieve_exchange_bypair(data){
    let entry = Object.entries(data);
  
 
      let numPairArray=[]
      for (let i = 0; i < entry.length; i++){
       numPairArray.push(entry[i][1].number_of_perpetual_pairs)
     
}
maxPair = Math.max(...numPairArray)
console.log(maxPair)
let get_image_pair="";
let get_name_pair=[];
let get_url_pair=""



for (let i = 0; i < entry.length; i++) {
  if (entry[i][1].number_of_perpetual_pairs === maxPair){
 
    get_name_pair=entry[i][1].name
    get_image_pair=entry[i][1].image
    get_url_pair=entry[i][1].url
    
    
  }
}
document.getElementById('namePair').innerHTML=`${get_name_pair}`

document.getElementById('imgPair').src = get_image_pair
document.getElementById('urlPair').href = get_url_pair;

}
// get exchange with most open position

let maxOpen
function retrieve_exchange_byopen(data){
    let entry = Object.entries(data);
  
 
      let numOpenArray=[]
      for (let i = 0; i < entry.length; i++){
       numOpenArray.push(entry[i][1].open_interest_btc)
     
}
maxOpen = Math.max(...numOpenArray)
console.log(maxOpen)
let get_image_open="";
let get_name_open=[];
let get_url_open=""



for (let i = 0; i < entry.length; i++) {
  if (entry[i][1].open_interest_btc === maxOpen){
 
    get_name_open=entry[i][1].name
    get_image_open=entry[i][1].image
    get_url_open=entry[i][1].url
    
    
  }
}
document.getElementById('nameOpen').innerHTML=`${get_name_open}`

document.getElementById('imgOpen').src = get_image_open
document.getElementById('urlOpen').href = get_url_open;

}