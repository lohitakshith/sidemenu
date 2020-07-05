const menuBtn = document.querySelector(".menuBtn")
const menu = document.querySelector(".menu")
const content = document.querySelector(".menu-content")
const menuRow = document.querySelector(".menu-table tr")
menuBtn.addEventListener("click", () => {
    menu.style.left = "0"
})
menu.addEventListener("click", (event) => {
    menu.style.left = "-100%"
})
content.addEventListener("click", (event) => {
    event.stopPropagation()
})
menuRow.addEventListener("click", (event) => {
    menu.style.left = "-100%"
})