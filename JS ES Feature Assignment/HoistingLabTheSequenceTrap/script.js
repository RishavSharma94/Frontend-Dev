"use strict";

try {
  console.log(score);
  announce();
  var score = 50;
  function announce() {
    console.log("Game started");
  }

  let status = "ready";
  startGame();
  function startGame() {
    console.log(status);
  }
} catch (err) {
  console.log("Original Error:", err);
}



function announceFixed() {
  console.log("Game started");
}

function startGameFixed(status) {
  console.log(status);
}

console.log("Fixed Run:");
var scoreFixed = 50;
announceFixed();
let statusFixed = "ready";
startGameFixed(statusFixed);


console.log("Arrow Function Run:");

var scoreArrow = 50;
const announceArrow = () => console.log("Game started");
const startGameArrow = (s) => console.log(s);

announceArrow();
let statusArrow = "ready";
startGameArrow(statusArrow);
