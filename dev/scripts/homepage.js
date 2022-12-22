const loaderContainer = document.getElementsByClassName("loader-container")[0];
document.addEventListener("DOMContentLoaded", hideLoaderWithDelay(2))

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
  
