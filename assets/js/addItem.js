//inputs and buttons newProduct page
let item_name = document.querySelector('.item-name');
let item_department = document.querySelector('.item-department');
let item_quantity = document.querySelector('.item-quantity');
let item_price = document.querySelector('.item-price');
let item_dis = document.querySelector('.item-dis');
let item_ppts = document.querySelector('.item-ppts');
let item_img1 = document.querySelector('.itemimg1');
let item_img2 = document.querySelector('.itemimg2');
let item_img3 = document.querySelector('.itemimg3');
let item_img4 = document.querySelector('.itemimg4');
let item_add = document.querySelector('.item-add');

import * as addtoDb from './dataBaseInteraction.js';
import * as helpers from './helper.js';


    if(item_add){item_add.addEventListener('click', newItemValidate)}

    function newItemValidate(e){
        e.preventDefault();
            
            let item_nameLen = helpers.checkLength(item_name.value, 3); 
            let item_disLen = helpers.checkLength(item_dis.value,50);
            let item_pptsLen = helpers.checkLength(item_ppts.value,30);
            let item_quantityLen = helpers.checkSign(item_quantity.value);
            let item_priceLen = helpers.checkSign(item_price.value);
            let item_img1Address = item_img1.value
            let item_img2Address  = " "
            let item_img3Address  = " " 
            let item_img4Address  = " "

            if(item_img2){
                item_img2Address = item_img2.value
            }

            if(item_img3){
                item_img3Address = item_img3.value
            }

            if(item_img4){
                item_img4Address = item_img4.value
            }
            
      
            let allG = 0;
    
            if(!item_nameLen){
    
                item_name.style.borderWidth = "1px";
                item_name.style.borderColor = "red";
                item_name.value = "";
                item_name.placeholder = "Name cannot be less than 3 chracters";
                allG=1;
            }
    
            if(!item_disLen){
    
                item_dis.style.borderWidth = "1px";
                item_dis.style.borderColor = "red";
                item_dis.placeholder = "Give more discription";
                allG=1;
            }
    
            if(!item_pptsLen){
    
                item_ppts.style.borderWidth = "1px";
                item_ppts.style.borderColor = "red";
                item_ppts.placeholder = "Add some more";
                allG=1;
            }
    
            if(!item_quantityLen){
    
                item_quantity.style.borderWidth = "1px";
                item_quantity.style.borderColor = "red";
                item_quantity.placeholder = "Enter valid number";
                allG=1;
            }
    
            if(!item_priceLen){
    
                item_price.style.borderWidth = "1px";
                item_price.style.borderColor = "red";
                item_price.placeholder = "Enter valid price";
                allG=1;
            }

            if(!item_img1Address){
    
                item_img1.style.borderWidth = "1px";
                item_img1.style.borderColor = "red";
                item_img1.placeholder = "You have to enetr at least one image";
                allG=1;
            }
    
    
            if(allG==0){

                let dis = item_dis.value;
                let ppt = item_ppts.value
                let pric = item_price.value
                let iname = item_name.value
                let qun = item_quantity.value
                let dep = item_department.value
    
                addtoDb.addNewItem(dis,sessionStorage.getItem('username'),ppt,pric,iname,item_img1Address,item_img2Address,item_img3Address,item_img4Address, qun,qun,dep,"0")
                item_name.style.borderColor = "#dde1e5";
                item_dis.style.borderColor ="#dde1e5";
                item_ppts.style.borderColor = "#dde1e5";
                item_quantity.style.borderColor = "#dde1e5";
                item_price.style.borderColor = "#dde1e5";
                item_img1.style.borderColor = "#dde1e5";
                item_name.value = "";
                item_quantity.value = "";
                item_price.value = "";
                item_dis.value = "";
                item_ppts.value = "";
                item_img1.value = " ";
                item_img2.value = " ";
                item_img3.value = " ";
                item_img4.value = " ";
                alert("Item added succsefuly")
            }
         
    }
    
