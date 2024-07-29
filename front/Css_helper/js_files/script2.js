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
  const radiusStyle = `${topLeft.value}rem ${topRight.value}rem ${bottomRight.value}rem ${bottomLeft.value}rem`;

  // Apply the border-radius style to the testDiv
  testDiv.style.borderRadius = radiusStyle;
  updatecode(radiusStyle);
}


//  to get the code inside the code div 
const updatecode = () =>{
    console.log(testDiv.style.border,testDiv.style.borderLeft);
    codeText.innerText = `border-radius : ${testDiv.style.borderRadius} ;\n `;
    codeText.innerText += `border-top : ${testDiv.style.borderTop} ;\n`;
    codeText.innerText += `border-left : ${testDiv.style.borderLeft} ;\n`;
    codeText.innerText += `border-bottom : ${testDiv.style.borderBottom} ;\n`;
    codeText.innerText += `border-right : ${testDiv.style.borderRight} ;`;
}



const handleInputText = (text) => {
  const sliderId = text.id.replace("-text","");
  document.getElementById(sliderId).value = text.value;
  const radiusStyle = `${topLeft.value}rem ${topRight.value}rem ${bottomRight.value}rem ${bottomLeft.value}rem`;

  // Apply the border-radius style to the testDiv
  testDiv.style.borderRadius = radiusStyle;
  updatecode(radiusStyle);
} 




// 
// 
// BORDERS
// 
// 
const borderTable = document.getElementById('border-table');

// function for borders
const createBorder = (label) => {
  const html = `<tr>
    <td><p>${label}</p></td>
    <td>
      <select id="${label}-border" onchange="handleBorder(this)">
        <option value="none">No</option>
        <option value="solid" selected>Yes</option>
      </select>
    </td>
    <td>
      <select id="${label}-type" onchange="handleBorder(this)">
        <option value="solid" selected>Solid</option>
        <option value="dotted">Dotted</option>
        <option label="dashed" value="dashed"> Dashed </option>
        <option value="solid" label="solid"> Solid </option>
        <option value="double" label="double"> Double </option>
        <option value="groove" label="groove"> Groove </option>
        <option value="ridge" label="ridge"> Ridge </option>
        <option value="inset" label="inset"> Inset </option>
        <option value="outset" label="outset"> Outset </option>
        <option value="none" label="none"> None </option>
        <option value="hidden" label="hidden"> Hidden </option>
        </select>
    </td>
    <td>
      <input type="number" id="${label}-width" value="0.2" step='.1' oninput="handleBorder(this)">
    </td>
    <td>
      <input type="color" id="${label}-color" oninput="handleBorder(this)" value='#ffa550'>
    </td>
  </tr>`;
  borderTable.innerHTML += html;
};

createBorder('top');
createBorder('right');
createBorder('bottom');
createBorder('left');

// handling borders input
const handleBorder = (element) => {
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
  updatecode();
};
