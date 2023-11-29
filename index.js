function startgame(){

}

function Player(name){
    this.name = name
}

const player1 = new playernames("John");


const emptyspace = "emptyspace";
const gameboard = [emptyspace, emptyspace, emptyspace, emptyspace, emptyspace, emptyspace, emptyspace, emptyspace, emptyspace,];

function placemarker(value){
    gameboard.splice(value, 1, "x")
}


function display(){

}