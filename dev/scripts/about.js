import "../styles/pages/_about.scss";
import { invokeTransitioner } from "./helpers/invokeTransitioner";
import {ConditionalTransitioner} from "./helpers/invokeConditionalTransitioner";

const sheet = document.styleSheets[0];
const firstpart = document.getElementsByClassName("first");
const secondPart = document.getElementsByClassName("second");
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
const home__icon = document.getElementsByClassName("about-nav__image-ctr")[0];
const nav_home_icon = Array.from(document.getElementsByClassName("nav__image-ctr"));
const nav_home_icon_two = Array.from(document.getElementsByClassName("nav__image-ctr-two"));

nav_home_icon.forEach(icon => {
  ConditionalTransitioner(icon);
});

nav_home_icon_two.forEach(icon => {
  ConditionalTransitioner(icon);
});

home__icon.addEventListener("click", ()=> {
  ConditionalTransitioner(home__icon);
})

function hideText(delay) {
  textArr.forEach((text) => {
    setTimeout(() => {
      text.style.opacity = 0;
    }, delay-1000);

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
    console.log(aboutPersonContainer);
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
  itemsArr.forEach((item) => {
    // if(item.classList.contains("one") || item.classList.contains("two")   || item.classList.contains("three") ) {
    //     item.style.
    // }
    document.documentElement.style.setProperty("--revealBorder", "#110635");
  });

  hideText(2000);

  setTimeout(() => {
    aboutSiteContainer.style.visibility = "visible";
    aboutSiteContainer.style.opacity = 1;
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
  
  setTimeout(() => {
    document.documentElement.style.setProperty("--revealBorder", "red");
  }, 1000);

  setTimeout(() => {
    aboutSiteContainer.style.visibility = "hidden";
    showText();
  }, 2000);
});

// for (let i = 0; i < firstpart.length; i++) {
//     firstpart[i].addEventListener("mouseover", () => {
//         styleSheet.insertRule('.first{background-color: red;}',styleSheet.length);
//         styleSheet.insertRule('.container::before{border-top-color: red !important;}',styleSheet.length);
//         styleSheet.insertRule('.one::after{border-bottom-color: red !important;}',styleSheet.length);
//     })

//     firstpart[i].addEventListener("mouseleave", () => {
//             styleSheet.removeRule('.first{background-color: red;}',styleSheet.length);
//             styleSheet.removeRule('.container::before{border-top-color: red !important;}',styleSheet.length);
//             styleSheet.removeRule('.one::after{border-bottom-color: red !important;}',styleSheet.length);
//     })
// }

// for (let i = 0; i < secondPart.length; i++) {
//     secondPart[i].addEventListener("mouseover", () => {
//         styleSheet.insertRule('.second{background-color:red;}')
//     });

//     secondPart[i].addEventListener("mouseleave", () => {
//         styleSheet.removeRule('.second{background-color:red;}')
//     })
// }
