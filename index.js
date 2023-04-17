let gridWidth = 960;
let gridHeight = 960;
let divsHorizontal = 16;
let divsVertical = 16;
let divWidth = 10;
let divHeight = 10;
let divSpacing = 2;
let divBorderThickness = 2;
let divGridWidth = ((divsHorizontal * divWidth) +
                    (divsHorizontal * divBorderThickness) +
                    Math.max(0, ((divsHorizontal - 1) * (divSpacing * 2))) +
                    (divSpacing * 2));

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';

let divGrid = document.createElement('div');
divGrid.style.display = 'flex';
divGrid.style.justifyContent = 'center';
divGrid.style.flexWrap = 'wrap';
divGrid.style.width = `${divGridWidth}px`;
container.appendChild(divGrid);

for(let i = 0; i < (divsHorizontal * divsVertical); i++){
    let square = document.createElement('div');

    square.style.border = 'solid 1px black';

    square.style.minWidth = `${divWidth}px`;
    square.style.minHeight = `${divHeight}px`;
    square.style.margin = `${divSpacing}px`;

    square.style.flexShrink = `0`;
    square.style.flexGrow = `0`;

    square.addEventListener('mouseenter', cursorEnteredSquare);

    divGrid.appendChild(square);
}

function cursorEnteredSquare(e) {
    e.target.style.backgroundColor = 'black';

}