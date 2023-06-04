const menu = document.getElementById("demo");
const matrix = document.getElementById("matrix");



// Access the window object
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Log the screen width
console.log("Screen Width: " + screenWidth + " pixels");


if(screenWidth<576){
    menu.className = "menu offcanvas offcanvas-start";
    matrix.className = "scroll-y"
}
else{
    menu.className = "menu";
    matrix.className = "";

}








let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });