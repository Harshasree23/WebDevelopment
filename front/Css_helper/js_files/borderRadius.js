const testDiv = document.getElementById('test');


let topLeft = document.getElementById('top-left');
let topRight = document.getElementById('top-right');
let bottomLeft = document.getElementById('bottom-left');
let bottomRight = document.getElementById('bottom-right');

const table = document.getElementById('border-radius-table'); 

const setId = () => {
    topLeft = document.getElementById('top-left');
    topRight = document.getElementById('top-right');
    bottomLeft = document.getElementById('bottom-left');
    bottomRight = document.getElementById('bottom-right');
}
 
export const createRadius = (label) => {
    let html = 
    `<tr>
        <td> <label for="${label}">${label}</label> </td>
        <td> <input type="range" id="${label}" min="0" max="10" value="0" class="border-radius"> </td>
        <td> <input type="text" id="${label+'-text'}" class="border-radius-text" value="0" autocomplete="off" > </td>
    </tr>`;
    table.innerHTML += html;
    setId();
}


export const handleRadius = (slider) =>
{

    const sliderId = slider.id;
    const sliderValue = slider.value;

    // Update text input values (optional)
    document.getElementById(sliderId + '-text').value = sliderValue;

    // Construct the border-radius style string
    const radiusStyle = `${topLeft.value}rem ${topRight.value}rem ${bottomRight.value}rem ${bottomLeft.value}rem`;

    // Apply the border-radius style to the testDiv
    testDiv.style.borderRadius = radiusStyle;
}

export const handleInputText = (text) => {
    const sliderId = text.id.replace("-text","");
    document.getElementById(sliderId).value = text.value;
    const radiusStyle = `${topLeft.value}rem ${topRight.value}rem ${bottomRight.value}rem ${bottomLeft.value}rem`;
    
    // Apply the border-radius style to the testDiv
    testDiv.style.borderRadius = radiusStyle;
} 

