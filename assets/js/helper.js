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

