let count = 0

function increment() {
    count++
    console.log(count)
}

function decrement() {
    count--
    console.log(count)
}

function simulate() {
    function inner() {
        count += 2
        console.log(count)
    }
    inner()
}

increment()
increment()
decrement()
simulate()
