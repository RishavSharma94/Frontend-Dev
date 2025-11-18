"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
  try {
    debugger;

    if (t === null) throw "Null transaction";
    if (!t.id || t.amount === undefined) throw "Missing id or amount";
    if (t.amount < 0) throw "Negative amount";

    valid.push(t);
  } catch (err) {
    invalid.push({ transaction: t, error: err });
  }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Count → Valid:", valid.length, "| Invalid:", invalid.length);
