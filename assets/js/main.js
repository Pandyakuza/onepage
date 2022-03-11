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

    /** ---------------------------------NavBar Scroll On Click links------------------------------------*/

    let navbarlinks = document.querySelectorAll("#navbar .scrollto");
    function navbarlinksActive() {
        navbarlinks.forEach ((navbarlink) => {
            if (!navbarlink.hash) return;

                let section = document.querySelector(navbarlink.hash);
                if (!section) return;

                    let position = window.scrollY;
                    if (navbarlink.hash != "#header") position += 200;

                        if (position >= section.offsetTop &&
                            position <= section.offsetTop +  section.offsetHeight) {
                                navbarlink.classList.add("active");
                        } else {
                            navbarlink.classList.remove("active");
                        }
        });
    }
        window.addEventListener("load", navbarlinksActive);
        document.addEventListener("scroll", navbarlinksActive);
});