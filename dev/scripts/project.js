import { fadeOut } from "./helpers/invokeFadeOut";
import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { projects_array } from "./helpers/projectObjects";

let project_description = document.getElementsByClassName("description")[0];
let projects = Array.from(document.getElementsByClassName("projects__project"));
let description_close_button =
  document.getElementsByClassName("description__close")[0];
const home_button = document.getElementsByClassName("foo__home")[0];
const add_project = document.getElementById("fifth");

let projectToBeRendered;
let project_title = document.getElementsByClassName("description__title")[0];
let project_image = document.getElementsByClassName(
  "image-container__image"
)[0];
let project__description = document.getElementsByClassName(
  "description__text-container"
)[0];
let github_link = document.getElementsByClassName("cta__btn")[0];
let live_view = document.getElementsByClassName("play")[0];
let iframe_global = document.getElementsByClassName("iframe-global")[0];

const description_logo_container =
  document.getElementsByClassName("description__logos")[0];

projects.forEach((project) => {
  if (project.id == "fifth") return;
  project.addEventListener("click", () => {
    renderProject(project.querySelector("h5").innerHTML);
    project_description.style.display = "grid";
    setTimeout(() => {
      project_description.style.opacity = 1;
    }, 10);
  });
});

description_close_button.addEventListener("click", () => {
  setTimeout(() => {
    description_logo_container.innerHTML = `<p class="logos__info">Technologies used:</p>`;
  }, 1000);
  fadeOut(project_description, 1000);
});

home_button.addEventListener("click", (e) => {
  e.preventDefault();
  invokeTransitioner("index.html");
});

add_project.addEventListener("click", (e) => {
  invokeTransitioner("new-project.html");
});

function renderProject(title) {
  document
    .querySelectorAll(".description__logos img")
    .forEach((img) => img.remove());
  for (let i = 0; i < projects_array.length; i++) {
    if (projects_array[i].title.toUpperCase().toString() === title.toString()) {
      projectToBeRendered = projects_array[i];
    }
  }

  try {
    project_title.innerHTML = projectToBeRendered.title;
    project_image.src = projectToBeRendered.image;
    project__description.querySelector("p").innerText =
      projectToBeRendered.description;

    projectToBeRendered.technologiesUsed.forEach((technology) => {
      createTechnologiesUsedPicture(technology);
    });

    github_link.href = projectToBeRendered.sourceCode;
    live_view.href = projectToBeRendered.liveView;
    iframe_global.src = projectToBeRendered.liveView;
  } catch (error) {
    console.log("Object does not exist!");
  }
}

function createTechnologiesUsedPicture({ technology, path }) {
  let image_element = document.createElement("img");

  // image_element.classList.add("tooltip");
  // image_element.src = path;
  // image_element.alt = technology;
  description_logo_container.innerHTML += `<div class="tooltip"> <img src=${path} alt=${technology} /> <span class="tooltiptext"> ${technology} </span> </div>`;
}
