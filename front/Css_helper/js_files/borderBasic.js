const testDiv = document.getElementById('test');

const borderTable = document.getElementById('border-table');

// function for borders
export const createBorder = (label) => {
  const html = `<tr>
    <td><p>${label}</p></td>
    <td>
      <select id="${label}-border"  class='border-handle'>
        <option value="none">No</option>
        <option value="solid" selected>Yes</option>
      </select>
    </td>
    <td>
      <select id="${label}-type"  class='border-handle'>
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
      <input type="number" id="${label}-width" value="0.2" step='.1' class='border-handle'>
    </td>
    <td>
      <input type="color" id="${label}-color" class='border-handle' value='#ffa550'>
    </td>
  </tr>`;
  borderTable.innerHTML += html;
};




// handling borders input
export const handleBorder = (element) => {
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
