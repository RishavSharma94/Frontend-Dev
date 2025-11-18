const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let value of apiData) {
  const num = Number(value);
  const bool = Boolean(value);
  const str = String(value);

  const isValid = !isNaN(num) && value !== " " && value !== "NaN" && !String(value).includes("px");

  if (isValid) validNumbers.push(num);
  else invalidNumbers.push(value);

  console.log("Value:", value);
  console.log("Number:", num);
  console.log("Boolean:", bool);
  console.log("String:", str);
  console.log("Valid Number:", isValid);
  console.log("-------------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
