(function () {
  var dialog = document.getElementById("viewer");
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".masonry .open"));
  if (!dialog || !buttons.length) return;
  var img = dialog.querySelector("img");
  var cap = dialog.querySelector(".cap");
  var current = 0;

  function show(i) {
    current = (i + buttons.length) % buttons.length;
    var b = buttons[current];
    img.src = b.dataset.full;
    img.alt = b.querySelector("img").alt;
    cap.textContent = b.dataset.caption;
  }
  buttons.forEach(function (b, i) {
    b.addEventListener("click", function () { show(i); dialog.showModal(); });
  });
  dialog.querySelector(".close").addEventListener("click", function () { dialog.close(); });
  dialog.querySelector(".prev").addEventListener("click", function () { show(current - 1); });
  dialog.querySelector(".next").addEventListener("click", function () { show(current + 1); });
  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
})();
