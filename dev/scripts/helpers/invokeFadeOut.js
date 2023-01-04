export function fadeOut(element, duration=1000) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.display = "none";
    }, duration);
}