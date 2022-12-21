const container = document.querySelector('.complex-container');
const projects = document.getElementsByClassName('project-cover');

container.addEventListener('wheel', (evt) => {

evt.preventDefault(); 

//scroll deirection
 let delta = evt.deltaY;
 //take widht of container:
let contWidth = evt.target.offsetWidth;

// check direction and apply to contWidth
if(delta < 0){
contWidth = -contWidth;
}
  container.scrollLeft += contWidth;  
});

// scrollintoview js.