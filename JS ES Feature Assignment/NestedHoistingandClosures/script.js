"use strict";

console.log("Original Run:");
function outer() {
  debugger;
  console.log(count);
  var count = 5;
  function inner() {
    debugger;
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();

console.log("\nFixed Version:");
function outerFixed() {
  debugger;
  let count = 5;
  function innerFixed() {
    debugger;
    let count = 10;
    console.log(count);
  }
  console.log(count);
  innerFixed();
}
outerFixed();

console.log("\nArrow Function Version:");
function outerArrow() {
  debugger;
  let count = 5;
  const innerArrow = () => {
    debugger;
    console.log(count);
  };
  console.log(count);
  innerArrow();
}
outerArrow();
