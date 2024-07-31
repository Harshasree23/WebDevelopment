import { createContainer , create_subdivs ,display_containers } from "../script.js";

export const flex_properties = () =>
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

    return {heading,divs};
}

