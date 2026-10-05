//interactions
const logoButton = document.querySelector(".logo-button");
const nav = document.querySelector("nav");

// opens menu
logoButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    logoButton.setAttribute("aria-expanded", isOpen);
    logoButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});
//all a in nav
const navLinks = nav.querySelectorAll("a");

//click = close and active CSS
navLinks.forEach(link => {
    // 1. Luk menuen
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        logoButton.setAttribute("aria-expanded", "false");
        logoButton.setAttribute("aria-label", "Open navigation");
    });

    //look page(link)
    const currentUrl = window.location.href;
    const linkHref = link.href;

    // safety - look page(link)
    if (currentUrl === linkHref || (currentUrl.endsWith("/") && link.getAttribute("href") === "index.html")) {
        link.classList.add("page-active");
    }
});

// cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

const speed = 0.15;

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
});

function animateCursor() {
    outlineX += (mouseX - outlineX) * speed;
    outlineY += (mouseY - outlineY) * speed;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

//Hover - cursor
window.addEventListener("mouseover", function(e) {
    if (e.target.closest("a, button, .clickable")) {
        cursorOutline.classList.add("cursor-hover");
        cursorDot.classList.add("cursor-image-hover");
    }
});

window.addEventListener("mouseout", function(e) {
    if (e.target.closest("a, button, .clickable")) {
        cursorOutline.classList.remove("cursor-hover");
        cursorDot.classList.remove("cursor-image-hover");
    }
});
// Grab / grabbing cursor
window.addEventListener("mousedown", function () {
    cursorDot.classList.add("cursor-grabbing");
});
