let baseSalary = 120000;
let rating = 5;
let experience = 6;

let bonusPercentage = 0;

if (rating === 5) {
    bonusPercentage = 20;
} else if (rating === 4) {
    bonusPercentage = 15;
} else if (rating === 3) {
    bonusPercentage = 10;
} else {
    bonusPercentage = 0;
}

if (experience > 5) {
    bonusPercentage += 5;
}

let calculatedBonus = (baseSalary * bonusPercentage) / 100;

let cappedBonus = calculatedBonus;
if (baseSalary > 100000 && calculatedBonus > 25000) {
    cappedBonus = 25000;
}

let totalSalary = baseSalary + cappedBonus;

console.log("------ Employee Bonus Summary ------");
console.log("Base Salary: ₹" + baseSalary);
console.log("Calculated Bonus: ₹" + calculatedBonus.toFixed(2));
console.log("Capped Bonus: ₹" + cappedBonus.toFixed(2));
console.log("Total Salary after Bonus: ₹" + totalSalary.toFixed(2));
console.log("-----------------------------------");
