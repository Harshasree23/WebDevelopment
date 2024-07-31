const createRadius = (label) => {
  let text =
  `<tr>
      <td> <label for="${label}">${label}</label> </td>
      <td> <input type="range" id="${label}" min="0" max="10" value="0" class="border-radius"> </td>
      <td> <input type="text" id="${label+'-text'}" class="border-radius-text" value="0" autocomplete="off" > </td>
  </tr>`;
  return text;
}

const createBorder = (label) => {
  const text = `<tr>
    <td><p>${label}</p></td>
    <td>
      <select id="${label+'-border'}"  class='border-handle'>
        <option value="none">No</option>
        <option value="solid" selected>Yes</option>
      </select>
    </td>
    <td>
      <select id="${label+'-type'}"  class='border-handle'>
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
      <input type="number" id="${label+'-width'}" value="0.2" step='.1' class='border-handle'>
    </td>
    <td>
      <input type="color" id="${label+'-color'}" class='border-handle' value='#ffa550'>
    </td>
  </tr>`;
  return text;
};


// to insert html code of border-radius
const radiusText = () =>{
  let temp='';
  temp+=createRadius('top-left');
  temp+=createRadius('top-right');
  temp+=createRadius('bottom-right');
  temp+=createRadius('bottom-left');
  return temp;
}

// to insert html code of borders
const borderText = () => {
  let temp='';
  temp+=createBorder('top');
  temp+=createBorder('right');
  temp+=createBorder('bottom');
  temp+=createBorder('left');

  return temp;
}

export const optionCreation = () => {
  let text = `
  <div class="display">
      <div class="main-container">
        <div id="test">

        </div>
      </div>
      <div class="code-container">
        <p>Code : </p>
        <code id="code">

        </code>
      </div>
   </div>
   
    <div class="options">
        <h1>Border Radius</h1>
        <div class="buttons-container">
            <table id="border-radius-table">
              <tr>
                  <th>Corner</th>
                  <th>Radius</th>
                  <th>Radius (rem)</th>
              </tr>
              ${radiusText()}
           </table>
        </div>
    </div>
    <div class="options">
        <h1>Borders</h1>
        <div class="buttons-container">
            <table id="border-table" >
              <tr>
                <th>Position</th>
                <th>Border</th>
                <th>Type</th>
                <th>Width</th>
                <th>Color</th>
              </tr>
              ${borderText()}
            </table>
          </div>
      </div>`;
    return text;
}

optionCreation();