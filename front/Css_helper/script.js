// where the output should be displayed
const place = document.getElementById('display');


// createContainer() is a function which takes 4->5 parameters
//     1. message    => what should be displayed in the code part
//     2. attributes => all the css attribbutes for the output_container
//     3. values     => all the values for the corresponding attributes of 2
//     4. n          => No.of containers inside the output
//     5. numbered   => if divs should contain number or not


// container for code and output
const createContainer = (message,attributes,values,n,numbered) =>{

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
const display_containers = (heading , divs) =>
{
    
    // Adding main-heading
    const title = document.createElement('div');
    title.classList.add('main-heading');

    const h1 = document.createElement('h1');
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

const create_subdivs = (heading,arr) =>
{
     // creating a sub-div
     const sub_div = document.createElement('div');
     sub_div.classList.add("sub-div");
 
     // sub-headings
     const sub_heading  = document.createElement('div');
     sub_heading.classList.add("sub-heading");
     
     const h1 = document.createElement("h1");
     h1.innerText=heading;
 
     sub_div.appendChild(h1);
 
     for(let x of arr)
     {
        sub_div.appendChild(x);
     }

     return sub_div;
}




const flex_properties = () =>
{

    const heading = "Flex properties";
    const divs = [];


    // for justify-content
    // all values of justify-content
    const justify_content = [ "flex-start",	"flex-end",	"center","space-between","space-around","space-evenly",	];

    let arr = [];
    for(let x of justify_content)
        arr.push(createContainer(`display:flex \n justify-content:${x}`,["display","justifyContent"],["flex",x],5,false));
    divs.push( create_subdivs("justify-content",arr) );



    // for flex-direction
    // all values of flex-direction
    const flex_direction = [ "row","row-reverse","column","column-reverse" ];
    arr = [];
    for(let x of flex_direction)
        arr.push(createContainer(`display:flex \n flex-direction:${x}`,["display","flexDirection"],["flex",x],3,true));
    divs.push( create_subdivs("flex-direction",arr) );



    //for align items
    // all values of align-items
    const align_items = [ "normal",	"stretch", "center","flex-start","flex-end","start","end" ];
    arr = [];
    for(let x of align_items)
        arr.push(createContainer(`display:flex \n align-items:${x}` , ['display','alignItems'] , ['flex',x],5,false));
    divs.push( create_subdivs("align-items",arr) );



    // for align content
    // all values of align-content
    const align_content =[ "stretch","center","flex-start","flex-end","space-between","space-around","space-evenly"];
    arr = [];
    for(let x of align_content)
        arr.push(createContainer(`display:flex \n align-content:${x} \n flex-wrap:wrap` , ['display','alignContent','flexWrap'] , ['flex',x,'wrap'] , 3,false));
    divs.push( create_subdivs("align-content",arr) );



    //for flex wrap
    // all values of flex wrap
    const flex_wrap = ["nowrap","wrap","wrap-reverse" ];
    arr = [];
    for(let x of flex_wrap)
        arr.push(createContainer(`display:flex \n flex-wrap:${x} `, ['display','flexWrap'] , ['flex',x] , 15,true));
    divs.push( create_subdivs("flex-wrap",arr) );

    display_containers(heading,divs);
}




flex_properties();