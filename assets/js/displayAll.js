let viewall = document.querySelector('.viewall');

import * as getFromDB from './dataBaseInteraction.js';

let allItem = []


setTimeout(() => {
    allItem = getFromDB.getAllItems()
}, 500);

setTimeout(() => {
    allItems()
}, 600);


function allItems(){
console.log(window.screen.width)
    let out=" "
    for(let i=0;i<allItem[0].length;i++){

        let slice = allItem[2][i].slice(" ")
        out+=`
        <a href="itemView.html?id=${allItem[1][i]}">
        <div class="row itemRow mb-2" style="width=${window.screen.width}px !important;">
        <div class="col-5 mt-1"><img class="mr-3" style="float: left;" src="${allItem[0][i]}"  width=200 height=100>
          ${allItem[1][i]}<br>
           <p>
            ${slice[0]}<br>
            ${slice[1]}<br>
          </p>
         </div>
    
          <div class="col-2">
            Amount:${allItem[6][i]}
            
          </div>
         
        <div class="col-3"><h5><b>Price:${allItem[4][0]}</b></h5>From:${allItem[3][i]}</div>
        <div class="col-2">Department:${allItem[5][0]}</div>
      </div>
        
        </div></a>`

    }

    viewall.innerHTML = out

}
