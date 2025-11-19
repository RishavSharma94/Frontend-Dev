const box = document.getElementById("textBox");
const count = document.getElementById("count");
const resetBtn = document.getElementById("resetBtn");
const max = 100;

box.addEventListener("input", () => {
  const remaining = max - box.value.length;
  count.textContent = remaining + " characters left";

  count.className = "";
  if (remaining <= 20 && remaining > 0) count.classList.add("yellow");
  if (remaining === 0) count.classList.add("red");
});

box.addEventListener("keydown", e => {
  if (box.value.length >= max && e.key.length === 1) e.preventDefault();
});

resetBtn.addEventListener("click", () => {
  box.value = "";
  count.textContent = "100 characters left";
  count.className = "";
});
