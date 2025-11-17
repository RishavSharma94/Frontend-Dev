const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
]

for (let d of departments) {
    let name = d[0]
    let score = d[1]

    if (score >= 90) console.log(name, "Excellent")
    else if (score >= 75) console.log(name, "Good")
    else if (score >= 60) console.log(name, "Average")
    else console.log(name, "Needs Improvement")
}
