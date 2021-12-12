 //fetch data
 let xhReq = new XMLHttpRequest ();
 xhReq.open ('get', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd' , false );
 xhReq.send (null);
 let data =JSON.parse(xhReq.responseText)
 console.log(data);
 
 let cryptocurrencies;
 let timerID;
 let updateInterval=2000; 
 
 function descending (a,b){ return a.price_change_percentage_24h<b.price_change_percentage_24h?1:-1;}
 function ascending (a,b){ return a.price_change_percentage_24h>b.price_change_percentage_24h?1:-1;}
 function reposition (){
     let height =$('#cryptocurrencies .cryptocurrency').height();
     let y=height;
     for (let i=0; i<cryptocurrencies.length; i++){
         cryptocurrencies[i].$item.css("top", y+"px")
         y+=height;
      }
  }
  function updateRanks (cryptocurrencies){
      for (let i=0; i<cryptocurrencies.length; i++) {
          cryptocurrencies[i].$item.find(".rank").text(i+1)
      }
  } 
  
  function getRandomScoreIncrease(){
      return getRandomBetween(10,20)
  }
  
  
  function getRandomBetween (min, max){
      return Math.floor(Math.random*max)+min;
  }
  function getNewData(){
      //get the new data for each coin and change the new 
      
      cryptocurrencies.sort(descending);
      updateRanks(cryptocurrencies);
      reposition();
      
  }
  
  function resetBoard(){
      
      let $list=$("#cryptocurrencies");
      $list.find(".cryptocurrency").remove();
      if (timerID !==undefined){
          clearInterval(timerID);
      }
      
      cryptocurrencies=[];
      for (let i =0; i<10; i++){
          cryptocurrencies.push({
              name: data[i].name,
              symbol: data[i].symbol,
              price: (data[i].current_price).toFixed(2),
              market_cap:(data[i].market_cap/1000000).toFixed(0),
              circulating_supply:(data[i].circulating_supply/1000000).toFixed(0),
              total_volume:(data[i].total_volume/1000000).toFixed(0),
              price_change_percentage_24h:(data[i].price_change_percentage_24h).toFixed(2),
              day_high:(data[i].high_24h).toFixed(2),
              day_low:(data[i].low_24h).toFixed(2)  
          })
          
      }
      for (let i=0; i<cryptocurrencies.length; i++){
          let $item=$(
              "<tr class='cryptocurrency'>"+
                  "<th class='rank'>" + (i+1)+"</th>"+
                  "<td class='name'>"+cryptocurrencies[i].name+"</td>"+
                  "<td class='symbol'>"+cryptocurrencies[i].symbol+"</td>"+
                  "<td class='price'>"+cryptocurrencies[i].price+"</td>"+
                  "<td class='market_cap'>"+cryptocurrencies[i].market_cap+"</td>"+
                  "<td class='circulating_supply'>"+cryptocurrencies[i].circulating_supply+"</td>"+
                  "<td class='volume'>"+cryptocurrencies[i].total_volume+"</td>"+
                  "<td class='percentage_change'>"+cryptocurrencies[i].price_change_percentage_24h+"</td>"+
                  "<td class='day_high'>"+cryptocurrencies[i].day_high+"</td>"+
                  "<td class='day_low'>"+cryptocurrencies[i].day_low+"</td>"+ 
                  "</tr>"
                  
                  );
                  cryptocurrencies[i].$item=$item;
                  $list.append($item);
              }
              
              //fetch new data for every update interval
              timerID=setInterval("getNewData();", updateInterval )
          }
          resetBoard();
          
          
          