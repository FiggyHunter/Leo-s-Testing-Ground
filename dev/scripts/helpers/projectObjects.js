import img_calculator from "../../images/calculator.jpg";
import img_businessWebsite from "../../images/businesswebsite.png";
import img_dadJokes from "../../images/dadjokes.png";
import img_leotg from "../../images/leotg.png";
import img_javascript from "../../images/javascript.svg";
import img_html from "../../images/html.svg";
import img_css from "../../images/css.svg";
import img_axios from "../../images/axios.svg";
import img_webpack from "../../images/webpack.svg";
import img_vite from "../../images/vite.svg";
import img_penpot from "../../images/penpot.svg";
import img_sass from "../../images/sass.svg";
import img_lighthouse from "../../images/lighthouse.svg";

const javascript_technology = {
  technology: "Javascript",
  path: img_javascript,
};

const html_technology = {
  technology: "HTML",
  path: img_html,
};

const css_technology = {
  technology: "CSS",
  path: img_css,
};

const axios_technology = {
  technology: "Axios",
  path: img_axios,
};

const webpack_technology = {
  technology: "Webpack",
  path: img_webpack,
};

const vite_technology = {
  technology: "Vite",
  path: img_vite,
};

const penpot_technology = {
  technology: "Penpot",
  path: img_penpot,
};

const sass_technology = {
  technology: "Sass",
  path: img_sass,
};

const lighthouse_technology = {
  technology: "Lighthouse",
  path: img_lighthouse,
};

class Project {
  constructor(
    title,
    image,
    technologiesUsed = [],
    description,
    sourceCode,
    liveView
  ) {
    this.title = title;
    this.image = image;
    this.technologiesUsed = technologiesUsed;
    this.description = description;
    this.sourceCode = sourceCode;
    this.liveView = liveView;
  }
}
let calculator = new Project("Calculator", img_calculator);
let businessWebsite = new Project("Business Website", img_businessWebsite);
let dadjokes = new Project("Dad Jokes", img_dadJokes);
let leotg = new Project(`Leo's Testing Ground`, img_leotg);

calculator.technologiesUsed.push(javascript_technology);
calculator.technologiesUsed.push(html_technology);
calculator.technologiesUsed.push(css_technology);

calculator.description =
  "This is an example of a simple calculator, in which you can perform basic calculations. If you are on PC - You can also use your keyboard to enter values and perform math operations.";
calculator.sourceCode = "https://github.com/FiggyHunter/SimpleCalculator";
calculator.liveView = "https://www.leotg.com/calculator";

businessWebsite.technologiesUsed.push(javascript_technology);
businessWebsite.technologiesUsed.push(html_technology);
businessWebsite.technologiesUsed.push(css_technology);

businessWebsite.description =
  "A website built following the premade design in Figma. Some of the website features are a nice interactive menu, classy color pattern and a custom made menu!";
businessWebsite.sourceCode = "https://github.com/FiggyHunter/BusinessWebsite";
businessWebsite.liveView = "https://www.leotg.com/businesswebsite";

dadjokes.technologiesUsed.push(javascript_technology);
dadjokes.technologiesUsed.push(html_technology);
dadjokes.technologiesUsed.push(css_technology);
dadjokes.technologiesUsed.push(axios_technology);
dadjokes.technologiesUsed.push(webpack_technology);
dadjokes.technologiesUsed.push(sass_technology);

dadjokes.description =
  "A website that contains various dad jokes, built as an excercise to learning webpack. Even if you don't think about hiring me, you should pay a visit here. It's really funny! ";
dadjokes.sourceCode = "https://github.com/FiggyHunter/Dad-Jokes";
dadjokes.liveView = "https://www.leotg.com/dadjokes";

leotg.description =
  "Leo Testing ground is a website made to showcase projects that are made by me, Leonardo Roić. This website's main goal is to present projects to potential clients in an unique way. It's basically a project catalogue that has been overenginered to look as visualy pleasent, as possible.";
leotg.sourceCode = "https://github.com/FiggyHunter/Leo-s-Testing-Ground";
leotg.liveView = "";

leotg.technologiesUsed.push(html_technology);
leotg.technologiesUsed.push(css_technology);
leotg.technologiesUsed.push(javascript_technology);
leotg.technologiesUsed.push(vite_technology);
leotg.technologiesUsed.push(penpot_technology);
leotg.technologiesUsed.push(sass_technology);
leotg.technologiesUsed.push(lighthouse_technology);

export const projects_array = [calculator, businessWebsite, dadjokes, leotg];
