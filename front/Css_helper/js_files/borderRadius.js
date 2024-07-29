const testDiv = document.getElementById('test');


const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');



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

