export function hideLoaderWithDelay(loaderContainer, seconds) {
  setTimeout(() => {
    getComputedStyle(loaderContainer).opacity;
    loaderContainer.style.opacity = 0;
    document.title = "Leo's Testing Ground | Home";
  }, seconds * 1000);

  setTimeout(() => {
    loaderContainer.remove();
  }, seconds * 1300);
}
