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

function userInfoValidation(e){

    e.preventDefault();


            let allGood = 0;
            let vendor_usernamelen = helpers.checkLength(vendor_username.value,4);
            let vendor_emaillen = helpers.ValidateEmail(vendor_email.value);
            let vendor_passwordlen = helpers.checkLength(vendor_confirmpass.value,8);
            let vendor_confirmpasslen = helpers.comparePass(vendor_password.value, vendor_confirmpass.value); 
            let vendor_phonenolen = helpers.validatePhoneNumber(vendor_phoneno.value);
            let vendor_securitynolen = helpers.checkLength(vendor_securityno.value,6);
            let vendor_latlen = helpers.checkLength(vendor_lat.value,1);
            let vendor_companynamelen = helpers.checkLength(vendor_companyname.value,4);
            let vendor_longlen = helpers.checkLength(vendor_long.value,1); 
            let vendor_dislen = helpers.checkLength(vendor_dis.value, 30); 

            
            if(!vendor_usernamelen){

                vendor_username.style.borderWidth = "1px";
                vendor_username.style.borderColor = "red";
                vendor_username.value = "";
                vendor_username.placeholder = "Username cannot be less than 4 chracters";
                allGood=1;
            }

                            
            if(!vendor_companynamelen){

                vendor_companyname.style.borderWidth = "1px";
                vendor_companyname.style.borderColor = "red";
                vendor_companyname.value = "";
                vendor_companyname.placeholder = "company name cannot be less than 4 chracters";
                allGood=1;
            }

            if(!vendor_passwordlen){

                vendor_password.style.borderWidth = "1px";
                vendor_password.style.borderColor = "red";
                vendor_password.value = "";
                vendor_password.placeholder = "Password cannot be less than 8 chracters";
                allGood=1;
            }

            if(!vendor_securitynolen){

                vendor_securityno.style.borderWidth = "1px";
                vendor_securityno.style.borderColor = "red";
                vendor_securityno.value = "";
                vendor_securityno.placeholder = "Social securtiy number cannot be less than 6 chracters";
                allGood=1;
            }

            if(!vendor_latlen){

                vendor_lat.style.borderWidth = "1px";
                vendor_lat.style.borderColor = "red";
                vendor_lat.value = "";
                vendor_lat.placeholder = "Latitude cannot be empty";
                allGood=1;
            }

            
            if(!vendor_longlen){

                vendor_long.style.borderWidth = "1px";
                vendor_long.style.borderColor = "red";
                vendor_long.value = "";
                vendor_long.placeholder = "Longitude cannot be empty";
                allGood=1;
            }

            if(!vendor_dislen){

                vendor_dis.style.borderWidth = "1px";
                vendor_dis.style.borderColor = "red";
                vendor_dis.placeholder = "Too short and some more";
                allGood=1;
            }

            if(!vendor_emaillen){
                
                vendor_email.style.borderWidth = "1px";
                vendor_email.style.borderColor = "red";
                vendor_email.value = "";
                vendor_email.placeholder = "Enter valid email address";
                allGood=1;
            }

            if(!vendor_phonenolen){
                
                vendor_phoneno.style.borderWidth = "1px";
                vendor_phoneno.style.borderColor = "red";
                vendor_phoneno.value = "";
                vendor_phoneno.placeholder = "Enter valid phone number address";
                allGood=1;
            }

            if(!vendor_confirmpasslen){

                vendor_confirmpass.style.borderWidth = "1px";
                vendor_confirmpass.style.borderColor = "red";
                vendor_confirmpass.value = "";
                vendor_confirmpass.placeholder = "Password didnt match";
                allGood=1;
            }

            if(allGood==0){

                let vusername = vendor_username.value;
                let vpassword = vendor_password.value;
                let vemail = vendor_email.value;
                let vphoneno = vendor_phoneno.value;
                let vsocialno = vendor_securityno.value;
                let vlocation = vendor_lat.value + vendor_long.value;
                let vdisc = vendor_dis.value;
                let vcname = vendor_companyname.value;
            
                addtoDB.addNewseller(vusername, vpassword, vemail,vphoneno,vsocialno,vlocation,vdisc,vcname,plan);
                addtoDB.addTologin(vusername, vpassword, vemail, "seller");
            
            }

}