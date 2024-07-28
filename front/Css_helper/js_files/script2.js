const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');


const testDiv = document.getElementById('test');
const codeText = document.getElementById('code');


const handleRadius = (slider) =>
{
  const sliderId = slider.id;
  const sliderValue = slider.value;

  // Update text input values (optional)
  document.getElementById(sliderId + '-text').value = sliderValue;

  // Construct the border-radius style string
  const radiusStyle = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`;

  // Apply the border-radius style to the testDiv
  testDiv.style.borderRadius = radiusStyle;
  updatecode(radiusStyle);
}


//  to get the code inside the code div 
const updatecode = () =>{
    codeText.innerText = `border-radius : ${testDiv.style.borderRadius} ; `;
}



const handleInputText = (text) => {
  const sliderId = text.id.replace("-text","");
  document.getElementById(sliderId).value = text.value;
  const radiusStyle = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`;

  // Apply the border-radius style to the testDiv
  testDiv.style.borderRadius = radiusStyle;
  updatecode(radiusStyle);
} 