import { hideLoaderWithDelay } from "./helpers/hideLoaderWithDelay";
import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { fadeOut } from "./helpers/invokeFadeOut";
import { ShowOrHidePrompt } from "./helpers/showOrHidePrompt";

const loaderContainer = document.getElementsByClassName("loader-container")[0];
let about_site = document.getElementsByClassName("right__link")[0];
const display_options = document.getElementsByClassName("options")[0];
const display_options_item = document.getElementsByClassName("options__item");
let display_options_item_array = Array.from(display_options_item);
const close_options = document.getElementsByClassName("close-btn")[0];
const open_options = document.getElementsByClassName("right__option")[0];
const open_about_button = document.getElementsByClassName("right__link")[0];
const open_projects_button = document.getElementsByClassName("button__hero")[0];
const prompt = document.getElementsByClassName("right__prompt")[0];

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();

window.addEventListener("load", () => {
  hideLoaderWithDelay(loaderContainer, 3);
});

window.addEventListener("resize", () => {
  documentHeight();
});

ShowOrHidePrompt(prompt);

if (localStorage.getItem("view_option") === "Advanced") {
  invokeTransitioner("index-complex.html");
} else {
  about_site.addEventListener("click", () => {
    invokeTransitioner("about.html");
  });

  if (sessionStorage.getItem("use_loader") == undefined) {
    sessionStorage.setItem("use_loader", true);
    display_options.style.opacity = 1;
  } else {
    loaderContainer.style.display = "none";
  }

  if (localStorage.getItem("options_setting") == undefined) {
    display_options.style.display = "grid";
    display_options.style.opacity = 1;
  } else {
    display_options.style.display = "none";
  }

  display_options_item_array.forEach((item) => {
    item.addEventListener("click", () => {
      localStorage.setItem(
        "view_option",
        item.querySelector("h1").childNodes[0].textContent
      );
      if (item.querySelector("h1").childNodes[0].textContent == "Advanced") {
        localStorage.setItem("options_setting", "set");
        invokeTransitioner("index-complex.html");
      } else {
        fadeOut(display_options, 1000);
        localStorage.setItem("options_setting", "set");
      }
    });
  });

  close_options.addEventListener("click", () => {
    fadeOut(display_options);
  });

  open_options.addEventListener("click", (e) => {
    window.getComputedStyle(display_options).opacity;
    e.preventDefault();
    display_options.style.display = "grid";
    setTimeout(() => {
      display_options.style.opacity = "1";
    }, 100);
  });

  open_about_button.addEventListener("click", () => {
    invokeTransitioner("about.html");
  });

  open_projects_button.addEventListener("click", (e) => {
    e.preventDefault();
    invokeTransitioner("projects.html");
  });

  prompt.addEventListener("click", () => {
    if (
      sessionStorage.getItem("prompt") === undefined ||
      sessionStorage.getItem("prompt") === null
    ) {
      sessionStorage.setItem("prompt", "closed");
      fadeOut(prompt, 1000);
    } else prompt.style.opacity = "0";
  });
}
