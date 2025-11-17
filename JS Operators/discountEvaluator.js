const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
]

let total = 0

for (let c of cart) {
    let price = c.price
    if (c.category === "electronics") price *= 0.9
    if (c.category === "fashion") price *= 0.95
    total += price
}

if (total > 50000) total *= 0.95

console.log("Final Total:", total)
