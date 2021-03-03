let loginemail = document.querySelector('.loginemail');
let loginpass = document.querySelector('.loginpass');
let loginBtn = document.querySelector('.loginBtn');

let vendor_icon = document.querySelector('.vendorIcon');
let car_icon = document.querySelector('.cartIcon');
let profile = document.querySelector('.profile');
let balance_view = document.querySelector('.balance');

let balance = "";
let type = "";
let Uname;
let Email;
let password;
let logged;
let id;

let out = [];

import * as addtoDB from './dataBaseInteraction.js';

if(profile){profile.addEventListener('click',changeColor);}

if(sessionStorage.getItem('id')){

    paint(sessionStorage.getItem('balance'), sessionStorage.getItem('username'), sessionStorage.getItem('type'))
}

else{

    dePaint();
}

function changeColor(e){
    loginemail.style.borderColor = "grey";
    loginpass.style.borderColor = "grey";
}

function addSession(id, username, email, balance, pass, type){

    sessionStorage.setItem('id', id);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('balance', balance);
    sessionStorage.setItem('password', pass);
    sessionStorage.setItem('type', type);
}



function paint(balance,userName,type){

    balance_view.innerHTML=`<a class="nav-link sellerIcon" href="#" 
    data-abc="true"><b class="vendor_balance">Balance<br><p style=font-size:0.9rem;>${balance}</p></b></a> `

    vendor_icon.className = "nav-item ml-5 vendorIcon"
    car_icon.className = "nav-item ml-5 mt-2 cartIcon"

    if(type == "buyer"){

        profile.innerHTML = `<a class="nav-link profile" href="buyerProfile.html" data-abc="true"><i class="fas fa-user-circle userIcon"></i>
        <p class="userLoginLabel ml-1">Welcome<br><b class="loginSubtitle">${userName}</b></p></a>`
    }

    else{

        profile.innerHTML = `<a class="nav-link profile" href="sellerProfiel.html" data-abc="true"><i class="fas fa-user-circle userIcon"></i>
        <p class="userLoginLabel ml-1">Welcome<br><b class="loginSubtitle">${userName}</b></p></a>`
    }

}

function dePaint(){

    balance_view.innerHTML=`<a class="nav-link sellerIcon" href="vendorRegistration.html" data-abc="true"><b class="vendor_balance">Vendor</b></a> `

    vendor_icon.className = "nav-item mt-3 ml-3 vendorIcon balance"
    car_icon.className = "nav-item ml-4 mt-1 cartIcon"

    profile.innerHTML = `<a class="nav-link profile" href="#loginWindow" data-toggle="modal" data-abc="true"><i class="fas fa-user-circle userIcon"></i>
    <p class="userLoginLabel ml-1">Welcome<br><b class="loginSubtitle">sign in / Register</b></p></a>`

}

if(loginBtn){loginBtn.addEventListener('click', loginValidation);}

function loginValidation(e){
    e.preventDefault();

    let email_username = loginemail.value;
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

            Uname = cursor.value.username;
            Email = cursor.value.email;
            password = cursor.value.password;
            id = cursor.value.id;
            
            if(Uname == email_username || Email == email_username){

                if(pass == password){

                    balance = cursor.value.balance;
                    type = cursor.value.user_type

                    $(function () {
                        $('#loginWindow').modal('toggle');
                     });
                    addSession(id,Uname,Email,balance,password,type)
                    paint(balance,Uname,type)

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
            return;
        }
    }
}

export{addSession};