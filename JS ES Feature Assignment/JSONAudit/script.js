"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNo = i + 1;
  const entry = rawData[i];

  try {
    debugger;
    const parsed = JSON.parse(entry);

    if (!parsed.user || parsed.age === undefined) {
      throw new Error("Missing key(s): required keys are 'user' and 'age'");
    }

    const ageNum = Number(parsed.age);
    if (isNaN(ageNum)) throw new Error("Invalid age: not a number");

    const cleanEntry = { user: parsed.user, age: ageNum };
    cleanData.push(cleanEntry);

    if (ageNum < 18) under18.push(cleanEntry);

    console.log(`Line ${lineNo}: Parsed OK → ${JSON.stringify(cleanEntry)}`);
    debugger;
  } catch (err) {
    const errObj = { line: lineNo, raw: entry, error: String(err) };
    errors.push(errObj);
    console.log(`Line ${lineNo}: Error → ${errObj.error}`);
    debugger;
  }
}

console.log("\n--- Final Report ---");
console.log(`Total entries: ${rawData.length}`);
console.log(`Valid entries: ${cleanData.length}`);
console.log(`Errors: ${errors.length}`);
console.log("Clean Data:", cleanData);
console.log("Errors (detailed):", errors);
console.log("Under-18 users:", under18);
