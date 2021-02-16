function checkSign(num){
        
    if(num){

        if(num>0){
            return true
        }
    }

    return false
}

function ValidateEmail(mail){

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){

            return (true)
   }

   return (false)
}
function comparePass(mainPass, secondPass){

    if(mainPass==secondPass){
        return true;
    }

    return false;
}

function validatePhoneNumber(phoneno) 
    {

        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneno)){

            return (true)
   }

    return (false)

}

function checkLength(item,len){

    if(item.length < len){
    
        return false;
        }
    
    else{
    
        return true;
        }
    }
    
    export{checkSign,ValidateEmail,comparePass,validatePhoneNumber,checkLength}
    


