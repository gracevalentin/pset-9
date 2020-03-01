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

      doc = doc + `<circle onclick="clickSquare(${j},${i})" fill='${color}' r='30px' cx='${j * 70 + 50}px' cy='${i * 70 + 50}px'></circle>`;

    }
  }
  svg.innerHTML = doc;
};

let currentColor = 'red';
window.clickSquare = (x,y)=>{
  if (!gameInPlay) {
    return;
  }
   for (var i = grid.length - 1; i >= 0; i--) {
    var row = grid[i];
    var targetPlace = row[x];
     if (!targetPlace.color) {
       row[x] = {color:currentColor};
       currentColor = currentColor === "red" ? "black" : "red";
       render();
       calculateWinners();
       return;
    }
  }
}

function calculateWinners(){
  console.log("Is there a winner?");
  for (var i = 0; i < grid.length; i++) {
    var row = grid[i];
     for (var j = 0; j < row.length; j++) {
       var square =  grid[i][j];
       if (square && square.color) {
         if (i === 0 || i === 1) {
           if (grid[i + 1][j].color === square.color &&
              grid[i + 2][j].color === square.color &&
              grid[i + 3][j].color === square.color) {
                aColorWins(square.color);

                return;
            }
          }
