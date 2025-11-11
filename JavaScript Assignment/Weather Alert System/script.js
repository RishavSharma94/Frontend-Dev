let temperature = 36;  // in °C
let humidity = 75;     // in %
let windSpeed = 20;    // in km/h

let alertMessage = "";
let adviceMessage = "";

// Check for weather alerts
if (temperature > 35 && humidity > 70) {
    alertMessage = "Cancel: Heat Alert.";
} else if (temperature < 10 || windSpeed > 40) {
    alertMessage = "Cancel: Cold/Windy Alert.";
} else {
    alertMessage = "Event Approved.";
}

// Temperature-based advice
if (temperature < 20) {
    adviceMessage = "Wear Jacket";
} else if (temperature <= 30) {
    adviceMessage = "Comfortable";
} else {
    adviceMessage = "Stay Hydrated";
}

// Display results
console.log("------ Weather Alert System ------");
console.log("Temperature: " + temperature + "°C");
console.log("Humidity: " + humidity + "%");
console.log("Wind Speed: " + windSpeed + " km/h");
console.log("Alert: " + alertMessage);
console.log("Advice: " + adviceMessage);
console.log("---------------------------------");
