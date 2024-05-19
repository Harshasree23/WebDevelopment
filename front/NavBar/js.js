function navBarHandle(){
    let dis = document.getElementById('side-nav').style.display;
    if( dis == 'block')
        document.getElementById('side-nav').style.display = 'none';
    else
        document.getElementById('side-nav').style.display = 'block';
}