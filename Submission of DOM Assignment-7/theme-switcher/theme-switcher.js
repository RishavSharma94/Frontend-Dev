const buttons = document.querySelectorAll("button");
const body = document.body;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-set");
    body.setAttribute("data-theme", theme);
  });
});
