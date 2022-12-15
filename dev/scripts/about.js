import "../styles/pages/_about.scss";

const sheet = document.styleSheets[0];
const firstpart = document.getElementsByClassName("first");
const secondPart = document.getElementsByClassName("second");
const aboutMe = document.getElementsByClassName("about-person")[0];
const aboutSite = document.getElementsByClassName("about-site")[0];
const aboutPersonContainer =
  document.getElementsByClassName("about-person-ctr")[0];
const closeAboutPersonContainer =
  document.getElementsByClassName("nav__close-ctr")[0];

const items = document.getElementsByClassName("item");
let itemsArr = Array.from(items);
let textArr = Array.from(document.getElementsByClassName("main-text"));

function hideText (delay) {
  setTimeout(() => {
      textArr.forEach(text => {
        text.style.opacity = 0;
        text.style.visibility = "hidden";
      });
  }, delay);
}

function showText () {
  textArr.forEach(text => {
    if(text.style.visibility == "visible")
      return;
      text.style.visibility = "visible";
  });
}

setTimeout(() => {
  document.getAnimations().forEach((animation) => {
    console.log(animation);
    if (animation.animationName == "widthfun") animation.pause();
  });
}, 2950);

aboutMe.addEventListener("click", () => {
  document.getAnimations().forEach((animation) => {
    if (animation.animationName == "reveal") animation.play();
  });
  document.documentElement.style.setProperty("--itemRevealColor", "#c60033");
  setTimeout(() => {
    console.log(aboutPersonContainer);
    aboutPersonContainer.style.visibility = "visible";
    aboutPersonContainer.style.opacity = "1";
  }, 2500);

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
});

closeAboutPersonContainer.addEventListener("click", () => {
  aboutPersonContainer.style.opacity = "0";
  setTimeout(() => {
    aboutPersonContainer.style.visibility = "hidden";
    document.documentElement.style.setProperty(
      "--itemRevealColor",
      "transparent"
    );
  }, 10);
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
