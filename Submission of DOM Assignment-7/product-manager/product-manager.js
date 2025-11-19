const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");
let editing = null;

addBtn.addEventListener("click", () => addProduct());
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addProduct();
});

function addProduct() {
  const value = input.value.trim();
  if (!value) return;
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="text">${value}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  list.appendChild(li);
  input.value = "";
}

list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("edit")) {
    enterEdit(e.target.parentElement);
  }
});

function enterEdit(li) {
  if (editing && editing !== li) save(editing);
  editing = li;
  const textSpan = li.querySelector(".text");
  const inputBox = document.createElement("input");
  inputBox.className = "editBox";
  inputBox.value = textSpan.textContent;
  textSpan.replaceWith(inputBox);
  inputBox.focus();
}

function save(li) {
  const box = li.querySelector(".editBox");
  if (!box) return;
  const span = document.createElement("span");
  span.className = "text";
  span.textContent = box.value.trim() || "Unnamed";
  box.replaceWith(span);
  editing = null;
}

document.addEventListener("click", e => {
  if (!editing) return;
  if (!editing.contains(e.target)) save(editing);
});
