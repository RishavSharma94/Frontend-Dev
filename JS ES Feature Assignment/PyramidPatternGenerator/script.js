"use strict";

function getLimit() {
  var input = prompt("Enter pyramid size (default 5):");
  var n = Number(input);
  if (!input || isNaN(n) || n <= 0) {
    return 5;
  }
  return Math.floor(n);
}

var limit = getLimit();

console.log("Generate pyramid sample (each line shows stars separated by space)");
console.log("Outer loop limit:", limit);

console.log("\nSynchronous pyramid (using let):");
(function() {
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
    debugger;
  }
})();

console.log("\nSynchronous pyramid (using var):");
(function() {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
    debugger;
  }
})();

console.log("\nAsynchronous demonstration (shows differences when using let vs var in closures)");
(function() {
  console.log("-> Using let for loop counter (each timeout captures its own i):");
  for (let i = 1; i <= limit; i++) {
    (function(ii) {
      setTimeout(function() {
        var line = "";
        for (var k = 1; k <= ii; k++) {
          line += "* ";
        }
        console.log("let closure:", line.trim());
      }, ii * 100);
    })(i);
  }

  setTimeout(function() {
    console.log("-> Using var for loop counter (timeouts capture same i, shows reuse issue):");
    for (var i = 1; i <= limit; i++) {
      setTimeout(function() {
        var line = "";
        for (var k = 1; k <= i; k++) {
          line += "* ";
        }
        console.log("var closure:", line.trim());
      }, i * 100);
    }
  }, (limit + 1) * 150);
})();
