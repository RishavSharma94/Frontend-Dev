let name1 = " wireless headphones PRO "
let cleaned = name1.trim().toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
cleaned = cleaned.replace("Pro", "Pro Edition")
console.log(cleaned)
console.log(cleaned.length)
