import "../styles/pages/_about.scss";

const sheet = document.styleSheets[0];
const firstpart = document.getElementsByClassName("first");
const secondPart = document.getElementsByClassName("second");
const aboutMe = document.getElementsByClassName("about-person")[0];
const aboutSite = document.getElementsByClassName("about-site")[0];

const items = document.getElementsByClassName("item");
let itemsArr = Array.from(items);
setTimeout( () => {
    document.getAnimations().forEach((animation) => {
    animation.pause();
})},2900);

aboutMe.addEventListener("click", ()=> {

    itemsArr.forEach(item => {
    item.style.backgroundColor = "red";
});

})

// for (let i = 0; i < firstpart.length; i++) {
//     firstpart[i].addEventListener("mouseover", () => {
//         styleSheet.insertRule('.first{background-color: red;}',styleSheet.length);
//         styleSheet.insertRule('.container::before{border-top-color: red !important;}',styleSheet.length);
//         styleSheet.insertRule('.one::after{border-bottom-color: red !important;}',styleSheet.length);
//     })

//     firstpart[i].addEventListener("mouseleave", () => {
//             styleSheet.removeRule('.first{background-color: red;}',styleSheet.length);
//             styleSheet.removeRule('.container::before{border-top-color: red !important;}',styleSheet.length);
//             styleSheet.removeRule('.one::after{border-bottom-color: red !important;}',styleSheet.length);
//     })
// }

// for (let i = 0; i < secondPart.length; i++) {
//     secondPart[i].addEventListener("mouseover", () => {
//         styleSheet.insertRule('.second{background-color:red;}')
//     });

//     secondPart[i].addEventListener("mouseleave", () => {
//         styleSheet.removeRule('.second{background-color:red;}')
//     })
// }

