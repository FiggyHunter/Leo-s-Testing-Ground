import "../styles/pages/_newProject.scss"
import { invokeTransitioner } from "./helpers/invokeTransitioner";

let goHomeButton = document.getElementsByClassName("content__nav-home")[0];
let goInfoButton = document.getElementsByClassName("content__nav-info")[0];

goHomeButton.addEventListener("click", () => {
 invokeTransitioner("index.html");
});    
goInfoButton.addEventListener("click",()=>{
    invokeTransitioner("about.html")
} );