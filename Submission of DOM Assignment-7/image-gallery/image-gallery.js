const images = document.querySelectorAll(".image");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

images.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.style.display = "flex";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

modalContent.addEventListener("click", e => {
  e.stopPropagation();
});
