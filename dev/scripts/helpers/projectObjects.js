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

calculator.description = "This is a description delivered from Javascript.";
calculator.sourceCode = "https://www.google.ba";
calculator.liveView = "https://www.indiehackers.com";

businessWebsite.technologiesUsed.push(img_javascript);
businessWebsite.technologiesUsed.push( img_html);
businessWebsite.technologiesUsed.push(img_css);

businessWebsite.description = "This is my business website!";
businessWebsite.sourceCode = "https://www.reddit.com";
businessWebsite.liveView = "https://www.leotg.com/businesswebsite"

dadjokes.technologiesUsed.push(img_javascript);
dadjokes.technologiesUsed.push( img_html);
dadjokes.technologiesUsed.push(img_css);
dadjokes.technologiesUsed.push(img_axios);
dadjokes.technologiesUsed.push(img_webpack);

dadjokes.description = "This is a website where you can find some cool jokes!";
dadjokes.sourceCode = "https://www.discord.com";
dadjokes.liveView = "https://www.leotg.com/dadjokes"

export const projects_array = [calculator,businessWebsite,dadjokes];


// let a = [4,5,32,12]
// let calculator = new Project("Neki", "Image", a)

// console.log(calculator);