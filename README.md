<<<<<<< HEAD
=======

 
@yeyehandsome1984 

/
livefitt
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
livefitt/readme.md
@yongsannnn
yongsannnn Updated style.css; nav bar to top when desktop view. readme v1.10
Latest commit 687f09a on Feb 22
 History
 1 contributor
383 lines (280 sloc)  14.7 KB
   
# Interactive Web Application Project

# **LiveFITT.beta**
## Context
This project includes writing custom HTML5, CSS3, Vanila JavaScript code to create a webpage that serve the following purpose: 
* Help the Crypto investors to decide which platform to trade crypto & relevant derivatives. 
* Display the purchasing power 
* Allow users to read and interact with the data chart/table to choose which crypto, which currency they want to pull out the information

User's goal: To see the location and current occupancy rate of the nearest gym based on their current position.

Site owner's goal: To showcase proficiency in the mentioned programming language.

## Access
Url to live site: https://yeyehandsome1984.github.io/Cryptosite/

![Display sample on different devices upon loading](images/display-sample.PNG)


# Defining the Project
The purpose of this website is to aid the investors in the process of deciding when where and how to trade the Cryptos. 

with the scam, hacking cases plaguing the cryptco trading platform, it is important for investors to choose the right platform. By providing with the key info for the major platforms, it will help users decide when and which platform to trade to visit. The site has also featured recommended site based on key parameters.

Cryptcos are very volatile, the timing to invest is very crucial to investors. 

# Strategy
## Identifying External Users
With the primary purpose mentioned above, the website's primary users should be Crypto investors/traders enthusiast. 

## Identifying External Users' Goals
The users' goal here is to get the necessary information they want to make a decision. 

Therefore, the interface should be simple to understand and easy to interact with.  

```
EUG01. See all location of the gyms.
EUG02. Find out which gym is closest from their current location.
EUG03. See key information of the selected outlet. Such as, opening hours, address and occupancy rate
EUG04. Interact with the chart to filter/compare outlet past weekly data and live occupancy rate. 
EUG05. To decided which gym to visit at specific timing.
```

## Identifying Users Pain Point
With the pax restrictions imposed to businesses due to health and safety protocol. Users find themselves with the following pain points. 

``` 
UPP01. Do not want to visit a gym that is fully occupied. 
UPP02. Wants to visit the gym but don't know where is the nearest outlet. 
UPP03. Wants to plan for future trip but do not know how occupied it is during various time and day. 
``` 

## Identifying Site Owner's Goals
As a start of my journey to become a software developer. My goal as the site owner is to showcase my proficiency in HTML5/CSS3/Vanila JavaScript.

```
SOG1. Showcase my proficiency in HTML5/CSS3/Vanila JavaScript.
SOG2. Provide a platform to solve users pain point 
```

## User stories
```
US01. As a user, I want to look at all the outlets, so that I know where are they located.
US02. As a user, I want to know which outlet is closest to me, so that I avoid travelling too far. 
US03. As a user, I want to see the details of the outlet chosen, so that I contact/travel to the gym.
US04. As a user, I want to know how filled the gym is now, so that I know if I should visit it now.
US05. As a user, I want to know the past occupancy data, so that I can plan my future trip. 
```

# Scope
## Functional Requirement
```
FR01. Intreactive map to satisfy user need.
FR02. User can enable his location and use it and find the nearest outlet. 
FR03. User should be able to interact with the chart to filter/compare different outlet's past & live occupancy.
FR05. Live data of the occupancy rate should be updating without the need of the user to trigger a refresh. 
FR06. Use advance CSS/JavaScript to showcase proficiency.
FR07. Mobile responsive to decides such as Phone, Tablet and Laptop.
FR08. Navigational bar to toggle between pages. 
``` 

## Non-Functional Requirement
```
NFR01. Ensure readability.
NFR02. For security purpose, location of users should not be stored.
```

