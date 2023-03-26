import { fadeOut } from "./helpers/invokeFadeOut";
import { invokeTransitioner } from "./helpers/invokeTransitioner";
import { renderProject } from "./helpers/renderProject";

let project_description = document.getElementsByClassName("description")[0];
let projects = Array.from(document.getElementsByClassName("projects__project"));
let description_close_button =
  document.getElementsByClassName("description__close")[0];
const home_button = document.getElementsByClassName("foo__home")[0];
const add_project = document.getElementById("fifth");

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

add_project.addEventListener("click", () => {
  invokeTransitioner("new-project.html");
});
