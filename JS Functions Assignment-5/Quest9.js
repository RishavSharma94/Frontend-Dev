class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

let student1 = new Student("Rishav", "CSE");
student1.showName();
student1.showBranch();

let student2 = new Student("Neha", "ECE");
student2.showName();
student2.showBranch();
