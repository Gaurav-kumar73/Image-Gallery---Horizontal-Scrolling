let scrollcontainer = document.querySelector(".gallery")
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn")

scrollcontainer.addEventListener("wheel", (e)=>{
    e.preventDefault()
    scrollcontainer.scrollLeft += e.deltaY
    
})

nextbtn.addEventListener("click", ()=> {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft += 900
})

backbtn.addEventListener("click", ()=> {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft -= 900
})

