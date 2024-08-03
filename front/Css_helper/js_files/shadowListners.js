//  function to apply shadow
const applyShadow = () => 
{
  const shadowDiv = document.getElementById('Shadowtest');
  const shadowTable = document.getElementById('ShadowTable');
  let inputStyle = '';

  for (let x of shadowTable.rows) {
    const tds = x.getElementsByTagName('td');
    let text = '';
    for (let y of tds) {
      const childValue = y.children[0].value;
      if (Number.isFinite(parseFloat(childValue))) 
        text += childValue+"rem";
      else
        text += childValue;
      text += " ";
    }
    inputStyle += text + ",";
  }

  let style = inputStyle.slice(1, -1);
  shadowDiv.style.boxShadow = style;
  style+='\n';
  updateCode(style);
};


// function to update code
const updateCode = (style) => {
  const shadowCode = document.getElementById('Shadowcode');
  let temp = style.split(',');
  let code = '';
  for(let i=0;i<temp.length ; i++ )
      if( i == temp.length-1 )
        code += temp[i] +";";
      else
        code += temp[i] +",\n";
  shadowCode.innerText = "box-shadow : "+code;
}


//  function to add event listeners
export const addListner = () =>  {
  const shadowTable = document.getElementById('ShadowTable');
  for (let x of shadowTable.rows) {
  const tds = x.getElementsByTagName('td');
  for (let y of tds) {
    y.children[0].addEventListener('input', applyShadow);
  }
}};



//  adding tr when clicked new
export const addButtonFunction = () => {
  const shadowTable = document.getElementById('ShadowTable');
  const button = document.getElementById('addShadowButton');
  button.addEventListener('click', () => {
    const newRow = document.createElement('tr');

    for( let i=0;i<3;i++)
    {
      const cell1 = document.createElement('td');
      const range1 = document.createElement('input');
      range1.type = 'range';
      range1.min = '-3';
      range1.max = '3';
      range1.value = '.1';
      range1.step = '.001';
      range1.classList.add('progress-bar');
      cell1.appendChild(range1);
      newRow.appendChild(cell1);
    }
    
    const cell4 = document.createElement('td');
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    cell4.appendChild(colorInput);

    newRow.appendChild(cell4);

    shadowTable.appendChild(newRow);
    addListner();
  });
  updateCode(".1rem .1rem .1rem #000000");
}


