let lastPlayer='X';
let game = [null,null,null,null,null,null,null,null,null];
const info = document.getElementById('info');
const player = document.getElementById('player-info');
const restartButton = document.getElementById('restart');
let gameOver = false;



restartButton.addEventListener('click',() =>{
    const grids = document.getElementsByClassName('grid');
    for(let i=0;i<grids.length;i++)
        grids[i].innerText="";
    updateInfo("");
    info.style.color='red';
    if(lastPlayer=='O')
        changePlayer();
    for(let i=0;i<game.length;i++)
        game[i]=null;
    gameOver=false;
});



const play = (element) =>{
    let selectedValue = element.innerText;

    if(!gameOver)
    {
        if(selectedValue=="")
        {
            updateInfo("");
            updateBox(element.id);
            game[element.id]=lastPlayer;
            changePlayer();
            WinCheck();
        }
        else{
            updateInfo("Box already choosen");
        }
    }
};


const changePlayer = () =>
{
    if(lastPlayer=='O')
        lastPlayer='X';
    else
        lastPlayer='O';
    player.innerText = `Player ${lastPlayer}`;
};


const updateInfo = (message) =>{
    info.innerText = message;
};

const updateBox = (id) =>{
       const box = document.getElementById(id);
       box.innerText = lastPlayer;
};

const WinCheck = () =>{
    let win = [ [0,1,2], [3,4,5] , [6,7,8] , [0,4,8] , [2,4,6] , [0,3,6] , [1,4,7] , [2,5,8] ];
    for(let i=0;i<win.length;i++)
    {
        if( game[win[i][0]] == game[win[i][1]] && game[win[i][2]] == game[win[i][1]] && game[win[i][0]] == 'X')
        {
            info.innerText="Player X Wins";
            info.style.color='green';
            gameOver=true;
        }
        else if( game[win[i][0]] == game[win[i][1]] && game[win[i][2]] == game[win[i][1]] && game[win[i][0]] == 'O' )
        {
            info.innerText='Player O Wins';
            info.style.color='green';
            gameOver = true;
        }
    }

    if(!gameOver)
    {
        let c=0;
        for(let i=0;i<game.length;i++)
            if(game[i]!=null)
                c++;
        if(c==game.length)
        {
            info.innerText="No moves left";
            gameOver=true;
        }
            
    }
}