const menu = {
    burger: 120,
    pizza: 200,
    momos: 80,
    fries: 60
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(item + " not available");
            return menu[item];
        });

        const total = prices.reduce((a, b) => a + b, 0);
        return total;
    } catch (e) {
        return e.message;
    }
}

console.log(calculateBill(["burger", "fries"]));
console.log(calculateBill(["pizza", "pasta"]));
