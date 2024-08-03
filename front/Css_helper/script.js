import { flex_properties } from "./js_files/flex.js";
import { optionCreation } from "./js_files/Bordertools.js";
import { setListeners } from "./js_files/listners.js";
import { grid_properties } from "./js_files/grids.js";
import { createShadowTools } from "./js_files/ShadowTools.js";
import { addButtonFunction,addListner } from "./js_files/shadowListners.js";

// where the output should be displayed
const place = document.getElementById('display');


// createContainer() is a function which takes 4->5 parameters
//     1. message    => what should be displayed in the code part
//     2. attributes => all the css attribbutes for the output_container
//     3. values     => all the values for the corresponding attributes of 2
//     4. n          => No.of containers inside the output
//     5. numbered   => if divs should contain number or not


// container for code and output
export const createContainer = (message,attributes,values,n,numbered) =>{

    // container for code and output
    const container_div = document.createElement('div');
    container_div.classList.add("container");

    // container for code
    const code_container = document.createElement('div');
    code_container.classList.add("code");
    container_div.appendChild(code_container);

    // adding code
    const code = document.createElement('code');
    code.innerText = message;
    code_container.appendChild(code);

    // container for output
    const output_container = document.createElement('div');
    output_container.classList.add('output');
    for(let i=0;i<n;i++)
    {
        const exp_div = document.createElement('div');
        exp_div.classList.add("exp-div");
        output_container.appendChild(exp_div);
    }
    container_div.appendChild(output_container);

    // adding numbers to exp_div
    if(numbered)
    {
        let i=0;
        for(let x of output_container.children)
            x.innerText=i++;
    }

    // adding css to output container
    for(let i=0;i<attributes.length;i++)
        output_container.style[attributes[i]] = values[i];

    return container_div;
}





// display_containers takes 2 parameters 
//     1. heading   ->  the main heading of the entire div ( the css property  )
//     2. divs      ->  an array of divs with sub heading and illustrations


// for displaying the created containers with a heading
export const display_containers = (heading , divs) =>
{
    
    // Adding main-heading
    const title = document.createElement('div');
    title.classList.add('main-heading');

    const h1 = document.createElement('p');
    h1.innerText = heading;

    title.appendChild(h1);

    place.appendChild(title);


    // adding divs
    for(let x of divs)
        place.appendChild(x);    
};



// create_subdivs function takes two parameteres
//     1. heading  ->  sub-heading of for the illustrations
//     2. arr      ->  an array of divs which contains the containers

export const create_subdivs = (heading,arr) =>
{
     // creating a sub-div
     const sub_div = document.createElement('div');
     sub_div.classList.add("sub-div");
 
     // sub-headings
     const sub_heading  = document.createElement('div');
     sub_heading.classList.add("sub-heading");
     
     const h1 = document.createElement("p");
     h1.innerText=heading;
 
     sub_heading.appendChild(h1);

     sub_div.appendChild(sub_heading);
 
     for(let x of arr)
     {
        sub_div.appendChild(x);
     }

     return sub_div;
}




// calling functions

const flexContent = flex_properties();
const toolsBorderContent = optionCreation();
const gridContent = grid_properties();
const toolsShadowContent = createShadowTools();


const navBorder = document.getElementById('nav-tools-border');
navBorder.addEventListener('click',() => {
    place.innerHTML = '';
    place.innerHTML = toolsBorderContent;
    setListeners();
});

const navShadow = document.getElementById('nav-tools-shadow');
navShadow.addEventListener('click',() => {
    place.innerHTML = '';
    place.innerHTML = toolsShadowContent;
    addListner();
    addButtonFunction();
});

const navLayouts = document.getElementById('nav-flex');
navLayouts.addEventListener( 'click' , ()=>{
    place.innerHTML = '';
    display_containers(flexContent.heading,flexContent.divs);
} );

const navGrid = document.getElementById('nav-grid');
navGrid.addEventListener( 'click' , ()=>{
    place.innerHTML = '';
    display_containers(gridContent.heading,gridContent.divs);
} );


// nav opening

const tools = document.getElementById('tools');
tools.addEventListener('click', () => {
    const toolsOptions = document.getElementById('nav-tools-options');
    toolsOptions.toggleAttribute("hidden");
    
});

const layouts = document.getElementById('layouts');
layouts.addEventListener('click', () => {
    const toolsOptions = document.getElementById('nav-layout-options');
    toolsOptions.toggleAttribute("hidden");
    
});

