const menuBar = document.getElementById("menuBar");
const closeMenu = document.getElementById("closeMenu");
navLinks = document.getElementById("navLinks");


const mainImgMobile = document.getElementById("mainImgMobile")
const btnPrev = document.getElementById("btnPrev")
const btnNext = document.getElementById("btnNext")

const thumbnails =document.getElementById("thumbnails")



// mobile menu
menuBar.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-menu")
})
closeMenu.addEventListener("click", ()=>{
    navLinks.classList.remove("show-menu")
})


// slideshow
thumb1 =document.getElementById("thumb1");
thumb1Src =document.getElementById("thumb1").src;
thumb2 =document.getElementById("thumb2");
thumb2Src =document.getElementById("thumb2").src;
thumb3 =document.getElementById("thumb3");
thumb3Src =document.getElementById("thumb3").src;
thumb4 =document.getElementById("thumb4");
thumb4Src =document.getElementById("thumb4").src;

thumb1.addEventListener("click", ()=>{
    mainImgMobile.src = thumb1Src;
})
thumb2.addEventListener("click", ()=>{
    mainImgMobile.src = thumb2Src;
})
thumb3.addEventListener("click", ()=>{
    mainImgMobile.src = thumb3Src;
})
thumb4.addEventListener("click", ()=>{
    mainImgMobile.src = thumb4Src;
})


// modal

// modal code
//toggle modal open and close
mainImgMobile.addEventListener("click", ()=>{
    modalContainer.classList.add("close-modal")

})
closeModal.addEventListener("click", ()=>{
    modalContainer.classList.remove("close-modal")
})
thumb1M =document.getElementById("thumb1M");
thumb1MSrc =document.getElementById("thumb1M").src;
thumb2M =document.getElementById("thumb2M");
thumb2MSrc =document.getElementById("thumb2M").src;
thumb3M =document.getElementById("thumb3M");
thumb3MSrc =document.getElementById("thumb3M").src;
thumb4M =document.getElementById("thumb4M");
thumb4MSrc =document.getElementById("thumb4M").src;

thumb1M.addEventListener("click",()=> {
    modalImg.src = thumb1MSrc
    console.log("thumb clicked")
})
thumb2M.addEventListener("click",()=> {
    modalImg.src = thumb2MSrc
})
thumb3M.addEventListener("click",()=> {
    modalImg.src = thumb3MSrc
})
thumb4M.addEventListener("click",()=> {
    modalImg.src = thumb4MSrc
})



// mobile slideShow
let images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
]
let i = 0


btnPrev.addEventListener("click", ()=>{
    i--;
    if (i < 0){
        i = images.length - 1;
    }
    mainImgMobile.src = images[i]
})
btnNext.addEventListener("click", ()=>{
    i++
    if(i > images.length - 1){
        i = 0
    }
    mainImgMobile.src = images[i]

})




