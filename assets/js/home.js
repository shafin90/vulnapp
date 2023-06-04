const width = window.innerWidth;


function jump() {
    if (width <= 586) {
        let formDivv = document.getElementById("main-form");
        formDivv.scrollIntoView({ behavior: "smooth" });


    }
    else {
        let formDiv = document.getElementById("form");
        formDiv.scrollIntoView({ behavior: "smooth" });
    }

}



// window.location.href = document.getElementById('main-form');
console.log(width)






function scrollToTop(event) {
    event.preventDefault(event);
  
}

