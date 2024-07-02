const Startmoney = 5000;

const PlayersArr =[];
const PlayerFigures = [0,2,4];

function addPlayer(){
    //Ask for the name of the new player
    const PlayerName = prompt("Enter the name of the new player: ");
    if(PlayerName){
        //Adding the Player to the PlayerArr
        const playerID = PlayersArr.length +1;
        const playerFigure = PlayerFigures[Math.floor(Math.random()*PlayerFigures.length)]
        console.log(playerFigure)
        const newPlayer = {id: playerID, name: PlayerName, money: Startmoney, position: 0}
        PlayersArr.push(newPlayer);
        //Adding the HTML Code for new Player 
        const playersDiv = document.querySelector('.players');
        const newPlayerDiv = document.createElement('div');
        newPlayerDiv.className = 'player';
        newPlayerDiv.setAttribute('id', playerID);
        newPlayerDiv.innerHTML =`
                    <div class="playername">${PlayerName}</div>
                    <div class="playerfigure></div>
                    <div class="playermoney">${Startmoney}</div>
                    <div class="rolldice">
                        <button onclick="rolldice(${playerID})">Roll Dice</button>
                    </div>
                    <div class="diceresult"></div>`;
        playersDiv.insertBefore(newPlayerDiv, playersDiv.lastElementChild);
        //Adding the Players figure to Start field
    }
}
function rolldice(playerID){
    //two dices 
    const diceOne = Math.floor(Math.random()*6) +1;
    const diceTwo = Math.floor(Math.random()*6) +1;
    //save the result in the Players HTML 
    const playerDiv = document.querySelector(`.player[id="${playerID}"]`);
    playerDiv.querySelector('.diceresult').textContent = `Rolled: ${diceOne} + ${diceTwo}`;
}

function placeFigureOnStart(playerId, Figure){

}
function start(){

}