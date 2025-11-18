function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Failed");
            } else {
                resolve("Success");
            }
        }, 500);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${i}: ${result}`);
            return;
        } catch (error) {
            console.log(`Attempt ${i}: ${error}`);
            if (i === 3) {
                throw new Error("Order could not be processed");
            }
        }
    }
}

(async () => {
    try {
        await processOrder();
        console.log("Order processed successfully");
    } catch (error) {
        console.log(error.message);
    }
})();