## Content Requirement
### Mandatory Requirement
The list below contains the mandatory requirement for the site to meet all of the users goals (EUG01-05).

```
CRM01. Interactive Map. (EUG01)
CRM02. Location finder. (EUG02)
CRM03. Distance calculator. (To calculate nearest points) (EUG02)
CRM04. Information Table. (Static Dataset such as Address, Postal Code, Tel Number) (EUG03)
CRM05. Occupancy Rate Table. (Dynamic Dataset that updates with time) (EUG03) (EUG04)
CRM06. Interactive Chart. (EUG04)
```

### Optional Requirement
The list below are optional requirements that can be implemented to enhance the site's feature. 

They may not be implemented due to various reasons. (Eg, authorisation, access to system/domains)

```
CRO01. Book/Reserve slots with the gym.
CRO02. View the avaiability of various classes in each gym.
CRO03. Make payment using CC/ActiveSG Credits. 
``` 

# Structure
## Content Information
Information that are required to fulfil the mandatory content requirement.

Some information will be shared across different pages.

### Information required on the interactive map
```
SCI01. Objective of the project.
SCI02. How to use.
SCI03. Name of the location.
SCI04. Live Occupancy Rate.
SCI05. Postal Code.
SCI06. Telephone Number.
SCI07. Address.
SCI08. Opening Hours.
SCI09. Location of the user.
SCI10. Legend.
```

### Information required on the chart
```
SCI11. Description.
SCI12. Past weekly data.
```

### Image required
```
SCI13. Custom pins to denote occupancy rate.
SCI14. Custom pin to denote current location when enabled.
SCI15. Buttons to represent and navigate to relevant content. 
```


## Content Structure
The content structure of this page will follow a **LINEAR STRUCTURE**.

Home Page > Gym Tracker Page

![Content Structure Image](images/content-structure.png)
1. Home Page:
    * The page will only have one section that contains the map and an overlay of nav bar. 
    * Map will show the overview of the entire singapore with location of all outlets being pinned.
    * Nav bar will contain the following. 
        1) Dropdown menu that has all the available outlets. 
        2) A button to link to Gym Tracker Page.
        3) A button to get the location of the user and show the nearest outlet. 
        4) An information button that explains the site objective, usage and legend. 
    * The page should allow the users to interpret the occupancy without amy actions. 

2. Crypto Chart Page: 
    * The page will present data through Line Chart, Pie Chart and a data table.
    * Using dropdown menu to include options for users to interact with. 
    * Display Live day high, low, spot price data of the selected Crypto Coin.


# Skeleton
## Interface Design
Each Page will adopt a different layout to fulfil the content information required.

## Home Page
This page will focus on the map function and interaction with the map. 

Nav bar is intentionally placed at the bottom of the page so that mobile users can access them easily. 

The nav bar will move to the top when it is on desktop/laptop view. 

![Skeleton Design for Home Page](images/skeleton-home.png)

## Gym Tracker Page
This page will focus on the heatmap and filtering function. Upon interaction it will display the data in an neat and orderly manner.

Nav bar is presented at the top to navigate between pages.

![Skeleton Design for Gym Tracker Page](images/skeleton-tracker.png)

## Site Map

![Site Map](images/site-map-alt.png)

## Home Page

### Map
* SCI03. Name of the location
* SCI04. Live Occupancy Rate
* SCI05. Postal Code
* SCI06. Telephone Number
* SCI07. Address
* SCI08. Opening Hours
* SCI09. Location of the user

### Nav bar
* SCI01. Objective of the project
* SCI02. How to use
* SCI10. Legend
* CRM02. Location finder 
* Navigation to Gym Tracker Page


### Nav bar
* Logo
* Navigation to Home Page




### Dropdown menu
* Select Crypto
* Select Currency

### Live Occupancy Data
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
Navigation between sites can be done by using the nav bar provided. 

In Home Page, the nav bar will be at the top for laptop and desktop view. For mobile and tablet view, the nav bar will be at the bottom. 

