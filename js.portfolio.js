const h1 = document.querySelector(".h1_front");
const p = document.querySelector(".p_back");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    h1.style.transform = `translateY(-${scrollY * 0.5}px)`;
    p.style.transform = `translateY(-${scrollY * 0.1}px)`;
});
const gallery = document.querySelector("#gallery");

let isDragging = false;
let startX = 0;
let startScrollLeft = 0;


/* Når musen trykkes ned */

gallery.addEventListener("mousedown", (event) => {

    isDragging = true;

    gallery.classList.add("is-dragging");

    startX = event.pageX;
    startScrollLeft = gallery.scrollLeft;

});


/* Når musen bevæges */

gallery.addEventListener("mousemove", (event) => {

    if (!isDragging) return;

    event.preventDefault();

    const distance = event.pageX - startX;

    gallery.scrollLeft = startScrollLeft - distance;

});


/* Når musen slippes */

window.addEventListener("mouseup", () => {

    isDragging = false;

    gallery.classList.remove("is-dragging");

});
