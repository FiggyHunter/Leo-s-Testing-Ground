import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { fadeOut } from "./helpers/invokeFadeOut";

const loaderContainer = document.getElementsByClassName("loader-container")[0];
const container = document.querySelector('.complex-container');
const projects = document.getElementsByClassName('project-cover');
const close_options = document.getElementsByClassName("close-btn")[0];
const open_options = document.getElementsByClassName("right__option")[0];
const open_about_button = document.getElementsByClassName("right__link")[0];
const open_projects_button = document.getElementsByClassName("button__hero")[0];
const prompt = document.getElementsByClassName("right__prompt")[0];
const display_options = document.getElementsByClassName("options")[0];
const display_options_item = document.getElementsByClassName("options__item");
let display_options_item_array = Array.from(display_options_item);

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
})