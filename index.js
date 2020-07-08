const menuBtn = document.querySelector(".menuBtn")
const menu = document.querySelector(".menu")
const center = document.querySelector(".center")
const content = document.querySelector(".menu-content")
const menuRow = document.querySelector(".menu-table tr")
menuBtn.addEventListener("click", () => {
    menu.style.left = "0"
})
menu.addEventListener("click", (event) => {
    // console.log(menu.style.left)
    if (menu.style.left === "0px") {
        menu.style.left = "-99%"
    } else {
        menu.style.left = "0"
    }

})
content.addEventListener("click", (event) => {
    event.stopPropagation()
})
menuRow.addEventListener("click", (event) => {
    menu.style.left = "-99%"
})
// var myElement = document.getElementById('myPara');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(menu);
mc.on("swiperight", function (ev) {
    // console.log(ev)
    menu.style.left = "0"
});
var mc = new Hammer(menu);
mc.on("swipeleft", function (ev) {
    // console.log(ev)
    menu.style.left = "-99%"
});