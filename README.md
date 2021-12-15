<<<<<<< HEAD
=======





   
# Interactive Web Application Project

## Context
This project includes writing custom HTML5, CSS3, Vanila JavaScript code to create a webpage that serve the following purpose: 
* Help the Crypto investors to decide which platform to trade crypto & relevant derivatives. 
* Display the purchasing power 
* Allow users to read and interact with the data chart/table to choose which crypto, which currency they want to pull out the information

User's goal: To see the location and current occupancy rate of the nearest gym based on their current position.

Site owner's goal: To showcase proficiency and practice the web development knowledge 

## Access
Url to live site: https://yeyehandsome1984.github.io/Cryptosite/




# Defining the Project
The purpose of this website is to aid the investors in the process of deciding when where and how to trade the Cryptos. 

with the scam, hacking cases plaguing the cryptco trading platform, it is important for investors to choose the right platform. By providing with the key info for the major platforms, it will help users decide when and which platform to trade to visit. The site has also featured recommended site based on key parameters.

Crypcos are very volatile, the timing to invest is very crucial to investors. 

# Strategy
## Identifying External Users
With the primary purpose mentioned above, the website's primary users should be Crypto investors/traders enthusiast. 

## Identifying External Users' Goals
The users' goal here is to get the necessary information they want to make a decision. 

Therefore, the interface should be simple to understand and easy to interact with.  

```
EUG01. See the detail of mainstream platform and crypto
EUG02. Find out which Platform and Crypto to trade with

```

## Identifying Users Pain Point
Crypto investment 
``` 
UPP01. Want to minimize the counterparty/platform risk 
UPP02. Not sure how much to put in Crypto 
UPP03. Seek good trading opportunity in terms of right crypto and right timing
``` 

## Identifying Site Owner's Goals
As a start of my journey to become a software developer. My goal as the site owner is to showcase my proficiency in HTML5/CSS3/Vanila JavaScript. And potentially build up a site could help the investors, including myself. 



## Content Requirement
### Mandatory Requirement
The list below contains the mandatory requirement for the site to meet all of the users goals (EUG01-05).

```
CRM01. Interactive form 
CRM02. Currency converter  (EUG02)
CRM03. Platform info (To auto provide recommendation) (EUG02)
CRM04. Information Table. (day high, day low, volume, spot price etc) (EUG03)
CRM05. Price, market cap, trading volume movement (Dynamic Dataset that updates with time) (EUG03) (EUG04)
CRM06. Interactive Chart. (EUG04)
```

### Optional Requirement
The list below are optional requirements that can be implemented to enhance the site's feature. 

They may not be implemented due to various reasons. (Eg, Time, access to system/domains)

```
CRO01. Apply a combination of parameters to make recommendation of platforms
CRO02. Apply technical indicator to the chart to help more seasoned investors
CRO03. Add real trading capacity 
``` 

# Structure
## Content Information
Information that are required to fulfil the mandatory content requirement.




### Information required on the chart
```
1） Market Cap
2） Day high/ Day low
3） Trading volume 
4)  Historical Price
 

```

## Content Structure
The content structure of this page will follow a **LINEAR STRUCTURE**.

Home Page > CryptoChartPage


1. Home Page:
    * The page will only have one section that contains the exchange selection session, currency conversion session, contact me session ,nav bar and footer. 
    *  Exchange/platform selection session contains 
        1）featured platform (automatically by iterating over the API)
        2) platform info, which the user can have the option in a drop down menu to select the platform they want to view

    *  Currency conversion Session
        1）users can select the currency pair to convert currency into each other 
        2) users can enter either fiat currency or other crypto and key in the amount to convert into BTC equivalent
     
            
    * Nav bar will contain the following. 
        1) A button link to CryptoChart page
        2) A button link to Exchange session
        3) A button link to Forex conversion session
        4) A button link to contact me and live crypto price part  

2. Crypto Chart Page: 
    * The page will present data through Line Chart, Pie Chart and a data table.
    * Using dropdown menu to include options for users to interact with. 
    * Display Live day high, low, spot price data of the selected Crypto Coin in a table


# Skeleton
## Interface Design
Each Page will adopt a different layout to fulfil the content information required.

## Home Page
This page will focus on the map function and interaction with the map. 

Nav bar is intentionally placed at the bottom of the page so that mobile users can access them easily. 

The nav bar will move to the top when it is on desktop/laptop view. 



## Crypto Chart page
This page will focus on providing chart and table 
There is a button at the top to navigate back to home page.




## Home Page


