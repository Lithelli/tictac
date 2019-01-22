let cells = document.querySelectorAll('.cell');
let currentPlayerSymbol = "X";
let drawcounter = 0;
let banner = document.querySelector('.banner');
let reset = document.getElementById('reset');
let turns = document.getElementById('turns');

let c1 = document.getElementById("1");
let c2 = document.getElementById("2");
let c3 = document.getElementById("3");
let c4 = document.getElementById("4");
let c5 = document.getElementById("5");
let c6 = document.getElementById("6");
let c7 = document.getElementById("7");
let c8 = document.getElementById("8");
let c9 = document.getElementById("9");

reset.style.display = "none"
banner.style.display = "none"

const winCombos = [
    [c1, c2, c3],
    [c4, c5, c6],
    [c7, c8, c9],
    [c1, c4, c7],
    [c2, c5, c8],
    [c3, c6, c9],
    [c1, c5, c9],
    [c3, c5, c7]
]

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});
// fills each cell with a move
function cellClicked(e) {
    if (e.target.textContent == "X" || e.target.textContent == "O") {
        alert("filled");
        return;
    } else {
        e.target.textContent = currentPlayerSymbol;
    }
    if(draw() == true || winnerCheck() == true){
       return currentPlayerSymbol = "";
    }
    // draw();
    // winnerCheck();
    checkTurn(); 
}
//shifts between turns
function checkTurn() {
    if (currentPlayerSymbol == "X") {
        currentPlayerSymbol = "O";
        turns.textContent = "O Show Me Your Move"
    } else if(currentPlayerSymbol == "O") {
        currentPlayerSymbol = "X";
        turns.textContent = "X Show Me Your Move";
    }
}


// counts up to 9 then prints "Draw"
function draw() {
    drawcounter++;
    if (drawcounter == 9 && currentPlayerSymbol != "") {
        banner.textContent = (`Draw`);
        banner.style.display = "block";
        drawcounter = 0;
        showReset();
        return true;
    }
}
// checks for winner through two loops.
function winnerCheck() {
    //loops through winCombos array
    for (i = 0; i < winCombos.length; i++) {
        let counter = 0;
        var wins = winCombos[i].length;
        // loops through content of each winCombo array
        for (var j = 0; j < wins; j++) {
            let winCell = winCombos[i][j].textContent;
            if (winCell == currentPlayerSymbol) {
                counter++;
                if (counter == 3 && currentPlayerSymbol !="") {
                    banner.textContent = (currentPlayerSymbol + " is the Winner!");
                    banner.style.display = "block"
                    showReset();
                    return true;
                }
            }
        }
    }
}
reset.addEventListener("click", resetGame);
//shows button
function showReset(){
        reset.textContent = ('New Game');
        reset.style.display = 'block';
}
//resets the page
function resetGame(){
    for(i=0; i < cells.length; i++){
        cells[i].innerHTML = (" ");
    }
    reset.style.display = "none";
    banner.style.display = "none";
    turns.textContent = "X starts";
    drawcounter = 0;
}
