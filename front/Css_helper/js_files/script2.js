// imports
import { handleInputText,handleRadius } from "./borderRadius.js";
import { createBorder,handleBorder } from "./borderBasic.js";

// target div and target code element for entire code
const testDiv = document.getElementById('test');
const codeText = document.getElementById('code');

//  to get the code inside the code div 
const updatecode = () =>{
    codeText.innerText = `border-radius : ${testDiv.style.borderRadius} ;\n `;
    codeText.innerText += `border-top : ${testDiv.style.borderTop} ;\n`;
    codeText.innerText += `border-left : ${testDiv.style.borderLeft} ;\n`;
    codeText.innerText += `border-bottom : ${testDiv.style.borderBottom} ;\n`;
    codeText.innerText += `border-right : ${testDiv.style.borderRight} ;`;
}
 
// 
// BORDER-RADIUS
// 

// border - range input
let border_divs = document.getElementsByClassName('border-radius');
for(let x of border_divs)
{
    x.addEventListener( 'input' , () => {
      handleRadius(x);
      updatecode();
    } );
}

// border - text input
border_divs = document.getElementsByClassName('border-radius-text');
for(let x of border_divs)
{
    x.addEventListener( 'input' , () => {
      handleInputText(x);
      updatecode();
    } );
}


// 
// 
// BORDERS
// 
// 

createBorder('top');
createBorder('right');
createBorder('bottom');
createBorder('left');

border_divs = document.getElementsByClassName('border-handle');
for(let x of border_divs)
{
    x.addEventListener( 'input' , () => {
      handleBorder(x);
      updatecode();
    } );
}