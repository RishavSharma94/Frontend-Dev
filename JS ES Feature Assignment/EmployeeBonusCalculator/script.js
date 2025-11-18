"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let emp of employees) {
  try {
    if (!emp.name || !emp.salary || !emp.years) throw "Missing property";

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) throw "Invalid numeric data";

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(`
Employee: ${emp.name}
Salary: ${salary}
Years: ${years}
Bonus: ${bonus}
------------------------------`);
  } catch (err) {
    console.log(`Error for employee: ${emp.name || "Unknown"} → ${err}`);
  }
}
