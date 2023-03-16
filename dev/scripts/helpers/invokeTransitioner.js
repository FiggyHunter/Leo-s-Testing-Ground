export function invokeTransitioner(location) {
  let transitioner = document.createElement("div");
  transitioner.id = "transitioner";
  document.body.insertBefore(transitioner, document.body.firstChild);
  window.getComputedStyle(transitioner).opacity;
  setTimeout((transitioner.style.opacity = 1), 500);
  setTimeout(() => {
    window.location = location;
  }, 800);
}
