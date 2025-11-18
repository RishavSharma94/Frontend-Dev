function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed");
            } else {
                resolve("Server A done");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed");
            } else {
                resolve("Server B done");
            }
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch(error => {
        console.log("Error in deployment:", error);
    });

Promise.race([serverA(), serverB()])
    .then(first => {
        console.log("Fastest response:", first);
    })
    .catch(error => {
        console.log("Error in race:", error);
    });
