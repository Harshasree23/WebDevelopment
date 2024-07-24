const place = document.getElementById('display');


// createContainer() is a function which takes 4 parameters
//     1. message  => what should be displayed in the code part
//     2. attributes => all the css attribbutes for the output_container
//     3. values => all the values for the corresponding attributes of 2
//     4. n => Node.of containers inside the output


// container for code and output
const createContainer = (message,attributes,values,n) =>{

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


    // adding css to output container
    for(let i=0;i<attributes.length;i++)
        output_container.style[attributes[i]] = values[i];


    // appending back to parent 
    place.appendChild(container_div);
    return container_div;
}




const flex_properties = () =>
{
    // all values of justify-content
    const justify_content = [ "flex-start",	
        "flex-end",	
        "center",	
        "space-between",	
        "space-around",	
        "space-evenly",	];

    // all values of flex-direction

    const flex_direction = [
        "row",
        "row-reverse",	
        "column",	
        "column-reverse"
    ];

    // all values of align-items

    const align_items = [
        "normal",	
        "stretch",		
        "center",	
        "flex-start",	
        "flex-end",		
        "start",	
        "end"	
    ];

    // all values of align-content

    const align_content =[
        "stretch",	
        "center",	
        "flex-start",	
        "flex-end",	
        "space-between",	
        "space-around",	
        "space-evenly"
    ];

    // all values of flex wrap

    const flex_wrap = [
        "nowrap",		
        "wrap",	
        "wrap-reverse"
    ];

    //for justify content
    for(let x of justify_content)
    {
        createContainer(`display:flex \n justify-content:${x}`,["display","justifyContent"],["flex",x],5);
    }

    // for flex-direction
    for(let x of flex_direction)
    {
        const temp = createContainer(`display:flex \n flex-direction:${x}`,['display','flexDirection','textAlign','fontSize'],['flex',x,'center','2rem'],3);
        const temp_output = temp.children[1];
        let i=0;
        for(let exp_div of temp_output.childNodes)
            exp_div.innerText=i++;
    }

    //for align items
    for(let x of align_items)
    {
        createContainer(`display:flex \n align-items:${x}` , ['display','alignItems'] , ['flex',x],5);
    }

    // for align content
    for(let x of align_content)
    {
        createContainer( `display:flex \n align-content:${x} \n flex-wrap:wrap` , ['display','alignContent','flexWrap'] , ['flex',x,'wrap'] , 3);
    }

    //for flex wrap
    for(let x of flex_wrap)
    {
        const temp = createContainer( `display:flex \n flex-wrap:${x} `, ['display','flexWrap'] , ['flex',x] , 15 );
        const temp_output = temp.children[1];
        let i=0;
        for(let exp_div of temp_output.childNodes)
            exp_div.innerText=i++;
    }
}




flex_properties();