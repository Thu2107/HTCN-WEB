
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [
    {
        "name":" Nike Solo Swoosh",
        "price": 100,
        "image": "../image/1.webp"
    },
    {
        "name":" Nike Dri-FIT Running Division",
        "price": 105,
        "image": "../image/2.webp"
    },
    {
        "name":" Nike Sportswear Premium ",
        "price": 209,
        "image": "../image/3.webp"
    },
    {

        "name":" Jordan Essentials",
        "price": 200,
        "image": "../image/4.webp"
    },
    {
        "name":" Nike Essentials Premium",
        "price": 300,
        "image": "../image/5.webp"
    },
    {
        "name":"Jordan Essentials Premium",
        "price": 200,
        "image": "../image/6.webp"
    },
    {
        "name":" Jordan Essentials",
        "price": 200,
        "image": "../image/7.webp"
    },
    {
        "name":" Jordan Nike v1",
        "price": 400,
        "image": "../image/1.webp"
    },
    {
        "name":" Nike Champion Essentials",
        "price": 205,
        "image": "../image/2.webp"
    },
    {
        "name":" Jordan Essentials v1",
        "price": 250,
        "image": "../image/8.webp"
    },
    {
        "name":" Nike Jordan Sportswear",
        "price": 210,
        "image": "../image/7.webp"
    },
    {
        "name":" Nike Champion Essentials",
        "price": 230,
        "image": "../image/6.webp"
    },
    {
        "name":" Nike Champion Primeum",
        "price": 265,
        "image": "../image/5.webp"
    },
    {
        "name":" Jordan Essentials",
        "price": 205,
        "image": "../image/4.webp"
    },
    {
        "name":" Nike Jordan Sportswear ",
        "price": 262,
        "image": "../image/3.webp"
    },
    {
        "name":" Nike Sportswear Premium ",
        "price": 183,
        "image": "../image/2.webp"
    }

];
let cart = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    //chuyển sang trang thanh toán
    function pay(){
    window.location.href = "../html/pay.html";
    }
    initApp();

