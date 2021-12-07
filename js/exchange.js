

// codes for crypo exchange

const select = document.getElementById("exchangeSelect");

const country = document.getElementById("country");
const year = document.getElementById("incorpYear");
const creditRank = document.getElementById("creditRank");
const volume = document.getElementById("volume");
const url = document.getElementById("url");

const image = document.getElementById("image");
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
  console.log(entry[1][1]);
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
      get_volume = entry[i][1].trade_volume_24h_btc;
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

// choose the best exchange 
let bestRank=document.getElementById('bestRank')
let bestRankExchange=document.getElementById('bestRankExchange')
let exchangeLink =document.getElementById('rankSite')
let ranking=''

getBtcData().then((data) => {
    retrieve_exchange_byRank(data);
  });

function retrieve_exchange_byRank(data){
    let entry = Object.entries(data);
    console.log(entry);
    console.log(entry[2][1].trade_volume_24h_btc);
      // for (let i = 0; i < entry.length; i++){
      // ranking=  Math.min.apply(Math, entry.map(function(entry) { return entry[i][1].trust_score_rank; }))
      
      // console.log(ranking)
      let numArray=[]
      for (let i = 0; i < entry.length; i++){
       numArray.push(entry[i][1].trade_volume_24h_btc)
         return numArray
}}




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
    }
  }

  devCountry.innerHTML = `${get_country}`;
  devYear.innerHTML = `${get_year}`;
  futurePairNumber.innerHTML = `${get_futurePairNumber}`;
  perpetualPairNumber.innerHTML = `${get_perpetualPairNumber}`;
  devVolume.innerHTML = `${get_volume}`;
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