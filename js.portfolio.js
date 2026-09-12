const h1 = document.querySelector(".h1_front");
const p = document.querySelector(".p_back");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    h1.style.transform = `translateY(-${scrollY * 0.5}px)`;
    p.style.transform = `translateY(-${scrollY * 0.1}px)`;
});
