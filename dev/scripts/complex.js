import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { fadeOut } from "./helpers/invokeFadeOut";
import {projects_array} from "./helpers/projectObjects"; 

const loaderContainer = document.getElementsByClassName("loader-container")[0];
const container = document.querySelector('.complex-container');
const projects = document.getElementsByClassName('project-cover');
const pages = document.querySelectorAll('.complex-page');
const close_options = document.getElementsByClassName("close-btn")[0];
const open_options = document.getElementsByClassName("right__option")[0];
const open_about_button = document.getElementsByClassName("right__link")[0];
const open_projects_button = document.getElementsByClassName("button__hero")[0];
const prompt = document.getElementsByClassName("right__prompt")[0];
const display_options = document.getElementsByClassName("options")[0];
const display_options_item = document.getElementsByClassName("options__item");
const project_add = document.getElementsByClassName("projects__project--new")[0];
let display_options_item_array = Array.from(display_options_item);
let pageCounter = 0;
let navigationBox = document.querySelectorAll(".complex-foo__navigation-item");
let project_details = document.getElementsByClassName("project-details");
let description_logo_container;


constructProjectPage(project_details[0], projects_array[0]);
constructProjectPage(project_details[1], projects_array[1]);
constructProjectPage(project_details[2], projects_array[2])

function createTechnologiesUsedPicture(path) {
  let image_element = document.createElement("img");

  image_element.src = path;
  image_element.alt = "image of technology used";
  description_logo_container.appendChild(image_element);
}

function constructProjectPage(page,object) {

  let project_title = page.querySelector(".description__title");
  let project_image = page.querySelectorAll(".image-container__image")[0];
  let project__description = page.querySelectorAll(".description__text-container")[0];
  let github_link = page.querySelectorAll(".cta__btn")[0];
  let live_view = page.querySelectorAll(".play")[0];
  description_logo_container = page.querySelectorAll(".description__logos")[0];

  try {
    project_title.innerHTML = object.title;
    project_image.src = object.image;
    project__description.querySelector("p").innerText = object.description;
      object.technologiesUsed.forEach((technology) => {
          console.log(`Creating technology: ${technology}
                       Source: ${object}
                       Destination: ${page}`);
                       console.log(page);
          createTechnologiesUsedPicture(technology);
      });

    github_link.href = object.sourceCode;
    live_view.href = object.liveView;
  } catch (error) {
    console.log("Object does not exist!" + error);
  }
}

function hideLoaderWithDelay(seconds) {

  setTimeout(()=> {
    getComputedStyle(loaderContainer).opacity;
      loaderContainer.style.opacity = 0;
      document.title = "Leo's Testing Ground | Home"
  },seconds*1000);

  setTimeout(()=> {
      loaderContainer.remove();
  },seconds*1300)
}

hideLoaderWithDelay(3);

container.addEventListener('wheel', (evt) => {

evt.preventDefault(); 

//scroll deirection
 let delta = evt.deltaY;
 //take widht of container:
let contWidth = evt.target.offsetWidth;

// check direction and apply to contWidth
if(delta < 0){
contWidth = -contWidth;
}
  container.scrollLeft += contWidth;  
});

// scrollintoview js.

if(sessionStorage.getItem("use_loader") == undefined) {
  sessionStorage.setItem("use_loader", true);
  display_options.style.opacity = 1;
}
else {
  loaderContainer.style.display = "none";
}

if(localStorage.getItem("options_setting") == undefined) {
  display_options.style.display = "grid";
  display_options.style.opacity = 1;
}
else {
  display_options.style.display = "none";
}

display_options_item_array.forEach(item => {
  item.addEventListener("click", () => {
      localStorage.setItem("view_option",item.querySelector("h1").childNodes[0].textContent);
      if(item.querySelector("h1").childNodes[0].textContent == "Advanced")
      {
        setTimeout(() => {
          fadeOut(display_options, 1000);
        }, 500);
      }
      else {
      invokeTransitioner("index.html")
      localStorage.setItem("options_setting", "set");
  }
  })
});

close_options.addEventListener("click", () => {fadeOut(display_options)})


open_options.addEventListener("click", (e) => {
    window.getComputedStyle(display_options).opacity;
    e.preventDefault();
    display_options.style.display = "grid";
    setTimeout(() => {
        display_options.style.opacity = "1";
    }, 100);
});

prompt.addEventListener("click", ()=> {
  fadeOut(prompt, 1000);
});

document.addEventListener('wheel', (e)=> {
  throttle(callback, 100,e);
});

document.addEventListener('touchstart', (e) => {
  throttle(callback,100,e);
  throttlePhone(callback,100,e)
})

let time = Date.now(); 

function throttle(fn, wait, event = undefined) {
   // we dismiss every wheel event with deltaY less than 4
      if (Math.abs(event.deltaY) < 4) return
      setTimeout(() => {
        if (((time + wait) - Date.now()) < 0) {
          fn();
          time = Date.now();
          }
          else return;
      }, 1500);
}

function throttlePhone(fn, wait, event = undefined) {
  // we dismiss every wheel event with deltaY less than 4
     if (Math.abs(event.deltaY) < 4) return
     setTimeout(() => {
       if (((time + wait) - Date.now()) < 0) {
         fn();
         time = Date.now();
         }
         else return;
     }, 1500);
}

function callback() {
  for (let index = 0; index < pages.length; index++) {
    onVisible(pages[index], () => {
      // console.log(pages[index]);
      for(let j=0; j< navigationBox.length; j++ ) {
        navigationBox[j].style.backgroundColor = "transparent";
      }
      navigationBox[index].style.backgroundColor = "white";
    })
  }
}

function onVisible(element, callback) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio === 1) {
        callback(element);
      }
    });
  }).observe(element);
};


navigationBox.forEach((box) => {
  box.addEventListener("click", () => {
    callback();
    setTimeout(() => {
      callback();
    }, 1000);
    pages[Array.from(navigationBox).indexOf(box)].scrollIntoView();
  })
});

project_add.addEventListener("click", () => {
  invokeTransitioner("new-project.html")}
);
