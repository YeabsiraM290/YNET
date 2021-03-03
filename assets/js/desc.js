$(function(){
    $(".xzoom,.xzoom.gallery").xzoom({
        zoomWidth:500,
        tint:"#333",
        Xoffset:120,

    })

});


import * as getFromDB from './dataBaseInteraction.js';

let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');

let img1Link = document.querySelector('.img1Link');
let img2Link = document.querySelector('.img2Link');
let img3Link = document.querySelector('.img3Link');
let img4Link = document.querySelector('.img4Link');

let name = document.querySelector('.name');
let ppt = document.querySelector('.ppt');
let price = document.querySelector('.price');
let about_item = document.querySelector('.about_item');

let cartBtn = document.querySelector('.cartBtn');

let allItem = []

const urlParams = new URLSearchParams(window.location.search);
const id = String(urlParams.get('id'));
console.log(id)


setTimeout(() => {
    allItem = getFromDB.getSingleItem(id)
}, 700);

setTimeout(() => {
    viewItem()
}, 1000);


function viewItem(){
    
    img1.src = allItem[0][0]
    img2.src = allItem[1][0]
    img3.src = allItem[2][0]
    img4.src = allItem[3][0]

    img1Link.href = allItem[0][0]
    img2Link.href = allItem[1][0]
    img3Link.href = allItem[2][0]
    img4Link.href = allItem[3][0]

    name.innerHTML = allItem[4][0]
   // ppt.innerHTML = allItem[5][0]
    price.innerHTML = "Price: "+allItem[7][0]
    //about_item.innerHTML = allItem[8][0]
}


// Add to LocalStorage function declaration 
function addToDatabase(newitem)
{
   let listofCart;
   if(localStorage.getItem('cart') == null)
   {
    listofCart = [];
   }
   else
   {
    listofCart = JSON.parse(localStorage.getItem('cart'));
   }
   listofCart.push(newitem);
    localStorage.setItem('cart', JSON.stringify(listofCart));
}


function loadfromDB()
{
    let listofCart;
    if(localStorage.getItem('cart') == null)
    {
        false
    }
    else
    {
        listofCart = JSON.parse(localStorage.getItem('cart'));
        return listofCart; 
    }
   
}


cartBtn.addEventListener('click',addToCart)
function addToCart(){
        addToDatabase(allItem)
        alert("Added to cart")
}
