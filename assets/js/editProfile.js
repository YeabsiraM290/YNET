import * as editDb from './dataBaseInteraction.js';
import * as helpers from './helper.js'; 

let profile_username = document.querySelector('.profile_username');
let profile_email = document.querySelector('.profile_email');
let profile_balance = document.querySelector('.profile_balance');
let profile_changepass = document.querySelector('.profile_changepass');
let profile_saveBtn = document.querySelector('.profile_saveBtn');
let profile_newpass = document.querySelector('.profile_newpass');
let profile_ConNewpass = document.querySelector('.profile_ConNewpass');
let profile_changepassContainer = document.querySelector('.profile_changepassContainer');
let logOutBtn = document.querySelector('.logOutBtn');

let passChanged = 0;
let oldPass = 0;
let id;

profile_changepassContainer.style.display = 'none';

let editBtn = document.querySelector('.editBtn');

displayInfo();
function displayInfo(){

    profile_username.value = sessionStorage.getItem('username');
    oldPass =  sessionStorage.getItem('password');
    profile_balance.value = sessionStorage.getItem('balance');
    profile_email.value = sessionStorage.getItem('email');
    id =   sessionStorage.getItem('id');
}

profile_saveBtn.addEventListener('click',savedNew)
function savedNew(){
    if(passChanged=1){

        let passLen = helpers.checkLength(profile_newpass.value,8);
        let passEquality = helpers.comparePass(profile_newpass.value,profile_ConNewpass.value);

        if(passLen){
            console.log("passssssssss")

            if(passEquality){

                console.log('done')
                editDb.loginUpdate(profile_username.value,profile_email.value,profile_newpass.value,profile_balance.value,'buyer',id);
                editDb.userUpdate(profile_username.value,profile_email.value,profile_newpass.value,profile_balance.value,id);
                addSession(id,profile_username.value,profile_email.value,profile_balance.value,profile_newpass.value,'buyer')
            }

            else{

                profile_ConNewpass.style.backgroundColor = "red";}
        }

        else{

            profile_newpass.style.backgroundColor = "red";
        }
    }

    else{
        
        editDb.loginUpdate(profile_username.value,profile_email.value,oldPass,profile_balance.value,'buyer',id);
        editDb.userUpdate(profile_username.value,profile_email.value,oldPass,profile_balance.value,id);
        addSession(id,profile_username.value,profile_email.value,profile_balance.value,profile_newpass.value,'buyer')
    }

}


if(editBtn){editBtn.addEventListener('click',editValidate)}

function editValidate(){

    profile_username.disabled=false;
    profile_username.focus();
    profile_username.style.backgroundColor= "#d8d8d8";

    profile_balance.disabled=false;
    profile_balance.style.backgroundColor= "#d8d8d8";
    profile_saveBtn.disabled = false;
    
}

profile_changepass.addEventListener('click',changePass)
function changePass(e){
    e.preventDefault();

    profile_saveBtn.disabled = false;
    passChanged = 1;
    profile_changepassContainer.style.display = 'block';

}

if(logOutBtn){logOutBtn.addEventListener('click',logOut)}

function logOut(){

    sessionStorage.clear();
    window.location.replace("../index.html");
    
}