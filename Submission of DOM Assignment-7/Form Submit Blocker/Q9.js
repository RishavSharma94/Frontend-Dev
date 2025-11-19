const form = document.getElementById("myForm")
const nameField = document.getElementById("name")
const emailField = document.getElementById("email")
const passField = document.getElementById("password")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passError = document.getElementById("passError")
const success = document.getElementById("success")

form.addEventListener("submit", function (e) {
  let ok = true

  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required"
    ok = false
  }

  if (!emailField.value.includes("@")) {
    emailError.textContent = "Invalid email"
    ok = false
  }

  if (passField.value.length < 6) {
    passError.textContent = "Min 6 characters"
    ok = false
  }

  if (!ok) {
    e.preventDefault()
    success.textContent = ""
  } else {
    e.preventDefault()
    success.textContent = "Form Submitted Successfully"
  }
})

nameField.addEventListener("input", () => nameError.textContent = "")
emailField.addEventListener("input", () => emailError.textContent = "")
passField.addEventListener("input", () => passError.textContent = "")
