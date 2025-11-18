const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    if(usernameInput.value.length < 5) {
        usernameInput.classList.add("error");
        usernameInput.classList.remove("success");
        usernameError.textContent = "Username must be at least 5 characters";
        valid = false;
    } else {
        usernameInput.classList.remove("error");
        usernameInput.classList.add("success");
        usernameError.textContent = "";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if(!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");
        passwordError.textContent = "Password must be 8+ chars with uppercase, lowercase, number & special char";
        valid = false;
    } else {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
        passwordError.textContent = "";
    }

    if(valid) {
        messageDiv.style.color = "green";
        messageDiv.textContent = "Login Successful!";
        form.reset();
        usernameInput.classList.remove("success");
        passwordInput.classList.remove("success");
    } else {
        messageDiv.style.color = "red";
        messageDiv.textContent = "";
    }
});
