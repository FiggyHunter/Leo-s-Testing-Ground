const loaderContainer = document.getElementsByClassName("loader-container")[0];
document.addEventListener("DOMContentLoaded", hideLoaderWithDelay(2));
let about_site = document.getElementsByClassName("right__link")[0];

function hideLoaderWithDelay(seconds) {

        setTimeout(()=> {
            loaderContainer.style.opacity = 0;
            document.title = "Homepage | leotg.com"
        },seconds*1000);

        setTimeout(()=> {
            loaderContainer.remove();
        },3000)
    }
    
hideLoaderWithDelay(3);
  
function invokeTransitioner(location) {
    console.log("click");
    let transitioner = document.createElement("div");
    transitioner.id = "transitioner";
    document.body.insertBefore(transitioner, document.body.firstChild);
    window.getComputedStyle(transitioner).opacity;

    setTimeout( transitioner.style.opacity = 1 , 500 );
    setTimeout( () => { window.location = location }, 2000 );
    console.log("proslo");
}

about_site.addEventListener("click", () => {invokeTransitioner("about.html")});