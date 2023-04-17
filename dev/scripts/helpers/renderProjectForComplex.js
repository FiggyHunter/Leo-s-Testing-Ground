import { projects_array } from "./projectObjects";

export function renderProjectForComplex(pageWhereProjectRenders) {
  const description_logo_container =
    document.getElementsByClassName("description__logos")[
      pageWhereProjectRenders - 1
    ];

  function createTechnologiesUsedPicture({ technology, path }) {
    description_logo_container.innerHTML += `<div class="tooltip"> <img src=${path} alt=${technology} /> <span class="tooltiptext"> ${technology} </span> </div>`;
  }

  const projectToBeRendered = projects_array[pageWhereProjectRenders - 1];
  let currentPageProject = Array.from(
    document.querySelectorAll(".project-details")
  )[pageWhereProjectRenders - 1];
  const projectTitle = currentPageProject.querySelector(".description__title");
  const projectImage = currentPageProject.querySelector(
    ".image-container__image"
  );
  const iFrameProject = currentPageProject.querySelector(".iframe-global");
  const projectDescription = currentPageProject
    .querySelector(".description__text-container")
    .querySelector("p");

  const projectSourceCode = currentPageProject.querySelector(".cta__btn");
  const projectLiveView = currentPageProject.querySelector(".play");

  projectTitle.innerHTML = projectToBeRendered.title;
  projectImage.src = projectToBeRendered.image;
  projectDescription.innerHTML = projectToBeRendered.description;

  projectToBeRendered.technologiesUsed.forEach((technology) => {
    createTechnologiesUsedPicture(technology);
  });

  iFrameProject.src = projectToBeRendered.liveView;
  projectSourceCode.href = projectToBeRendered.sourceCode;
  projectLiveView.href = projectToBeRendered.liveView;
}
