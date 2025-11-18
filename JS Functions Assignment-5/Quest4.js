function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
}

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();
