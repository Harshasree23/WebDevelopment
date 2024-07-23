function Addhandle()
{
    // getting title and content
    let content = document.getElementById('notes');
    let title = document.getElementById('title');

    // check if heading is empty
    if(title.value=='')
    {
        window.alert("Please enter a valid title");
        return;
    }

    // check if headiing already exist
    if(check(title.value))
        return;

    // creating divs for heading content and a main container
    let main_cont = document.createElement('div');
    let head_div = document.createElement('div');
    let content_div = document.createElement('div');

    // assigning values to div
    head_div.innerHTML = title.value;
    content_div.innerHTML = content.value;

    // apending them  to main contaniner
    main_cont.appendChild(head_div);
    main_cont.appendChild(content_div);

    // adding classes to them
    main_cont.classList.add('notes-container');
    head_div.classList.add('heading-notes-container');
    content_div.classList.add('content-notes-container');

    // adding to main page
    let con = document.getElementById('con');
    con.appendChild(main_cont);
    content.value="";
    title.value="";
}


function check(title)
{
    let heads = document.getElementsByClassName('heading-notes-container');
    for( let x  of heads )
    {
        console.log(x.innerHTML);
        if(x.innerHTML==title)
        {
            window.alert("Name already exist ");
            return true;
        }
    }
    return false;

}