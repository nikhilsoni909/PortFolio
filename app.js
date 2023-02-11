const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlinks = document.querySelectorAll("#hlinks");
const body = document.querySelector("body");
const moon = document.querySelectorAll(".moon");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
})
hlinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
    })
})

moon.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("dark");
    })
})