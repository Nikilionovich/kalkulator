function ClickNumber(event)
{
   let out = document.getElementById("output");
   if (out.innerText === '0') 
   { 
      out.innerText = event.target.innerText; 
   } 
   else 
   { 
      out.innerText += event.target.innerText; 
   }
}
let buttons = document.getElementsByClassName("numButton");
 for (let i = 0; i < buttons.length; i++) 
 { 
    buttons[i].addEventListener('click', ClickNumber); 
}


