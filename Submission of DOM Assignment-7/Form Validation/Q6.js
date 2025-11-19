function validateForm() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const result = document.getElementById("result")

  if (!email.includes("@") || password.length < 6) {
    result.textContent = "Invalid input"
  } else {
    result.textContent = "Valid input"
  }
}
