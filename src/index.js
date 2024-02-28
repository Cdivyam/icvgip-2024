window.onscroll = function() {navBarScrollLock()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
console.log(navbar, sticky)

function navBarScrollLock() {
    console.log(window.scrollY)
    if (window.scrollY >= sticky) {
        console.log(navbar.classList)

        navbar.classList.add("fixed");
        navbar.classList.add("top-0");
        navbar.classList.add("w-full");
        navbar.classList.add("max-w-xl");
        navbar.classList.add("lg:max-w-4xl");
        navbar.classList.add("xl:max-w-6xl");
        navbar.classList.add("2xl:max-w-7xl");
        // navbar.classList.add("w-72rem");
        // max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("top-0");
        navbar.classList.remove("w-full");
        navbar.classList.remove("max-w-xl");
        navbar.classList.remove("lg:max-w-4xl");
        navbar.classList.remove("xl:max-w-6xl");
        navbar.classList.remove("2xl:max-w-7xl");
        // navbar.classList.remove("w-72rem");
    }
}

const navham = document.getElementById("hamburger-nav-menu")
const mobnav = document.getElementById("mobile-nav")

navham.addEventListener("click", (e)=>{
    e.preventDefault()
    if(mobnav.classList.contains('hidden')){
        mobnav.classList.remove('hidden')
        mobnav.classList.add('flex')
    } else{
        mobnav.classList.remove('flex')
        mobnav.classList.add('hidden')
    }
})