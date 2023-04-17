let gridWidth = 16;
let gridHeight = 16;
let divWidth = 10;
let divHeight = 10;
let divSpacing = 2;

let container = document.querySelector(".container");
container.style.display = 'flex';

for(let i = 0; i < (gridWidth * gridHeight); i++){
    let square = document.createElement('div');

    square.style.border = 'solid 1px black';

    square.style.minWidth = `${divWidth}px`;
    square.style.minHeight = `${divHeight}px`;
    square.style.margin = `${divSpacing}px`;

    container.appendChild(square);
}