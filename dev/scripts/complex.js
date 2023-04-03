import { hideLoaderWithDelay } from "./helpers/hideLoaderWithDelay";
import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { fadeOut } from "./helpers/invokeFadeOut";
import "../styles/pages/_complexProjects.scss";
import { renderProjectForComplex } from "./helpers/renderProjectForComplex";
import { ShowOrHidePrompt } from "./helpers/showOrHidePrompt";
import { scrollIntoView } from "seamless-scroll-polyfill";

const imgUrl = new URL(
  "../images/calculator-project-image.png",
  import.meta.url
).href;
const imgUrl2 = new URL("../images/businesswebsitecover.png", import.meta.url)
  .href;
const imgUrl3 = new URL("../images/dadjokecover.png", import.meta.url).href;
const imgUrl4 = new URL("../images/leotgcover.png", import.meta.url).href;

const loaderContainer = document.getElementsByClassName("loader-container")[0];
const pages = Array.from(document.querySelectorAll(".complex-page"));
const close_options = document.getElementsByClassName("close-btn")[0];
const open_options = document.getElementsByClassName("right__option")[0];
const prompt = document.getElementsByClassName("right__prompt")[0];
const display_options = document.getElementsByClassName("options")[0];
const display_options_item = document.getElementsByClassName("options__item");
const project_add = document.getElementsByClassName(
  "projects__project--new"
)[0];
const about_me_button = document.getElementsByClassName("right__item-one")[0];
const description_close = Array.from(
  document.getElementsByClassName("description__close")
);

let display_options_item_array = Array.from(display_options_item);
let navigationBox = document.querySelectorAll(".complex-foo__navigation-item");
let project_covers = document.getElementsByClassName("project-cover__darken");

let transitioning = false;
let currentPage = 0;

const onPage = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (let j = 0; j < navigationBox.length; j++) {
        navigationBox[j].classList.remove("--active-link");
      }
      currentPage = pages.indexOf(entry.target);
      if (currentPage === 0) {
        navigationBox[0].classList.add("--active-link");
      }
      if (currentPage === 2) {
        navigationBox[1].classList.add("--active-link");
      }
      if (currentPage === 4) {
        navigationBox[2].classList.add("--active-link");
      }
      if (currentPage === 6) {
        navigationBox[3].classList.add("--active-link");
      }
      if (currentPage === 8) {
        navigationBox[4].classList.add("--active-link");
      }
    }
  });
};

const options = {
  rootMargin: "0px",
  threshold: 1.0,
};
const observer = new IntersectionObserver(onPage, options);

pages.forEach((page) => {
  observer.observe(page);
});

description_close.forEach((home) => {
  home.addEventListener("click", () => {
    pages[0].scrollIntoView();
    currentPage = 0;
  });
});

(function () {
  hideLoaderWithDelay(loaderContainer, 5);
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();

ShowOrHidePrompt(prompt);

for (let i = 1; i <= 4; i++) {
  renderProjectForComplex(i);
}

window.addEventListener("wheel", (e) => {
  if (e.ctrlKey || transitioning) return;

  transitioning = true;

  if (e.deltaY > 0) currentPage += 1;
  else currentPage -= 1;

  if (currentPage < 0) currentPage = 0;
  if (currentPage > pages.length - 1) currentPage = pages.length - 1;
  scrollIntoView(
    pages[currentPage],
    {
      behavior: "smooth",
      block: "start",
    },
    {
      duration: 10, // aprox. the duration that chrome uses,
    }
  );

  setTimeout(() => {
    transitioning = false;
  }, 200);
});

window.addEventListener("load", () => {
  hideLoaderWithDelay(loaderContainer, 3);
});

about_me_button.addEventListener("click", (e) => {
  e.preventDefault();
  invokeTransitioner("about.html");
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

prompt.addEventListener("click", () => {
  if (
    sessionStorage.getItem("prompt") === undefined ||
    sessionStorage.getItem("prompt") === null
  ) {
    sessionStorage.setItem("prompt", "closed");
    fadeOut(prompt, 1000);
  } else prompt.style.opacity = "0";
});

// scrollintoview js.

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
      setTimeout(() => {
        fadeOut(display_options, 1000);
      }, 500);
    } else {
      invokeTransitioner("index.html");
      localStorage.setItem("options_setting", "set");
    }
  });
});
navigationBox.forEach((box) => {
  box.addEventListener("click", () => {
    let index = Array.from(navigationBox).indexOf(box);
    console.log(index);
    pages[index + index].scrollIntoView();

    currentPage = index + index;
  });
});

project_add.addEventListener("click", () => {
  invokeTransitioner("new-project.html");
});

project_covers[0].style.backgroundImage = `url(${imgUrl})`;
project_covers[1].style.backgroundImage = `url(${imgUrl2})`;
project_covers[1].style.backgroundRepeat = "no-repeat";
project_covers[1].style.backgroundSize = "100% 95%";
project_covers[2].style.backgroundImage = `url(${imgUrl3})`;
project_covers[2].style.backgroundRepeat = "no-repeat";
project_covers[2].style.backgroundSize = "100% 95%";
project_covers[3].style.backgroundImage = `url(${imgUrl4})`;
project_covers[3].style.backgroundRepeat = "no-repeat";
project_covers[3].style.backgroundSize = "100% 95%";
