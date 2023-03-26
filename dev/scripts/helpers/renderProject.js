import { projects_array } from "./projectObjects";

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

function createTechnologiesUsedPicture({ technology, path }) {
  description_logo_container.innerHTML += `<div class="tooltip"> <img src=${path} alt=${technology} /> <span class="tooltiptext"> ${technology} </span> </div>`;
}

export function renderProject(title) {
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
