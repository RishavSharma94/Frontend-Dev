const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const finish = document.getElementById("finish");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

const summary = document.getElementById("summary");

next1.addEventListener("click", () => {
  if (!nameInput.value.trim()) return;
  step1.classList.remove("active");
  step2.classList.add("active");
});

next2.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (!email || !email.includes("@")) return;
  step2.classList.remove("active");
  step3.classList.add("active");
});

finish.addEventListener("click", () => {
  if (passwordInput.value.trim().length < 6) return;
  step3.classList.remove("active");

  summary.textContent =
    "Name: " + nameInput.value +
    " | Email: " + emailInput.value +
    " | Password: " + passwordInput.value;
});

back1.addEventListener("click", () => {
  step2.classList.remove("active");
  step1.classList.add("active");
});

back2.addEventListener("click", () => {
  step3.classList.remove("active");
  step2.classList.add("active");
});
