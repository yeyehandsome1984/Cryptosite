




//real-time coin data with color
//Ethereum price 
let ws =new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let etherPriceElement=document.getElementById('etherPrice')
let lastPriceEther=null
console.log(ws)

ws.onmessage=(event)=>{
    let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    etherPriceElement.innerText=price;
    etherPriceElement.style.color=!lastPriceEther|| lastPriceEther===price ?'black' : price>lastPriceEther? 'green':'red'
    lastPriceEther=price;
}

// Neo
let wsNeo =new WebSocket('wss://stream.binance.com:9443/ws/neousdt@trade');
let neoPriceElement=document.getElementById('neoPrice')
let lastPriceNeo=null



wsNeo.onmessage=(event)=>{
    let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    neoPriceElement.innerText=price;
    neoPriceElement.style.color=!lastPriceNeo|| lastPriceNeo===price ?'black' : price>lastPriceNeo? 'green':'red'
    lastPriceNeo=price;
}
// bitcoin

let wsBtc =new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcPriceElement=document.getElementById('btcPrice')
let lastPriceBtc=null



wsBtc.onmessage=(event)=>{
    let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    btcPriceElement.innerText=price;
    btcPriceElement.style.color=!lastPriceBtc|| lastPriceBtc===price ?'black' : price>lastPriceBtc? 'green':'red'
    lastPriceBtc=price;}
    
    // bitcoinCash
    
    let wsBch =new WebSocket('wss://stream.binance.com:9443/ws/bchusdt@trade');
    let bchPriceElement=document.getElementById('bchPrice')
    let lastPriceBch=null
    
    
    
    wsBch.onmessage=(event)=>{
    let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    bchPriceElement.innerText=price;
    bchPriceElement.style.color=!lastPriceBch|| lastPriceBch===price ?'black' : price>lastPriceBch? 'green':'red'
    lastPriceBtc=price;}
    
    
    // Litecoin
    
    let wsLtc =new WebSocket('wss://stream.binance.com:9443/ws/liteusdt@trade');
    let ltcPriceElement=document.getElementById('ltcPrice')
    let lastPriceLtc=null
    
    
    
wsLtc.onmessage=(event)=>{
    let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    ltcPriceElement.innerText=price;
    ltcPriceElement.style.color=!lastPriceLtc|| lastPriceLtc===price ?'black' : price>lastPriceLtc? 'green':'red'
    lastPriceLtc=price;}
    
    
    // XRP (RIPPLE)
    
    let wsXrp =new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
    let xrpPriceElement=document.getElementById('xrpPrice')
    let lastPriceXrp=null
    
    
    
wsXrp.onmessage=(event)=>{
    let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    xrpPriceElement.innerText=price;
    xrpPriceElement.style.color=!lastPriceXrp|| lastPriceXrp===price ?'black' : price>lastPriceXrp? 'green':'red'
    lastPriceXrp=price;}
    
    
    // XLM (Stella)
    
    let wsXlm =new WebSocket('wss://stream.binance.com:9443/ws/xlmusdt@trade');
    let xlmPriceElement=document.getElementById('xlmPrice')
    let lastPriceXlm=null
    
    
    
    wsXlm.onmessage=(event)=>{
        let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    xlmPriceElement.innerText=price;
    xlmPriceElement.style.color=!lastPriceXlm|| lastPriceXlm===price ?'black' : price>lastPriceXlm? 'green':'red'
    lastPriceXlm=price;}

    // IOT 
    
    let wsIot =new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
    let iotPriceElement=document.getElementById('iotPrice')
    let lastPriceIot=null
    
    
    
    wsIot.onmessage=(event)=>{
        let stockObject= JSON.parse(event.data);
    let price=parseFloat(stockObject.p).toFixed(2);
    iotPriceElement.innerText=price;
        iotPriceElement.style.color=!lastPriceIot|| lastPriceIot===price ?'black' : price>lastPriceIot? 'green':'red'
    lastPriceIot=price;}





    (function ($) {
        'use strict';
    
        var browserWindow = $(window);
    
        // :: 1.0 Preloader Active Code
        browserWindow.on('load', function () {
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        });
    
        // :: 2.0 Nav Active Code
        if ($.fn.classyNav) {
            $('#cryptosNav').classyNav();
        }
    
        // :: 3.0 Sliders Active Code
        if ($.fn.owlCarousel) {
            var welcomeSlide = $('.hero-slides');
            var aboutSlide = $('.about-slides');
    
            welcomeSlide.owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: true,
                navText: ['Prev', 'Next'],
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 1000
            });
    
            welcomeSlide.on('translate.owl.carousel', function () {
                var slideLayer = $("[data-animation]");
                slideLayer.each(function () {
                    var anim_name = $(this).data('animation');
                    $(this).removeClass('animated ' + anim_name).css('opacity', '0');
                });
            });
    
            welcomeSlide.on('translated.owl.carousel', function () {
                var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
                slideLayer.each(function () {
                    var anim_name = $(this).data('animation');
                    $(this).addClass('animated ' + anim_name).css('opacity', '1');
                });
            });
    
            $("[data-delay]").each(function () {
                var anim_del = $(this).data('delay');
                $(this).css('animation-delay', anim_del);
            });
    
            $("[data-duration]").each(function () {
                var anim_dur = $(this).data('duration');
                $(this).css('animation-duration', anim_dur);
            });
    
            aboutSlide.owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 1000
            });
    
            $('.megamenu-slides').owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: true,
                autoplay: true,
                autoplayTimeout: 2000,
                smartSpeed: 1000
            });
        }
    
        // :: 4.0 Gallery Active Code
        if ($.fn.magnificPopup) {
            $('.videobtn').magnificPopup({
                type: 'iframe'
            });
        }
    
        // :: 5.0 ScrollUp Active Code
        if ($.fn.scrollUp) {
            browserWindow.scrollUp({
                scrollSpeed: 1500,
                scrollText: '<i class="fa fa-angle-up"></i>'
            });
        }
    
        // :: 6.0 CouterUp Active Code
        if ($.fn.counterUp) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        }
    
        // :: 7.0 wow Active Code
        if (browserWindow.width() > 767) {
            new WOW().init();
        }
        
        // :: 8.0 prevent default a click
        $('a[href="#"]').click(function ($) {
            $.preventDefault()
        });
    
    })(jQuery);
    
    
    