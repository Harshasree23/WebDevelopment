import { createContainer, create_subdivs } from "../script.js";

export const grid_properties = () => {
    const heading = "Grid properties";
    const divs = [];

    // for grid-template-columns
    // all values of grid-template-columns
    const grid_template_columns = ["1fr 1fr", "repeat(3, 1fr)", "5rem 3rem", "1fr 2fr 1fr"];
    let arr = [];
    for (let x of grid_template_columns) {
        arr.push(createContainer(`display: grid;\n grid-template-columns: ${x};`, ["display", "gridTemplateColumns"], ["grid", x], 4, false));
    }
    divs.push(create_subdivs("grid-template-columns", arr));

    // for grid-template-rows
    // all values of grid-template-rows
    const grid_template_rows = ["1fr 1fr 1fr", "repeat(3, 50px)", "2rem 1.5rem 3rem", "1fr 2fr 1fr"];
    arr = [];
    for (let x of grid_template_rows) {
        arr.push(createContainer(`display: grid;\n grid-template-rows: ${x};`, ["display", "gridTemplateRows"], ["grid", x], 3, false));
    }
    divs.push(create_subdivs("grid-template-rows", arr));


    // for grid-gap
    // all values of grid-gap
    const grid_gap = ["10px", "20px", "1rem", "2rem"];
    arr = [];
    for (let x of grid_gap) {
        arr.push(createContainer(`display: grid;\n grid-gap: ${x};`, ["display", "gridGap"], ["grid", x], 4, false));
    }
    divs.push(create_subdivs("grid-gap", arr));

    // for justify-items
    // all values of justify-items
    const justify_items = ["start", "end", "center", "stretch"];
    arr = [];
    for (let x of justify_items) {
        arr.push(createContainer(`display: grid;\n justify-items: ${x};`, ["display", "justifyItems"], ["grid", x], 4, false));
    }
    divs.push(create_subdivs("justify-items", arr));

    // for align-items
    // all values of align-items
    const align_items = ["start", "end", "center", "stretch"];
    arr = [];
    for (let x of align_items) {
        arr.push(createContainer(`display: grid;\n align-items: ${x};`, ["display", "alignItems"], ["grid", x], 4, false));
    }
    divs.push(create_subdivs("align-items", arr));

    // for justify-content
    // all values of justify-content
    const justify_content = ["start", "end", "center", "stretch", "space-between", "space-around"];
    arr = [];
    for (let x of justify_content) {
        arr.push(createContainer(`display: grid;\n justify-content: ${x};`, ["display", "justifyContent"], ["grid", x], 4, true));
    }
    divs.push(create_subdivs("justify-content", arr));

    // for align-content
    // all values of align-content
    const align_content = ["start", "end", "center", "stretch", "space-between", "space-around"];
    arr = [];
    for (let x of align_content) {
        arr.push(createContainer(`display: grid;\n align-content: ${x};`, ["display", "alignContent"], ["grid", x], 4, true));
    }
    divs.push(create_subdivs("align-content", arr));

    return { heading, divs };
};
