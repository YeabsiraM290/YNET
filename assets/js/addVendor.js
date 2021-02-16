//inputs and buttons vendorregister page

let plan_button = document.querySelectorAll('.planBtn');
let vendor_username = document.querySelector('.vendor-username');
let vendor_email = document.querySelector('.vendor-email');
let vendor_password = document.querySelector('.vendor-password');
let vendor_confirmpass = document.querySelector('.vendor-confirmpass');
let vendor_phoneno = document.querySelector('.vendor-phoneno');
let vendor_securityno = document.querySelector('.vendor-securityno');
let vendor_lat = document.querySelector('.vendor-lat');
let vendor_long = document.querySelector('.vendor-long');
let vendor_dis = document.querySelector('.vendor-dis');
let vendor_companyname = document.querySelector('.vendor-companyname');
let vendor_signup = document.querySelector('.vendor-signup');
let plan = 0;

import * as addtoDB from './dataBaseInteraction.js';
import * as helpers from './helper.js'

if(vendor_signup){ vendor_signup.addEventListener('click', userInfoValidation);}
if(plan_button){ 
    plan_button.forEach(element => {
        element.addEventListener('click', planChoosen);
}); }

function planChoosen(e){
    plan =  e.target.id;
}