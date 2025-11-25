class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is working";
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the team";
    }
}

const e1 = new Employee("A", "IT");
const m1 = new Manager("B", "IT");

console.log(e1.work());
console.log(m1.work());
