// ==============================
// Delivery Estimator Script
// ==============================

// Function to calculate delivery fee and time
function calculateDelivery(orderAmount, isPremium, addressType) {
    // Initialize delivery fee
    let deliveryFee = 0;

    // Rule 1: Add delivery fee if order < 500
    if (orderAmount < 500) {
        deliveryFee = 50;
    }

    // Rule 2: Waive fee for premium members
    if (isPremium) {
        deliveryFee = 0;
    }

    // Rule 3: Base delivery time
    let deliveryTime = 3; // 3 days normally

    // Add extra days for remote address
    if (addressType.toLowerCase() === "remote") {
        deliveryTime += 2; // Add 2 extra days
    }

    // Log the results in console
    console.log("------ Delivery Summary ------");
    console.log("Order Amount: ₹" + orderAmount);
    console.log("Premium Member: " + (isPremium ? "Yes" : "No"));
    console.log("Address Type: " + addressType);
    console.log("Delivery Fee: ₹" + deliveryFee);
    console.log("Estimated Delivery Time: " + deliveryTime + " days");
    console.log("------------------------------");
}

// ==============================
// Test Cases
// ==============================

// Case 1: Normal user, order < 500, normal address
calculateDelivery(400, false, "normal");

// Case 2: Premium member, order < 500, remote address
calculateDelivery(300, true, "remote");

// Case 3: Normal user, order > 500, remote address
calculateDelivery(600, false, "remote");

// Case 4: Premium member, order > 500, normal address
calculateDelivery(1000, true, "normal");
