//inputs and button indexPage
let signupUsername = document.querySelector('.signupUsername');
let signupemail = document.querySelector('.signupemail');
let signuppassword = document.querySelector('.signuppassword');
let signupconfirmpassword = document.querySelector('.signupconfirmpassword');
let signupBtn = document.querySelector('.signupBtn');
let loginModal = document.querySelector('.loginModal');
let signupModal = document.querySelector('.signupModal');

import * as addtoDB from './dataBaseInteraction.js';
import * as helpers from './helper.js'

if(signupBtn){ signupBtn.addEventListener('click', userInfoValidation);}

function userInfoValidation(e){

    e.preventDefault();
  
            let userName = helpers.checkLength(signupUsername.value,4);
            let email = helpers.ValidateEmail(signupemail.value);
            let pass = helpers.checkLength(signuppassword.value,8);
            let confPass = helpers.comparePass(signuppassword.value, signupconfirmpassword.value);
            
            let succsess=0;

            if(!userName){
                signupUsername.style.borderWidth = "1px";
                signupUsername.style.borderColor = "red";
                signupUsername.value = "";
                signupUsername.placeholder = "Username cannot be less than 4 chracters";
                succsess=1;
            }

            if(!email){
                
                signupemail.style.borderWidth = "1px";
                signupemail.style.borderColor = "red";
                signupemail.value = "";
                signupemail.placeholder = "Enter valid email address";
                succsess=1;
            }

            if(!pass){
                signuppassword.style.borderWidth = "1px";
                signuppassword.style.borderColor = "red";
                signuppassword.value = "";
                signuppassword.placeholder = "Password must be at least 8 charcters";
                succsess=1;
            }

            if(!confPass){

                signupconfirmpassword.style.borderWidth = "1px";
                signupconfirmpassword.style.borderColor = "red";
                signupconfirmpassword.value = "";
                succsess=1;
            }

            if(succsess==0){

                let username = signupUsername.value;
                let password = signuppassword.value;
                let uEmail = signupemail.value;
                let balance = '1000';
                
                signupModal.style.display = "none";
                loginModal.style.display = "block";
                
                signupUsername.style.border = "none";
                signupemail.style.border = "none";
                signuppassword.style.border = "none";
                signupconfirmpassword.style.border = "none";
            
                addtoDB.addNewuser(username, uEmail, password);
                addtoDB.addTologin(username, uEmail, password, balance, "buyer");
            
            }

}