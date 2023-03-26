import hideLoaderWithDelay from "./helpers/hideLoaderWithDelay";
import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { fadeOut } from "./helpers/invokeFadeOut";
import "../styles/pages/_complexProjects.scss";
import { renderProjectForComplex } from "./helpers/renderProjectForComplex";

const imgUrl = new URL(
  "../images/calculator-project-image.png",
  import.meta.url
).href;
const imgUrl2 = new URL("../images/businesswebsitecover.png", import.meta.url)
  .href;
const imgUrl3 = new URL("../images/dadjokecover.png", import.meta.url).href;
const imgUrl4 = new URL("../images/leotgcover.png", import.meta.url).href;

const loaderContainer = document.getElementsByClassName("loader-container")[0];
const container = document.querySelector(".complex-container");
const pages = document.querySelectorAll(".complex-page");
const close_options = document.getElementsByClassName("close-btn")[0];
const open_options = document.getElementsByClassName("right__option")[0];
const prompt = document.getElementsByClassName("right__prompt")[0];
const display_options = document.getElementsByClassName("options")[0];
const display_options_item = document.getElementsByClassName("options__item");
const project_add = document.getElementsByClassName(
  "projects__project--new"
)[0];
const project_close = Array.from(
  document.getElementsByClassName("description__close")
);
const first_page = document.getElementsByClassName("complex-hero")[0];
const about_me_button = document.getElementsByClassName("right__item-one")[0];
let display_options_item_array = Array.from(display_options_item);
let navigationBox = document.querySelectorAll(".complex-foo__navigation-item");
let project_covers = document.getElementsByClassName("project-cover__darken");

(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();

for (let i = 1; i <= 4; i++) {
  renderProjectForComplex(i);
}

window.addEventListener("wheel", (e) => {
  if (e.ctrlKey) return;
  throttle(callback, 1000, e);
});

window.addEventListener("touchstart", (e) => {
  throttle(callback, 1000, e);
  throttlePhone(callback, 1000, e);
});

window.addEventListener("load", () => {
  hideLoaderWithDelay(loaderContainer, 3);
  if (sessionStorage.getItem("prompt") !== undefined)
    prompt.style.display = "none";
  project_close.forEach((project) => {
    project.addEventListener("click", () => {
      first_page.scrollIntoView();
      setTimeout(() => {
        callback();
      }, 1500);
    });
  });
});

window.addEventListener("wheel", (evt) => {
  if (evt.ctrlKey) return;
  //scroll deirection
  let delta = evt.deltaY;
  //take widht of container:
  let contWidth = evt.target.offsetWidth;

  // check direction and apply to contWidth
  if (delta < 0) {
    contWidth = -contWidth;
  }
  container.scrollLeft += contWidth;
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
  prompt.addEventListener("click", () => {
    if (sessionStorage.getItem("prompt") == undefined) {
      sessionStorage.setItem("prompt", "closed");
      fadeOut(prompt, 1000);
    } else prompt.style.opacity = "0";
  });
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

let time = Date.now();

function throttle(fn, wait, event = undefined) {
  // we dismiss every wheel event with deltaY less than 4
  if (Math.abs(event.deltaY) < 4) return;
  setTimeout(() => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    } else return;
  }, 1500);
}

function throttlePhone(fn, wait, event = undefined) {
  // we dismiss every wheel event with deltaY less than 4
  if (Math.abs(event.deltaY) < 4) return;
  setTimeout(() => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    } else return;
  }, 1500);
}

function callback() {
  for (let index = 0; index < pages.length; index++) {
    onVisible(pages[index], () => {
      // console.log(pages[index]);
      for (let j = 0; j < navigationBox.length; j++) {
        navigationBox[j].classList.remove("--active-link");
      }
      navigationBox[index - 1].classList.add("--active-link");
    });
  }
}

function onVisible(element, callback) {
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        callback(element);
      }
    });
  }).observe(element);
}

navigationBox.forEach((box) => {
  box.addEventListener("click", () => {
    callback();
    setTimeout(() => {
      callback();
    }, 1000);
    pages[Array.from(navigationBox).indexOf(box) + 1].scrollIntoView();
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
