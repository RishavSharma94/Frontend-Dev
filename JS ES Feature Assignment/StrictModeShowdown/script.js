console.log("Non-Strict Mode Run:");
function demoNonStrict(a, a) {
  total = 10;
  try { delete total; } catch (e) { console.log("Delete error:", e); }
  console.log("total =", total);
}
try {
  demoNonStrict(5, 10);
} catch (e) {
  console.log("Non-Strict Error:", e);
}

console.log("\nStrict Mode Run:");
"use strict";
function demoStrict(a, a) {
  total = 10;
  delete total;
}
try {
  demoStrict(5, 10);
} catch (e) {
  console.log("Strict Error:", e);
}

console.log("\nES6 Correct Version:");
function demoFixed(x, y) {
  let total = 10;
  console.log("total =", total);
}
demoFixed(5, 10);
