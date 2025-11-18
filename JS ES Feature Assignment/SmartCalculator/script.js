"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw "DivideByZeroError";
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw "NegativeRootError";
      return Math.sqrt(a);
    default:
      throw "InvalidOperationError";
  }
}

for (let op of operations) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`
Operation: ${op}
Result: ${result}
-------------------------`);
  } catch (err) {
    console.log(`
Operation: ${op}
Error: ${err}
-------------------------`);
  }
}
