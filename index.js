let gridWidth = 960;
let gridHeight = 960;
let divsHorizontal = 16;
let divsVertical = 16;
let divSpacing = 2;
let divBorderThickness = 1;

let divWidthFull = Math.floor((gridWidth - (divSpacing * 2)) / (divsHorizontal));
let divWidth = divWidthFull - (divBorderThickness * 2) - (divSpacing * 2);
let divHeightFull = Math.floor((gridHeight - (divSpacing * 2)) / (divsVertical));;
let divHeight = divHeightFull - (divBorderThickness * 2) - (divSpacing * 2);

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.flexDirection = 'column';

let buttonContainer = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.gap = '10px';

let resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', reset);
buttonContainer.appendChild(resetButton);

container.appendChild(buttonContainer);

let divGrid = document.createElement('div');
divGrid.style.display = 'flex';
divGrid.style.justifyContent = 'center';
divGrid.style.flexWrap = 'wrap';
divGrid.style.flexShrink = '0';
divGrid.style.flexGrow = '0';
divGrid.style.width = `${gridWidth}px`;
divGrid.style.height = `${gridHeight}px`;
container.appendChild(divGrid);

for(let i = 0; i < (divsHorizontal * divsVertical); i++){
    let square = document.createElement('div');

    square.style.border = `solid ${divBorderThickness}px black`;

    square.style.minWidth = `${divWidth}px`;
    square.style.minHeight = `${divHeight}px`;
    square.style.margin = `${divSpacing}px`;

    square.style.flexShrink = `0`;
    square.style.flexGrow = `0`;

    square.classList.add('div-square');
    square.addEventListener('mouseenter', cursorEnteredSquare);

    divGrid.appendChild(square);
}

function reset() {
    let divSquares = document.querySelectorAll('.div-square');
    divSquares.forEach(divSquare => { divSquare.style.backgroundColor = 'white'; })
}

function cursorEnteredSquare(e) {
    e.target.style.backgroundColor = 'black';
}