const navbar = document.getElementById("navbar");
const menu = document.querySelector(".ham-menu");
const dropdown = document.querySelector(".menu")
const hamTop = document.querySelector(".top");
const hamMid = document.querySelector(".mid");
const hamBottom = document.querySelector(".bottom");
const animator = document.getElementById('animate');
const tech = document.querySelector(".tech");
const server = document.querySelector(".server");
const plus = document.querySelector(".plus");
const para = document.querySelector(".para");
const button = document.querySelectorAll(".arrow");
let navPosition = navbar.getBoundingClientRect().top;
let navHeight = navbar.getBoundingClientRect().height;

window.onscroll = function(){
    if(document.body.scrollTop >= navHeight || document.documentElement.scrollTop >= navHeight){
        navbar.classList.add("navColored");
        navbar.classList.remove("navTransparent");
    }else if(document.body.scrollTop < navHeight || document.documentElement.scrollTop < navHeight){
        navbar.classList.remove("navColored");
        navbar.classList.add("navTransparent");
    }
}

menu.addEventListener("click", () => {
    hamTop.classList.toggle("top-clicked");
    hamMid.classList.toggle("mid-clicked");
    hamBottom.classList.toggle("bottom-clicked");
    dropdown.classList.toggle("menu-clicked")
    console.log("hi");
})

console.log(button)


button.forEach(icon => icon.addEventListener('click', () => {
    if(animator.classList.contains("animate")){
        animator.classList.remove("animate");
        tech.classList.remove("tech-animate");
        server.classList.remove("server-animate");
        plus.classList.remove("plus-animate");
        para.classList.remove("p-animate");
    }else{
        animator.classList.add("animate");
        tech.classList.add("tech-animate");
        server.classList.add("server-animate");
        plus.classList.add("plus-animate");
        para.classList.add("p-animate");
    }
}))