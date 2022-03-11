document.addEventListener ("DOMContentLoaded", () =>{
    "use strict";

    /** ----------------------------------Preloader code ------------------------------------*/

    const preloader = document.querySelector("#preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.remove();
        });
    }


    /** ----------------------------------Sticky NavBar code ------------------------------------*/

    const selectHeader = document.querySelector("#header");
    if (selectHeader){
        document.addEventListener("scroll", () =>{
            window.scrollY > 100
            ? selectHeader.classList.add("sticked")
            :selectHeader.classList.remove("sticked")
        });
    }
});