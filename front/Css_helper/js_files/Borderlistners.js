import { handleBorder,handleInputText,handleRadius,updatecode } from "./Borderhandlers.js";



// Listners for border - radius
export const setListeners = () => {
    let divs = document.getElementsByClassName('border-radius');
    for(let x of divs)
        x.addEventListener('input',() => {
            handleRadius(x);
            updatecode();
        } );

    divs = document.getElementsByClassName('border-radius-text');
    for(let x of divs)
        x.addEventListener('input',() => {
            handleInputText(x);
            updatecode();
    } );

    // listners for border-handle
    divs = document.getElementsByClassName('border-handle');
    for(let x of divs)
    x.addEventListener('input',() => {
        handleBorder(x);
        updatecode();
    } );
}

