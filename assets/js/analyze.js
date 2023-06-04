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











const buttons = document.getElementsByClassName("right-column-button");

let lastClickedButton = null;

Array.from(buttons).forEach(button => {
  let originalText = button.textContent; // Store the original text of the button

  button.addEventListener("click", () => {
    if (lastClickedButton === button) {
      // If the button is already in the "monitoring" state, revert it to the original state
      button.classList.remove("monitornig");
      button.textContent = originalText;
      lastClickedButton = null;
    } else {
      // Otherwise, set it to the "monitoring" state
      Array.from(buttons).forEach(btn => {
        if (btn !== button) {
          btn.classList.remove("monitornig");
        }
      });

      // Add "text-white monitornig" class to the clicked button
      button.classList.add("text-white", "monitornig");
      button.textContent = "Monitoring";
      lastClickedButton = button;
    }
  });

  button.addEventListener("dblclick", () => {
    // Revert the button to its original state immediately
    button.classList.remove("monitornig");
    button.textContent = originalText;
    lastClickedButton = null;
  });
});
