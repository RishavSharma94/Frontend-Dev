const products = [
    { id: 1, name: "A", category: "Mobile", price: 10000, stock: 3 },
    { id: 2, name: "B", category: "Laptop", price: 40000, stock: 10 },
    { id: 3, name: "C", category: "Mobile", price: 8000, stock: 1 },
    { id: 4, name: "D", category: "TV", price: 30000, stock: 5 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
    return products.reduce((acc, p) => {
        acc[p.category] = acc[p.category] || [];
        acc[p.category].push(p);
        return acc;
    }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
