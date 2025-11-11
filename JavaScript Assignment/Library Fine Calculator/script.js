let delayedDays = [3, 7, 12, 2]; // Days late for multiple books

let totalFine = 0;
let additionalPenalty = 0;

for (let i = 0; i < delayedDays.length; i++) {
    let days = delayedDays[i];
    let fine = 0;

    if (days >= 1 && days <= 5) {
        fine = days * 10;
    } else if (days >= 6 && days <= 10) {
        fine = days * 20;
    } else if (days >= 11) {
        fine = days * 50;
    }

    totalFine += fine;
    console.log("Book " + (i+1) + " - Days Late: " + days + ", Fine: ₹" + fine);
}

if (delayedDays.length > 3) {
    additionalPenalty = 200;
    totalFine += additionalPenalty;
    console.log("Additional penalty for more than 3 delayed books: ₹" + additionalPenalty);
}

console.log("------ Total Fine Summary ------");
console.log("Total Fine: ₹" + totalFine);
console.log("-------------------------------");
