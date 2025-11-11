let marks = [85, 72, 90, 66, 55];

let total = 0;
let failCount = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
    if (marks[i] < 40) {
        failCount++;
    }
}

let average = total / marks.length;
let percentage = total; // total is out of 500, percentage same as average of 100 scale

let grade = "";

if (average >= 90) {
    grade = "A+";
} else if (average >= 75) {
    grade = "A";
} else if (average >= 60) {
    grade = "B";
} else if (average >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("------ Marks Analysis ------");
console.log("Marks: " + marks.join(", "));
console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);

if (failCount >= 2) {
    console.log("Result: Repeat Year");
} else if (grade === "Fail") {
    console.log("Result: Fail");
} else {
    console.log("Result: Pass");
}

console.log("----------------------------");
