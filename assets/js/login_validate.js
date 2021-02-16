
let loginBtn = document.querySelector('.loginBtn');
let loginemail = document.querySelector('.loginemail');
let loginpass = document.querySelector('.loginpass');
let loginSubtitle = document.querySelector('.loginSubtitle');
let loginModal = document.querySelector('#loginWindow');
let vendor_balance = document.querySelector('.vendor_balance');
let vendor_icon = document.querySelector('.vendorIcon');
let car_icon = document.querySelector('.cartIcon');
let profile = document.querySelector('.profile');
let balance = "";
let type = "";
let who = "";

import * as addtoDB from './dataBaseInteraction.js';


if(loginBtn){loginBtn.addEventListener('click', loginValidation);}

function loginValidation(e){

    let email = loginemail.value;
    let pass = loginpass.value;

    let transaction = addtoDB.DB.transaction(['login'], 'readwrite');
    let objectStore = transaction.objectStore('login');
    let request = objectStore.openCursor();

    request.onerror = function(event) {
        console.err("error fetching data");
    };

    request.onsuccess = function(event) {
    let cursor = event.target.result;

        if (cursor) {

            let uname = cursor.value.username;
            let ema = cursor.value.email;
            let pas = cursor.value.password;
            
            if(uname == email || ema == uname){

                if(pass == pas){

                    balance = cursor.value.balance;
                    //who = cursor.value.username;
                    
                    type = cursor.value.user_type
                    loginSubtitle.innerHTML = uname;

                    vendor_icon.className = "nav-item ml-5 vendorIcon"
                    car_icon.className = "nav-item ml-5 mt-2 cartIcon"
                    vendor_balance.innerHTML = `Balance<br>${balance}`
                    //loginModal.style.display = "none"
                    loginemail.style.border = "none";
                    loginpass.style.border = "none";

                    if(type == "buyer"){

                        profile.setAttribute("href", "buyerProfile.html");
                    }

                    else{

                        profile.setAttribute("href", "sellerProfile.html");
                    }

                    return;
                }
            }

            cursor.continue();
        
    }
        else {
            loginemail.style.borderColor = "red";
            loginemail.style.borderWidth = "1px";
            loginemail.value = "";

            loginpass.style.borderColor = "red";
            loginpass.style.borderWidth = "1px";
            loginpass.value = ""; 
            console.log("No")
            return;
        }
    }
}