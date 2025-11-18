class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        this.price = this.price - (this.price * discountPercent / 100);
    }

    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

let product1 = new Product(1, "Laptop", 50000, "Electronics");
let product2 = new Product(2, "Book", 500, "Stationery");
let product3 = new Product(3, "Smartphone", 15000, "Electronics");
let product4 = new Product(4, "Headphones", 1200, "Accessories");

product1.applyDiscount(10);

let products = [product1, product2, product3, product4];

console.log("All Products:");
products.forEach(product => {
    console.log(product.displayDetails());
});

let expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts with price > 1000:");
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});
