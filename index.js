let gridWidth = 960;
let gridHeight = 960;
let divsHorizontal = 16;
let divsVertical = 16;
let divSpacing = 0;
let divBorderThickness = 1;

let divWidthFull;
let divWidth;
let divHeightFull;
let divHeight;

let colourMode = 0;
let squaresColoured = 0;

calculateDivSquareSize();

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.flexDirection = 'column';
container.style.gap = '10px';

let buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '10px';

let resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.style.minWidth = '240px';
resetButton.style.padding = '6px 20px';
resetButton.addEventListener('click', reset);
buttonContainer.appendChild(resetButton);

let changeSizeButton = document.createElement('button');
changeSizeButton.textContent = 'Change Grid Size';
changeSizeButton.style.minWidth = '240px';
changeSizeButton.addEventListener('click', changeGridSize);
buttonContainer.appendChild(changeSizeButton);

let colourModeButton = document.createElement('button');
colourModeButton.textContent = 'Colour Mode: White to Black';
colourModeButton.style.minWidth = '240px';
colourModeButton.addEventListener('click', changeColourMode);
buttonContainer.appendChild(colourModeButton);

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

createGrid();

function calculateDivSquareSize() {
    divWidthFull = Math.floor((gridWidth - (divSpacing * 2)) / (divsHorizontal));
    divWidth = divWidthFull - (divBorderThickness * 2) - (divSpacing * 2);
    divHeightFull = Math.floor((gridHeight - (divSpacing * 2)) / (divsVertical));;
    divHeight = divHeightFull - (divBorderThickness * 2) - (divSpacing * 2);
}

function createGrid() {
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
}

function reset() {
    let divSquares = document.querySelectorAll('.div-square');
    divSquares.forEach(divSquare => { divSquare.style.backgroundColor = 'white'; })
    squaresColoured = 0;
}

function changeGridSize() {
    let width, height;
    while(true){
        width = prompt("Type the number of squares to have horizontally (limit of 100):");
        if(width == null){ return; }
        width = parseInt(width);
        if(isNaN(width)){ console.log("here"); continue; }
        if(width < 1 || width > 100){ continue; }
        break;
    }
    while(true){
        height = prompt("Type the number of squares to have vertically (limit of 100):");
        if(height == null){ return; }
        height = parseInt(height);
        if(isNaN(height)){ console.log("here"); continue; }
        if(height < 1 || height > 100){ continue; }
        break;
    }
    divsHorizontal = width;
    divsVertical = height;

    let divSquares = document.querySelectorAll('.div-square');
    divSquares.forEach(divSquare => { divGrid.removeChild(divSquare); })

    calculateDivSquareSize();

    let newWidth = divWidthFull * divsHorizontal;
    let newHeight = divHeightFull * divsVertical;
    divGrid.style.width = `${newWidth}px`;
    divGrid.style.height = `${newHeight}px`;

    createGrid();

    squaresColoured = 0;
}

function changeColourMode(e) {
    colourMode = (colourMode + 1) % 3;
    switch(colourMode){
        case 0: e.target.textContent = 'Colour Mode: White to Black'; break;
        case 1: e.target.textContent = 'Colour Mode: Fade to Black'; break;
        case 2: e.target.textContent = 'Colour Mode: Random Colours'; break;
    }
}

function cursorEnteredSquare(e) {
    switch(colourMode){
        case 0:
            e.target.style.backgroundColor = 'black';
            break;
        case 1:
            let fadeToBlack = 255 * (Math.max(0, 10 - squaresColoured) / 10);
            e.target.style.backgroundColor = `rgb(${fadeToBlack}, ${fadeToBlack}, ${fadeToBlack})`;
            break;
        case 2:
            e.target.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
            break;
    }
    squaresColoured++;
}

function randomRGBValue(num) {
    return Math.floor(Math.random() * 256);
}