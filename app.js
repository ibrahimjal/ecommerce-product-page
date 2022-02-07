const menuBar = document.getElementById("menuBar");
const closeMenu = document.getElementById("closeMenu");
navLinks = document.getElementById("navLinks");

const slideShow =document.getElementById("slideShow");
const mainImg =document.getElementById("mainImg");
const thumbnails =document.getElementById("thumbnails");

const closeModal = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");
const modalImg = document.getElementById("modalImg");



thumb1 =document.getElementById("thumb1");
thumb1Src =document.getElementById("thumb1").src;
thumb2 =document.getElementById("thumb2");
thumb2Src =document.getElementById("thumb2").src;
thumb3 =document.getElementById("thumb3");
thumb3Src =document.getElementById("thumb3").src;
thumb4 =document.getElementById("thumb4");
thumb4Src =document.getElementById("thumb4").src;

thumb1.addEventListener("click",()=> {
    mainImg.src = thumb1Src;
})
thumb2.addEventListener("click",()=> {
    mainImg.src = thumb2Src;
    
})
thumb3.addEventListener("click",()=> {
    mainImg.src = thumb3Src;

})
thumb4.addEventListener("click",()=> {
    mainImg.src = thumb4Src;
})

// mobile menu
menuBar.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-menu")
})
closeMenu.addEventListener("click", ()=>{
    navLinks.classList.remove("show-menu")
})


// modal code
// open modal 
mainImg.addEventListener("click", ()=>{
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

