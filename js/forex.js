const currencySelect1 = document.getElementById("currency1");
const currencySelect2 = document.getElementById("currency2");
      const btnCurrencyConvert = document.getElementById("btn_currency_convert");
      const num = document.getElementById("num");
      const ans = document.getElementById("ans");
      const btcSelect = document.getElementById("btcSelect");
      const btcBtn = document.getElementById("btcBtn");
      const btcNum = document.getElementById("btcNum");
      let btcAns = document.getElementById("btcAns");
     

      // Currency Converter Session
      // fetch data for exchange rate
      fetch("https://api.frankfurter.app/currencies")
        .then((data) => data.json())
        .then((data) => {
          display(data);
          console.log(data);
        });

      function display(data) {
        const entries = Object.entries(data);
        for (let i = 0; i < entries.length; i++) {
          currencySelect1.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
          currencySelect2.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        }
      }

      btnCurrencyConvert.addEventListener("click", () => {
        let currency1 = currencySelect1.value;
        let currency2 = currencySelect2.value;
        let value = num.value;

        if (currency1 != currency2) {
          convert(currency1, currency2, value);
        } else {
          alert("Choose different Currency");
        }
      });

      function convert(currency1, currency2, value) {
        const endPoint = "api.frankfurter.app";
        fetch(
          `https://${endPoint}/latest?amount=${value}&from=${currency1}&to=${currency2}`
        )
          .then((val) => val.json())
          .then((val) => {
            console.log(Object.values(val.rates)[0]);
            ans.value = Object.values(val.rates)[0];
          });
      }

      
      // Bitcoin Converter Session


      async function getCoinRate() {
        let response = await fetch(
          "https://api.coingecko.com/api/v3/exchange_rates"
        );
        let btcdata = await response.json();
        console.log(btcdata);
        return btcdata;
      }

      getCoinRate().then((btcdata) => {
        display_btc(btcdata.rates);
      });

      function display_btc(btc) {
        const entry = Object.entries(btc);
        console.log(entry)
        for (let i = 0; i < entry.length; i++) {
          btcSelect.innerHTML += `<option value="${entry[i][1].name}">${entry[i][1].name}</option>`;
        }
      }

      function btcConvert(btc) {
        let btcSelected = btcSelect.options[btcSelect.selectedIndex].text;
        console.log(btcSelected);

        let btcNumber = btcNum.value;

        let btcValue ;
        const entryBtc = Object.entries(btc);
        console.log(entryBtc)
        for (let i = 0; i < entryBtc.length; i++) {
          if (entryBtc[i][1].name === btcSelected) {
            btcValue = entryBtc[i][1].value;
           
          }
        }

     
 

        if (btcSelected != "Bitcoin") {
          return (btcAns.value = (btcNumber / btcValue));
        } else {
          alert("Choose different Currency or cryptocurrency");
        }
      }

      btcBtn.addEventListener("click", () => {
        getCoinRate().then((btcdata) => {
          btcConvert(btcdata.rates);
        });
      });
 

