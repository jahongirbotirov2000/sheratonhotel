const showMenuBtn = document.querySelector(".mob__btn");
const mobileMenu = document.querySelector(".mob__nav");

let isMenuOpened =false;
showMenuBtn.addEventListener("click",() =>{
    if (!isMenuOpened) {
        mobileMenu.style.display = "block"
        isMenuOpened = true;
    }else{
        mobileMenu.style.display = "none";
        isMenuOpened =false;
    }
    console.log("bosildi")
});
window.addEventListener("resize",() =>{
    if (isMenuOpened){
        mobileMenu.style.display="none";
        isMenuOpened=false;
    }
})