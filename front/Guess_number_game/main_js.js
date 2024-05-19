let a = new Array();
const min = 1;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let moves=0;
function check()
{

        const inp = Number(document.getElementById('num-input').value);
        document.getElementById('num-input').value = '';
        if(Number.isNaN(inp))
            return;
        let status = inp==randomNum ? Gameover() : inp>randomNum ? "Too high" : "Too low" ;
        a.push(inp);
        let info = `Numbers guessed : ${a} \nStatus : ${status}`
        document.getElementById('info').innerHTML = info;
        document.getElementById('moves').innerHTML = `Moves : ${moves}`;
        moves++;
        if(moves>10)
            lost();
}

function Gameover()
{
    document.getElementById('info').innerHTML = "Game Over";
    document.getElementById('info').classList.add('green');
}

function lost()
{
    document.getElementById('info').innerHTML = "Moves Completed game over !!!";
    document.getElementById('info').classList.add('red');
}