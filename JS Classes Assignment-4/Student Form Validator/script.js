const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;

    if(!/^[A-Za-z\s]+$/.test(nameInput.value)){
        nameInput.classList.add("error");
        nameInput.classList.remove("success");
        nameError.textContent = "Name should contain only letters";
        valid = false;
    } else {
        nameInput.classList.remove("error");
        nameInput.classList.add("success");
        nameError.textContent = "";
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailInput.value)){
        emailInput.classList.add("error");
        emailInput.classList.remove("success");
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        emailError.textContent = "";
    }

    if(!/^[0-9]{10}$/.test(phoneInput.value)){
        phoneInput.classList.add("error");
        phoneInput.classList.remove("success");
        phoneError.textContent = "Phone must be 10 digits";
        valid = false;
    } else {
        phoneInput.classList.remove("error");
        phoneInput.classList.add("success");
        phoneError.textContent = "";
    }

    if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/.test(passwordInput.value)){
        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");
        passwordError.textContent = "Password must have 1 uppercase, 1 number, 1 special char";
        valid = false;
    } else {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
        passwordError.textContent = "";
    }

    if(valid){
        alert("Form submitted successfully!");
        form.reset();

        nameInput.classList.remove("success");
        emailInput.classList.remove("success");
        phoneInput.classList.remove("success");
        passwordInput.classList.remove("success");
    }
});
