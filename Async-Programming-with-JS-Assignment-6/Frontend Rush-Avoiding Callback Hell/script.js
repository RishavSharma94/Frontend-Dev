function design(cb) {
    setTimeout(() => {
        console.log("Design completed");
        cb();
    }, 1000);
}

function build(cb) {
    setTimeout(() => {
        console.log("Build completed");
        cb();
    }, 1000);
}

function test(cb) {
    setTimeout(() => {
        console.log("Test completed");
        cb();
    }, 1000);
}

function deploy(cb) {
    setTimeout(() => {
        console.log("Deploy completed");
        cb();
    }, 1000);
}

function celebrate(cb) {
    setTimeout(() => {
        console.log("Celebrate 🎉");
        cb();
    }, 1000);
}

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {});
            });
        });
    });
});
