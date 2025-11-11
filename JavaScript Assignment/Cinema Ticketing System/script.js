// ==============================
// Cinema Ticketing System
// ==============================

// Function to calculate ticket price
function calculateTicket(showTime, age, tickets) {
    // Step 1: Set base price based on show time
    let basePrice = 0;

    if (showTime.toLowerCase() === "morning") {
        basePrice = 120;
    } else if (showTime.toLowerCase() === "evening") {
        basePrice = 180;
    } else {
        console.log("Invalid show time! Use 'morning' or 'evening'.");
        return;
    }

    // Step 2: Calculate total base price for all tickets
    let totalBase = basePrice * tickets;

    // Step 3: Apply discount based on age
    let discount = 0;
    if (age <= 25) { // assuming student
        discount = totalBase * 0.10; // 10% discount
    } else if (age > 60) { // senior
        discount = totalBase * 0.20; // 20% discount
    }

    let discountedTotal = totalBase - discount;

    // Step 4: Add service fee if more than 3 tickets
    let serviceFee = 0;
    if (tickets > 3) {
        serviceFee = 50; // flat service fee
    }

    let finalAmount = discountedTotal + serviceFee;

    // Step 5: Print the results
    console.log("------ Cinema Ticket Summary ------");
    console.log("Show Time: " + showTime);
    console.log("Number of Tickets: " + tickets);
    console.log("Base Price per Ticket: ₹" + basePrice);
    console.log("Total Base Price: ₹" + totalBase);
    console.log("Discount: ₹" + discount);
    console.log("Price After Discount: ₹" + discountedTotal);
    console.log("Service Fee: ₹" + serviceFee);
    console.log("Final Amount to Pay: ₹" + finalAmount);
    console.log("----------------------------------");
}

// ==============================
// Test Cases
// ==============================
calculateTicket("morning", 20, 2);  // student, 2 tickets
calculateTicket("evening", 65, 4);  // senior, 4 tickets → service fee applies
calculateTicket("evening", 30, 1);  // normal adult, 1 ticket
