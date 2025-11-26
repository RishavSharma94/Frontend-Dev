let items = document.querySelectorAll(".product");

items.forEach(function(p) {
    p.addEventListener("click", function(e) {
        if (e.target.classList.contains("fav")) return;

        if (p.getAttribute("data-stock") === "out") {
            alert("Product is out of stock");
            return;
        }

        items.forEach(function(x) {
            x.classList.remove("highlight");
        });

        p.classList.add("highlight");
    });

    p.querySelector(".fav").onclick = function() {
        this.classList.toggle("selected");
    };
});
