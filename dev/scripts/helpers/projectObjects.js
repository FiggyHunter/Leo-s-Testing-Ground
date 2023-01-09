import img_calculator from "../../images/calculator.jpg"
import img_businessWebsite from "../../images/businesswebsite.png"
import img_dadJokes from "../../images/dadjokes.png";
import img_javascript from "../../images/javascript.svg";
import img_html from "../../images/html.svg";
import img_css from "../../images/css.svg";
import img_axios from "../../images/axios.svg";
import img_webpack from "../../images/webpack.svg";


class Project {
    constructor (title, image, technologiesUsed = [], description, sourceCode, liveView) {
        this.title = title;
        this.image = image;
        this.technologiesUsed = technologiesUsed;
        this.description = description;
        this.sourceCode = sourceCode;
        this.liveView = liveView;
    }
}
let calculator = new Project('Calculator', img_calculator);
let businessWebsite = new Project ('Business Website', img_businessWebsite);
let dadjokes = new Project ('Dad Jokes', img_dadJokes);

calculator.technologiesUsed.push(img_javascript);
calculator.technologiesUsed.push( img_html);
calculator.technologiesUsed.push(img_css);

calculator.description = "This is an example of a simple calculator, in which you can perform basic calculations. If you are on PC - You can also use your keyboard to enter values and perform math operations.";
calculator.sourceCode = "https://github.com/FiggyHunter/SimpleCalculator";
calculator.liveView = "https://www.leotg.com/calculator";

businessWebsite.technologiesUsed.push(img_javascript);
businessWebsite.technologiesUsed.push( img_html);
businessWebsite.technologiesUsed.push(img_css);

businessWebsite.description = "A website built following the premade design in Figma. Some of the website features are a nice interactive menu, classy color pattern and a custom made menu!";
businessWebsite.sourceCode = "https://github.com/FiggyHunter/BusinessWebsite";
businessWebsite.liveView = "https://www.leotg.com/businesswebsite"

dadjokes.technologiesUsed.push(img_javascript);
dadjokes.technologiesUsed.push( img_html);
dadjokes.technologiesUsed.push(img_css);
dadjokes.technologiesUsed.push(img_axios);
dadjokes.technologiesUsed.push(img_webpack);

dadjokes.description = "A website that contains various dad jokes, built as an excercise to learning webpack. Even if you don't think about hiring me, you should pay a visit here. It's really funny! ";
dadjokes.sourceCode = "https://github.com/FiggyHunter/Dad-Jokes";
dadjokes.liveView = "https://www.leotg.com/dadjokes"

export const projects_array = [calculator,businessWebsite,dadjokes];