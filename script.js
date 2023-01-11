'use strict';

let icon = document.getElementById("icon");
let line = document.getElementById("line");

icon.addEventListener("click", () => {
    if(icon.style.justifyContent == "flex-start"){
        icon.style.justifyContent = "flex-end";
        icon.style.transform = "translateX(0rem) rotate(0deg)";
        icon.style.justifyContent = "flex-end";
        icon.style.transition = '1s';
        icon.classList.add("fa-face-frown");
        icon.classList.remove("fa-face-smile");
    }
    else{
        icon.style.justifyContent = "flex-start";
        icon.style.transform = "translateX(14.75rem) rotate(360deg)";
        icon.style.transition = '1s';
        icon.classList.remove("fa-face-frown");
        icon.classList.add("fa-face-smile");
    }
})