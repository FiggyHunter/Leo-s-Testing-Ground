export function ShowOrHidePrompt(prompt) {
  document.addEventListener("DOMContentLoaded", () => {
    if (
      sessionStorage.getItem("prompt") !== undefined &&
      sessionStorage.getItem("prompt") !== null
    )
      prompt.style.display = "none";
  });
}
