let gridWidth = 16;
let gridHeight = 16;
let divWidth = 10;
let divHeight = 10;
let divSpacing = 2;
let divBorderThickness = 2;
let divGridWidth = ((gridWidth * divWidth) +
                    (gridWidth * divBorderThickness) +
                    Math.max(0, ((gridWidth - 1) * (divSpacing * 2))) +
                    (divSpacing * 2));

let container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'center';

let divGrid = document.createElement('div');
divGrid.style.display = 'flex';
divGrid.style.justifyContent = 'center';
divGrid.style.flexWrap = 'wrap';
divGrid.style.border = 'solid 1px black';
divGrid.style.width = `${divGridWidth}px`;
container.appendChild(divGrid);

for(let i = 0; i < (gridWidth * gridHeight); i++){
    let square = document.createElement('div');

    square.style.border = 'solid 1px black';

    square.style.minWidth = `${divWidth}px`;
    square.style.minHeight = `${divHeight}px`;
    square.style.margin = `${divSpacing}px`;

    square.style.flexShrink = `0`;
    square.style.flexGrow = `0`;

    divGrid.appendChild(square);
}