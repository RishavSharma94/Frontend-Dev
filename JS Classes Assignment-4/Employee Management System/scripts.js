class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }

    displayDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Department: ${this.department}, Salary: ₹${this.salary}`);
    }
}

let emp1 = new Employee(1, "Rishav", "IT", 50000);
let emp2 = new Employee(2, "Amit", "HR", 40000);
let emp3 = new Employee(3, "Neha", "Finance", 45000);
let emp4 = new Employee(4, "Sonia", "Marketing", 42000);
let emp5 = new Employee(5, "Rahul", "IT", 48000);

let employees = [emp1, emp2, emp3, emp4, emp5];

emp1.applyBonus(10);
emp3.applyBonus(5);

employees.forEach(emp => {
    console.log(`${emp.name} Annual Salary: ₹${emp.getAnnualSalary()}`);
});

let totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`\nTotal Annual Payout of Company: ₹${totalPayout}`);
