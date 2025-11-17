let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30)

let high = Math.max(...scores)
let low = Math.min(...scores)
let avg = scores.reduce((a, b) => a + b, 0) / scores.length
let passed = scores.filter(s => s >= 50).length

console.log("Scores:", scores)
console.log("Highest:", high)
console.log("Lowest:", low)
console.log("Average:", avg)
console.log("Passed:", passed)
