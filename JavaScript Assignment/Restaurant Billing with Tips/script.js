let baseCost = 2500;
let diningIn = true;

let gst = baseCost * 0.05;
let serviceTax = diningIn ? baseCost * 0.10 : 0;
let totalBeforeTip = baseCost + gst + serviceTax;

let tip = 0;
if (totalBeforeTip > 2000) {
    tip = totalBeforeTip * 0.08;
}

let finalTotal = totalBeforeTip + tip;
finalTotal = finalTotal.toFixed(2);

console.log("------ Restaurant Bill Summary ------");
console.log("Base Amount: ₹" + baseCost);
console.log("GST (5%): ₹" + gst);
console.log("Service Tax: ₹" + serviceTax);
console.log("Recommended Tip: ₹" + tip.toFixed(2));
console.log("Final Total: ₹" + finalTotal);
console.log("------------------------------------");