### Nav bar
* Logo
* Navigation to Home Page


### Dropdown menu
* Select Crypto
* Select Currency

### Live Crypto
* Market cap 
* spot, high, low
* trading volume 
* Exchange rate


### LineChart
* cryptco Price, market trading volume, market cap history

### PieChart  
* Market Cap 

### Table 
* Price, volume, supply, cap, %24h movement, price etc


## Navigation
Navigation between and within sites can be done by using the nav bar provided. 

In Home Page, the nav bar will be at the top for laptop and desktop view. For mobile and tablet view, the nav bar will be 愛at the left side. 

On the CryptoChart Page, you can navigate back to the Home Page using the button at the top of page

# Surface
## Color
White and Yellow are the main colours applied. I intend to apply softer colour to calm down the users who is likely to be exciting and nervous in preparing the volatile crypto trading.


## Features

## Content
The webpage contains the necessary information the user needs. Compiled and tabulated in a simple and easy to read manner.

The navbar is available for user to go to different part of the project

## Responsiveness
The webpage is responsive across various devices from desktop and laptop to phones and tablets. The component will automatically re-arrange itself based on the screen size.


# Testing
## Functionality Test
## Home Page
|Category |Input/Actions | Output/Errors |
|---------|-----------------------------|---------------------|
|Overall | Mobile Responsive Check| No display error|
|Platform recommendation| On load | Display name, website link, logo of recommended platform. |
|Platform selection | Choose the platform by using the option| Display information in the table. Dropdown menu value will update|
| | 
|Nav Bar|move between pages and within the page| 
| | Selecting "Show All" from dropdown | Map will zoom back to default viewset
| | Select currency | input the amount to convert into equivalent Bitcoin amount|
| | Clicking on location button| Prompt user to allow access of location|
Crypto price table| On load | Display logo, name and price, price movement shows color based on up (green) and down )(red). |
| | Currency conversion| the correct converted amount can appear based on the currency/crypto selected and the amount to be converted.
| | THe navbar and "readmore" session in sliding bar is able to link to crypto Chart page



## Crypto Chart Page
|Category |Input/Actions | Output/Errors |
|---------|-----------------------------|---------------------|
|Overall | Mobile Responsive Check| No display error|
|Page Function| On load | Live occupancy and Heatmap rendered based on default location in dropdown menu |
|Dropdown Menu | Selecting different Crypto| Three line chart will appear each represent price, volume and market cap|
| |Select different Crypto| Day high, day low, spot and logo will appear in the table|

|Nav Bar| Click on the top button| Brings user back to Home Page|


## Validating Markup
Two pages validated by validating service  
```
index.html - Document checking completed. No errors or warnings to show.
crytcojschart-html - Document checking completed. Option for frequency and currency not working yet in JSchart.
```

# Deployment
Ensured all changes has been save and pushed to GitHub.

CryptoYY is deployed to Github. All icons and images used in the project are stored together.

Data sets are live and are called automatically. 

If you would like to deploy or fork this application you can visit https://yeyehandsome1984.github.io/Cryptosite/. 

# Technologies
In this application HTML5 is used to structure the content, CSS3 for styling and Vanila JavaScript to process data. VS code is used as coding platform. 

By using Bootstrap 4, mobile responsive design is made easier with the row-col system, bootstrap has also been applied for table, forms, navbar, footer and button. 

To demonstrate proficiency, I have used CSS to create simple transform, mobile responsive codes with media query and flexbox.

Several other tools that played a role in this application:

for data,



For styling,
* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

for Icon
* [AwesomeFont](https://getbootstrap.com/docs/4.0/getting-started/introduction/)) 

For deployment,
* [Github](https://github.com/)

For graph,
* [JSChart](https://www.chartjs.org/)

For removing photo background,
* [Remove](https://www.remove.bg//)



# References
For API References,


* [Crypto live price](wss://stream.binance.com:9443/ws/etheur@trade)
* [Forex conversion among Fiat currencies](https://api.frankfurter.app/currencies)
* [Crypto market cap data ](https://api.coingecko.com/api/v3/global)
* [Other Crypto into bitcoin](https://api.coingecko.com/api/v3/exchange_rates)
* [Crypto Exchange/Platform data](https://api.coingecko.com/api/v3/exchanges)
* [individual Crypto data](https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=jpy&days=1800&interval=weekly)
*

# Acknowledgments
* Mr Paul Chor - For the great lessons conducted
* Mr Ace Liang - For providing precious clues for me to solve various technical problems
* My Son - For keep disturbing me during my lesson and project but I still love him


