function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water");
            } else {
                console.log("Water boiled");
                resolve();
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to brew coffee");
            } else {
                console.log("Coffee brewed");
                resolve();
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee");
            } else {
                console.log("Coffee poured into the cup");
                resolve();
            }
        }, Math.floor(Math.random() * 1000) + 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Error: " + error));
