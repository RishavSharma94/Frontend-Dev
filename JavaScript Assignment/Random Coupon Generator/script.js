function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let couponNumber = Math.floor(Math.random() * 100) + 1;
let message = "";

if (couponNumber <= 30) {
    message = "You won a 10% discount";
} else if (couponNumber <= 60) {
    message = "You won a 20% discount";
} else if (couponNumber <= 90) {
    message = "You won a 30% discount";
} else {
    message = "You won a 50% Mega Offer!";
}

console.log("------ Random Coupon ------");
console.log("Coupon Number: " + couponNumber);
console.log("Reward: " + message);

if (isPrime(couponNumber)) {
    console.log("Prime number bonus applied");
}

console.log("---------------------------");
