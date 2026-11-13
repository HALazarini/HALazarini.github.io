// Expand / collapse paper abstracts. The hint text follows the page language.
var isPt = (document.documentElement.lang || "").toLowerCase().indexOf("pt") === 0;
var hintClosed = isPt ? " (clique para expandir)" : " (click to expand)";
var hintOpen = isPt ? " (clique para recolher)" : " (click to collapse)";
document.querySelectorAll(".abs-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var abs = document.getElementById(btn.getAttribute("aria-controls"));
    var open = abs.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.querySelector(".hint").textContent = open ? hintOpen : hintClosed;
  });
});
