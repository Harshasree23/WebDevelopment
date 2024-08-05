let text = `<div class="display">
        <div class="main-container">
          <div id="Shadowtest">
  
          </div>
        </div>
        <div class="code-container">
          <p>Code : </p>
          <code id="Shadowcode">
  
          </code>
        </div>
     </div>
     <div class="options">
        <div class="headAndAdd">
            <p>Apply shadows to add shadows ( + )</p>
            <button id="addShadowButton"> <b>+</b> </button>
        </div>
        <div class='buttons-container'>
        <table id="ShadowTable">
            <tr>
                <th> X </th>
                <th> Y </th>
                <th> Spread </th>
                <th> Color </th>
            </tr>
            <tr>
                <td> <input type="range" min="-3" max="3" value=".1" step=".001" class="progress-bar" > </td>
                <td> <input type="range" min="-3" max="3" value=".1" step=".001" class="progress-bar"  > </td>
                <td> <input type="range" min="0" max="3" value=".1" step=".001" class="progress-bar" > </td>
                <td> <input type="color"> </td>
            </tr>
        </table>
        </div>
     </div>`;

export const createShadowTools = () => {
    return text;
}