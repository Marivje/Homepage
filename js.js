const logoButton = document.querySelector("#logoButton");
const nav = document.querySelector("#nav");

logoButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("active");

    logoButton.setAttribute("aria-expanded", isOpen);

    logoButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});


// Luk menuen når man klikker på et link

const navLinks = nav.querySelectorAll("a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        logoButton.setAttribute("aria-expanded", "false");

        logoButton.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});
