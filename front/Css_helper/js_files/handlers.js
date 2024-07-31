let topLeft = document.getElementById('top-left');
let topRight = document.getElementById('top-right');
let bottomLeft = document.getElementById('bottom-left');
let bottomRight = document.getElementById('bottom-right');



const setId = () => {
    topLeft = document.getElementById('top-left');
    topRight = document.getElementById('top-right');
    bottomLeft = document.getElementById('bottom-left');
    bottomRight = document.getElementById('bottom-right');
}

export const updatecode = () =>{
  const testDiv = document.getElementById('test');
  const codeText = document.getElementById('code');
  codeText.innerText = `border-radius : ${testDiv.style.borderRadius} ;\n `;
  codeText.innerText += `border-top : ${testDiv.style.borderTop} ;\n`;
  codeText.innerText += `border-left : ${testDiv.style.borderLeft} ;\n`;
  codeText.innerText += `border-bottom : ${testDiv.style.borderBottom} ;\n`;
  codeText.innerText += `border-right : ${testDiv.style.borderRight} ;`;
}


export const handleRadius = (slider) =>
{
    const testDiv = document.getElementById('test');
    
    setId();
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
    const testDiv = document.getElementById('test');
    setId();
    const sliderId = text.id.replace("-text","");
    document.getElementById(sliderId).value = text.value;
    const radiusStyle = `${topLeft.value}rem ${topRight.value}rem ${bottomRight.value}rem ${bottomLeft.value}rem`;
    
    // Apply the border-radius style to the testDiv
    testDiv.style.borderRadius = radiusStyle;
} 

// handling borders input
export const handleBorder = (element) => {
  const testDiv = document.getElementById('test');
  let label='';
  if(element.id.includes('top'))  label='top';
  else if( element.id.includes('bottom') )  label='bottom';
  else if( element.id.includes('right') ) label='right';
  else label='left';
  const border = document.getElementById(`${label}-border`).value;
  const type = document.getElementById(`${label}-type`).value;
  const width = document.getElementById(`${label}-width`).value;
  const color = document.getElementById(`${label}-color`).value;

  // console.log(border,type,width,color);

  const style = `${width}rem ${type} ${color}`;

  switch (label) {
    case 'top':
      testDiv.style.borderTop = border === 'none' ? 'none' : style;
      break;
    case 'right':
      testDiv.style.borderRight = border === 'none' ? 'none' : style;
      break;
    case 'bottom':
      testDiv.style.borderBottom = border === 'none' ? 'none' : style;
      break;
    case 'left':
      testDiv.style.borderLeft = border === 'none' ? 'none' : style;
      break;
  }
};