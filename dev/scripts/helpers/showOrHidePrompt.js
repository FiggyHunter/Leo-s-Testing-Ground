export function ShowOrHidePrompt(prompt) {
  document.addEventListener("DOMContentLoaded", () => {
    console.log(sessionStorage.getItem("prompt"));
    if (
      sessionStorage.getItem("prompt") !== undefined &&
      sessionStorage.getItem("prompt") !== null
    )
      prompt.style.display = "none";
  });
}
