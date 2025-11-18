function randomDelay() {
    return Math.floor(Math.random() * 1000) + 1000; // 1–2 seconds
}

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed at takeOrder");
            else resolve("Order taken");
        }, randomDelay());
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed at prepare");
            else resolve("Food prepared");
        }, randomDelay());
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed at pack");
            else resolve("Package ready");
        }, randomDelay());
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed at dispatch");
            else resolve("Out for delivery");
        }, randomDelay());
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Failed at deliver");
            else resolve("Delivery completed!");
        }, randomDelay());
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        const step1 = await takeOrder();
        console.log("Step 1:", step1);

        const step2 = await prepare();
        console.log("Step 2:", step2);

        const step3 = await pack();
        console.log("Step 3:", step3);

        const step4 = await dispatch();
        console.log("Step 4:", step4);

        const step5 = await deliver();
        console.log(step5);

    } catch (error) {
        console.log("Pipeline failed!");
    }
}

runPipeline();

