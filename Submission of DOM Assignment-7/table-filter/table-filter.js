const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#tableBody tr");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  let visible = 0;

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(query)) {
      row.style.display = "";
      visible++;
    } else {
      row.style.display = "none";
    }
  });

  noResult.style.display = visible === 0 ? "block" : "none";
});
