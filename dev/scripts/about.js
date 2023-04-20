import "../styles/pages/_about.scss";
import { ConditionalTransitioner } from "./helpers/invokeConditionalTransitioner";

const aboutMe = document.getElementsByClassName("about-person")[0];
const aboutSite = document.getElementsByClassName("about-site")[0];
const aboutPersonContainer =
  document.getElementsByClassName("about-person-ctr")[0];
const closeAboutPersonContainer =
  document.getElementsByClassName("nav__close-ctr")[0];
const aboutSiteContainer = document.getElementsByClassName("about-site-ctr")[0];
const closeAboutSiteContainer =
  document.getElementsByClassName("nav__close-two")[0];

const items = document.getElementsByClassName("item");
let itemsArr = Array.from(items);
let textArr = Array.from(document.getElementsByClassName("main-text"));
const home__image = document.getElementsByClassName("about-nav__image")[0];
const home__icon = document.getElementsByClassName("about-nav__image-ctr")[0];

ConditionalTransitioner(home__icon);

(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();

function hideText(delay) {
  textArr.forEach((text) => {
    setTimeout(() => {
      text.style.opacity = 0;
    }, delay - 1000);

    setTimeout(() => {
      text.style.visibility = "hidden";
    }, delay);
  });
}

function showText() {
  textArr.forEach((text) => {
    if (text.style.visibility == "visible") return;
    text.style.visibility = "visible";
    text.style.opacity = 1;
  });
}

aboutMe.addEventListener("click", () => {
  document.getAnimations().forEach((animation) => {
    if (animation.animationName == "reveal") animation.play();
  });
  document.documentElement.style.setProperty("--itemRevealColor", "#c60033");
  setTimeout(() => {
    aboutPersonContainer.style.visibility = "visible";
  }, 1600);

  setTimeout(() => {
    aboutPersonContainer.style.opacity = "1";
  }, 1700);

  itemsArr.forEach((item) => {
    item.getAnimations().forEach((animation) => {
      if (animation.animationName == "reveal")
        item.style.animationPlayState = "running";
    });
  });
});

aboutSite.addEventListener("click", () => {
  itemsArr.forEach(() => {
    document.documentElement.style.setProperty("--revealBorder", "#110635");
  });

  document.body.style.overflow = "initial";
  hideText(2000);
  setTimeout(() => {
    aboutSiteContainer.style.visibility = "visible";
    aboutSiteContainer.style.opacity = 1;
    home__image.classList.add("red-filter");
  }, 2500);
});

closeAboutPersonContainer.addEventListener("click", () => {
  setTimeout(() => {
    aboutPersonContainer.style.opacity = "0";
    document.documentElement.style.setProperty(
      "--itemRevealColor",
      "transparent"
    );
  }, 10);

  setTimeout(() => {
    aboutPersonContainer.style.visibility = "hidden";
  }, 1500);
});

closeAboutSiteContainer.addEventListener("click", () => {
  aboutSiteContainer.style.opacity = 0;
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.documentElement.style.setProperty("--revealBorder", "red");
    home__image.classList.remove("red-filter");
  }, 1000);

  setTimeout(() => {
    aboutSiteContainer.style.visibility = "hidden";
    showText();
  }, 2000);
});
