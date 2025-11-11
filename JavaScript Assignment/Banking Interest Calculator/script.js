// ==============================
// Banking Interest Calculator
// ==============================

// Function to calculate final balance
function calculateInterest(accountType, amount, years) {
    // Initialize base interest rate
    let rate = 0;

    // Rule 1: Determine base rate based on account type
    if (accountType.toLowerCase() === "savings") {
        rate = 4; // Savings account
    } else if (accountType.toLowerCase() === "fixed deposit") {
        rate = 6.5; // Fixed deposit
    } else {
        console.log("Invalid account type! Use 'savings' or 'fixed deposit'.");
        return;
    }

    // Rule 2: Extra 1% bonus for deposit > 1,00,000
    if (amount > 100000) {
        rate += 1;
    }

    // Rule 3: Calculate final balance using compound interest formula
    // total = amount * (1 + rate/100)^years
    let total = amount * Math.pow((1 + rate / 100), years);

    // Round to 2 decimal places
    total = total.toFixed(2);

    // Log the results in console
    console.log("------ Banking Interest Summary ------");
    console.log("Account Type: " + accountType);
    console.log("Principal Amount: ₹" + amount);
    console.log("Annual Interest Rate: " + rate + "%");
    console.log("Years: " + years);
    console.log("Final Balance: ₹" + total);
    console.log("------------------------------------");
}

// ==============================
// Test Cases
// ==============================
calculateInterest("savings", 50000, 3);          // Savings account, < 1L
calculateInterest("fixed deposit", 150000, 5);   // Fixed deposit, > 1L
calculateInterest("savings", 200000, 2);         // Savings account, > 1L
calculateInterest("fixed deposit", 90000, 4);    // Fixed deposit, < 1L
