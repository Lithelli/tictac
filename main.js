let cells = document.querySelectorAll('.cell');
let currentPlayerSymbol = "X";
let counter = 0;
let banner = document.querySelector('.banner')
let reset = document.getElementById('reset')

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

function cellClicked(e) {
    if (e.target.textContent == "X" || e.target.textContent == "O") {
        alert("filled");
        return;
    } else {
        e.target.textContent = currentPlayerSymbol;
    }
    if (winnerCheck() == true) {
        return winnerCheck(), clearBoard();
    } else if (draw() == true) {
        return draw(), clearBoard();
    };
    checkTurn();
        //  clearBoard();  
}
//shifts between turns
function checkTurn() {
    if (currentPlayerSymbol == "X") {
        currentPlayerSymbol = "O";
    } else {
        currentPlayerSymbol = "X";
    }
}

let drawcounter = 0;
// counts up to 9 then prints "Draw" if accidental click it will print early
function draw() {
    drawcounter++;
    if (drawcounter == 9) {
        banner.textContent = (`Draw`);
        banner.style.display = "block";
        drawcounter = 0;
    }
}
// checks for winner through two loops.
function winnerCheck() {
    for (i = 0; i < winCombos.length; i++) {
        counter = 0;
        var wins = winCombos[i].length;
        for (var j = 0; j < wins; j++) {
            cells = winCombos[i][j].textContent;
            console.log(cells, "cells")
            if (cells == currentPlayerSymbol) {
                counter++;
            }
            if (counter == 3) {
                banner.textContent = (currentPlayerSymbol + " is the Winner!");
                banner.style.display = "block"
                return true;
            }
        }
    }
}
reset.addEventListener("click", changeText);

function clearBoard(){
    // if(winnerCheck() == true){
        reset.textContent = ('New Game');
        reset.style.display = 'block';
    // }
}

function changeText(cells){
    for(i=0; i < cells; i++){
        cells[i].innerHTML = (" ");
    }
}

//what am i doing wrong??????