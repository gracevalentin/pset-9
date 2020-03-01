let grid = [];
let gameInPlay = false;

window.restart = ()=>{
 grid = [
 [{},{},{},{},{},{},{}],
 [{},{},{},{},{},{},{}],
 [{},{},{},{},{},{},{}],
 [{},{},{},{},{},{},{}],
 [{},{},{},{},{},{},{}],
];
 gameInPlay = true;
 render();
}

const render = ()=>{
 const svg = document.getElementById("svg");
 let doc = ``;
 for (var i = 0; i < grid.length; i++) {
   var row = grid[i];
   for (var j = 0; j < row.length; j++) {
     const square = grid[i][j];
     const color = square && square.color || 'gray';

 render();
