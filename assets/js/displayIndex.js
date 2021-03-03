let carousel_indicators = document.querySelector('.carousel-indicators');
let carousel_inner = document.querySelector('.carousel-inner');
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let img5 = document.querySelector('.img5')
let img6 = document.querySelector('.img6')
let img7 = document.querySelector('.img7')
let img8 = document.querySelector('.img8')
let img9 = document.querySelector('.img9')
let img10 = document.querySelector('.img10')
let img11 = document.querySelector('.img11')
let img12 = document.querySelector('.img12')
let viewall = document.querySelector('.viewall');

import * as getFromDB from './dataBaseInteraction.js';
let images = []
let rowImages = []

setTimeout(() => {
    images = getFromDB.fetch_img(4)
}, 500);

setTimeout(() => {
    fillImages()
}, 800);

setTimeout(() => {
    rowImages = getFromDB.fetch_imgBydep()
}, 800);

setTimeout(() => {
    fillRows()
}, 1000);


function fillImages(){

    let outputimg = '';
    let slides = '';
    let url = '';
    let slideCounter=0;
   for(let i=0;i<4;i++){

    url = images[i];
        
    slides += `<li data-bs-target="#carousel" data-bs-slide-to="${slideCounter}"></li>`
    

    if(slideCounter == 0){

        outputimg += `<div class="carousel-item active">
        <img class="d-block img-fluid" src="${url}" alt=" ">
        </div>`
    }

    else{

        outputimg += `<div class="carousel-item">
        <img class="d-block img-fluid" src="${url}" alt=" ">
        </div>`
    }

    slideCounter+=1;
   }

   carousel_indicators.innerHTML = slides
   carousel_inner.innerHTML = outputimg
 
}

function fillRows(){
    console.log(rowImages)
    img1.src = rowImages[0][0]
    img2.src = rowImages[0][1]
    img3.src = rowImages[0][2]
    img4.src = rowImages[0][3]
    img5.src = rowImages[0][4]
    img6.src = rowImages[0][5]
    img7.src = rowImages[0][6]
    img8.src = rowImages[0][7]
    img9.src = rowImages[0][8]
    img10.src = rowImages[0][9]
    img11.src = rowImages[0][10]
    img12.src = rowImages[0][11]
}

