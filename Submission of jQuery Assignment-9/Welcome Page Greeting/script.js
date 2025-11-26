let greet = document.getElementById("greet");
let welcome = document.getElementById("welcomeMsg");

function setGreeting() {
    let h = new Date().getHours();
    if (h < 12) {
        greet.textContent = "Good Morning";
    } else if (h < 18) {
        greet.textContent = "Good Afternoon";
    } else {
        greet.textContent = "Good Evening";
    }
}

setGreeting();

document.getElementById("changeBtn").onclick = function() {
    greet.textContent = "Keep going, you're doing great!";
}

document.getElementById("toggleBtn").onclick = function() {
    if (welcome.style.display === "none") {
        welcome.style.display = "block";
    } else {
        welcome.style.display = "none";
    }
}

greet.onclick = function() {
    alert("Greeting clicked!");
}
