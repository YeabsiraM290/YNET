import * as editDb from './dataBaseInteraction.js';
import * as helpers from './helper.js'; 
import * as session from './login_validate.js'

let profile_username = document.querySelector('.profile_username');
let profile_email = document.querySelector('.profile_email');
let profile_balance = document.querySelector('.profile_balance');
let profile_changepass = document.querySelector('.profile_changepass');
let profile_saveBtn = document.querySelector('.profile_saveBtn');
let profile_newpass = document.querySelector('.profile_newpass');
let profile_ConNewpass = document.querySelector('.profile_ConNewpass');
let profile_changepassContainer = document.querySelector('.profile_changepassContainer');
let logOutBtn = document.querySelector('.logOutBtn');
let itemRow = document.querySelector('.itemRow');
let items = []
let passChanged = 0;
let oldPass = 0;
let id;

setTimeout(() => {
    items = editDb.getMyItems(sessionStorage.getItem('username'))
}, 700);

setTimeout(() => {
    fillMyitems()
}, 1000);

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

if(profile_saveBtn){profile_saveBtn.addEventListener('click',savedNew)}
function savedNew(e){
    e.preventDefault()
    if(passChanged){
        
        let passLen = helpers.checkLength(profile_newpass.value,8);
        let passEquality = helpers.comparePass(profile_newpass.value,profile_ConNewpass.value);
        
        if(passLen){
           

            if(passEquality){
          
                session.addSession(id,profile_username.value,profile_email.value,profile_balance.value,profile_newpass.value,'seller')
                editDb.loginUpdate(profile_username.value,profile_email.value,profile_newpass.value,profile_balance.value,'seller',Number(id));
                editDb.userUpdate(profile_username.value,profile_email.value,profile_newpass.value,profile_balance.value,Number(id));
            }

            else{

                profile_ConNewpass.style.backgroundColor = "red";}
        }

        else{

            profile_newpass.style.backgroundColor = "red";
        }
        passChanged = 0;
    }

    else{

        session.addSession(id,profile_username.value,profile_email.value,profile_balance.value,oldPass,'seller')
        editDb.loginUpdate(profile_username.value,profile_email.value,oldPass,profile_balance.value,'seller',id)
        editDb.userUpdate(profile_username.value,profile_email.value,oldPass,profile_balance.value,id);
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

function fillMyitems(){
    console.log(items)
    let out=" "
    for(let i=0;i<items[0].length;i++){

        out+=` <div class="row cartRow firstRow mb-4">
        <div class="col-6 mt-4"><img class="mr-3" style="float: left;" src="${items[0][i]}" alt="First slide" width="200px" height="200px">
           Product name:${items[1][i]}<br>
           <hr>
           <p >
          Sold: ${items[2][i]}<br>
          Rating: <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i>
                  <i class="far fa-star"></i><i class="far fa-star"></i>
                  <i class="far fa-star"></i>
          </p>
         </div>
        
          <div class="col-2 mt-4">
            Avilable Amount:${items[3][i]}
          </div>
         
        <div class="col-3 mt-4"><h5><b>Price: <br>${items[4][i]} </b></h5></div>
        <div class="col-1 mt-2">  <a href="#" class="edit"><i class="fa fa-edit"></i></a><i class="far fa-trash-alt"></i></div>
        </div>`
    }

    itemRow.innerHTML = out

}