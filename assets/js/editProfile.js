import * as editDb from './dataBaseInteraction.js';
import * as helpers from './helper.js'; 
import * as whoLoged from './login_validate.js'

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


setTimeout(() => {

    displayInfo();
    
}, 900);

function displayInfo(){

    whoLoged.whoLoged();

    profile_username.value = whoLoged.out[0];
    oldPass = whoLoged.out[1]
    profile_balance.value = whoLoged.out[2];
    profile_email.value = whoLoged.out[3];
    id = whoLoged.out[4];
}