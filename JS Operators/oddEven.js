let arr = []
let result = []

for (let i = 1; i <= 30; i++) arr.push(i)

for (let n of arr) {
    if (n % 3 === 0 && n % 5 === 0) result.push("FizzBuzz")
    else if (n % 2 === 0) result.push("Even")
    else result.push("Odd")
}

console.log(result)
