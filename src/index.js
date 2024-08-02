window.onscroll = function() {navBarScrollLock()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
const imp_banner = document.getElementById("important-banner");
// console.log(navbar, sticky)

function navBarScrollLock() {
    // console.log(window.scrollY)
    if (window.scrollY >= sticky) {
        // console.log(navbar.classList)

        navbar.classList.add("fixed");
        navbar.classList.add("top-0");
        navbar.classList.add("w-full");
        navbar.classList.add("max-w-xl");
        navbar.classList.add("lg:max-w-4xl");
        navbar.classList.add("xl:max-w-6xl");
        navbar.classList.add("2xl:max-w-7xl");
        imp_banner.classList.add("hidden");
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
        imp_banner.classList.remove("hidden");
        // navbar.classList.remove("w-72rem");
    }
}

const navham = document.getElementById("hamburger-nav-menu")
const mobnav = document.getElementById("mobile-nav")
const subnav_infoauth = document.getElementById("subnav-infoauth")
const subnav_infoatt = document.getElementById("subnav-infoatt")
const subnav_committees = document.getElementById("subnav-committees")
const subnav_archive = document.getElementById("subnav-archive")


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

subnav_infoauth.addEventListener("click", (e)=>{
    e.preventDefault()
    const infoauthChildren = document.querySelectorAll(".subnav-infoauth")
    for(let i=0; i<infoauthChildren.length; i++){
        if(infoauthChildren[i].classList.contains('hidden')){
            infoauthChildren[i].classList.remove('hidden')
            infoauthChildren[i].classList.add('block')
        } else{
            infoauthChildren[i].classList.remove('block')
            infoauthChildren[i].classList.add('hidden')
        }
    }
})

subnav_infoatt.addEventListener("click", (e)=>{
    e.preventDefault()
    const infoattChildren = document.querySelectorAll(".subnav-infoatt")
    for(let i=0; i<infoattChildren.length; i++){
        if(infoattChildren[i].classList.contains('hidden')){
            infoattChildren[i].classList.remove('hidden')
            infoattChildren[i].classList.add('block')
        } else{
            infoattChildren[i].classList.remove('block')
            infoattChildren[i].classList.add('hidden')
        }
    }
})

subnav_committees.addEventListener("click", (e)=>{
    e.preventDefault()
    const infoattChildren = document.querySelectorAll(".subnav-committees")
    for(let i=0; i<infoattChildren.length; i++){
        if(infoattChildren[i].classList.contains('hidden')){
            infoattChildren[i].classList.remove('hidden')
            infoattChildren[i].classList.add('block')
        } else{
            infoattChildren[i].classList.remove('block')
            infoattChildren[i].classList.add('hidden')
        }
    }
})

subnav_archive.addEventListener("click", (e)=>{
    e.preventDefault()
    const children = document.querySelectorAll(".subnav-archive-year")
    for(let i=0; i<children.length; i++){
        if(children[i].classList.contains('hidden')){
            children[i].classList.remove('hidden')
            children[i].classList.add('block')
        } else{
            children[i].classList.remove('block')
            children[i].classList.add('hidden')
        }
    }
})