To navigate to Gym Tracker Page you have to press on the button represented by the graph image. 

On the Gym Tracker Page, you can navigate back to the Home Page using the top nav bar.

# Surface
## Color
White and Yellow are the main colours applied. I intend to apply softer colour to calm down the users who is likely to be exciting and nervous in preparing the volatile crypto trading.
## Fonts
[Nunito](https://fonts.google.com/specimen/Nunito?query=nun&preview.text_type=custom) font are used for title as it is a well balanced sans serif typeface superfamily. Lightly bolded highlights the title and paragraphs. 

[Roboto](https://fonts.google.com/specimen/Roboto?query=roboto&preview.text_type=custom#glyphs) font are used to inherit all of the body text in the webpage. 

The font features friendly and open curves. It allow letters to be settled into their natural width. 

This makes for a more natural reading rhythm which are commonly found in humanist and serif font types.

## Features

## Content
The webpage contains the neccessary information the user needs. Compiled and tabulated in a simple and easy to read manner.

The navbar is available for user to go to different part of the project

## Responsiveness
The webpage is responsive across various devices from desktop and laptop to phones and tablets. The component will automatically re-arrange itself based on the screen size.







# Testing
## Functionality Test
## Home Page
|Category |Input/Actions | Output/Errors |
|---------|-----------------------------|---------------------|
|Overall | Mobile Responsive Check| No display error|
|Map Function| On load | Display all location with pins. Color is based on occupancy.(Red,Yellow,Green)|
| | Clicking on location pin| Display key information SCI03 to SCI08. Dropdown menu value will update|
| | Zooming in and out on various device| No display error|
|Nav Bar| Selecting gym from dropdown menu| Zoom to specific gym|
| | Selecting "Show All" from dropdown | Map will zoom back to default viewset
| | Clicking on graph button| Navigate to Gym Tracker Page|
| | Clicking on location button| Prompt user to allow access of location|
| | Allow access of location| Map plots a new marker with the current location of user and zoom to nearest gym location|
| | Clicking on new marker | Display a popup stating you are here|
| | Deny access of location | No output expected when user deny access|
| | Clicking on information button| Popup box containing SCI01/SCI02/SCI10 will appear|

## Gym Tracker Page
|Category |Input/Actions | Output/Errors |
|---------|-----------------------------|---------------------|
|Overall | Mobile Responsive Check| No display error|
|Page Function| On load | Live occupancy and Heatmap rendered based on default location in dropdown menu |
|Dropdown Menu | Selecting different outlets| Heatmap will render weekly data and current occupancy rate will be shown|
| | Selecting different time| Heatmap will render selected timing|
|Heatmap| Hovering/Pressing on individual box| Show a number between 0-100|
| | Clicking on Collapse button | Download SVG/PNG/CSV will appear|
| | Selecting Download SVG| SVG file will be saved to local device|
| | Selecting Download PNG| PNG file will be saved to local device|
| | Selecting Download CSV| CSV file will be saved to local device|
|Nav Bar| Clicking on Logo| Brings user back to Home Page|
| | Clicking on .MAP| Brings user back to Home Page|
| | Clicking on .TRACKER | Refreshes the Gym Tracker Page|

## Validating Markup
Two pages validated by validating service  [W3C Markup Validator](https://validator.w3.org/).
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

To demostrate proficiency, I have used CSS to create simple transform, mobile responsive codes with media query and flexbox.

Several other tools that played a role in this application:

For API,
* [Axios](https://github.com/axios/axios)


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
* Mr Paul Chor - For all the countless suggestions and help
* Mr Shun - Introducing advance mapping and regex for data processing
* Mr Ace Liang - For providing clues for me to solve various technical problems
* My Son - For keep disturbing me during my lesson and project but I still love him
* Mr Alexander Yan - For giving me the confidence that this project will bring value
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
>>>>>>> f404801cbdf3ff3d70c15dd7971cd6434ae6b346
