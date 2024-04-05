const hamburger = document.querySelector(".menu-toggler");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("opened");
    hamburger.classList.toggle("active");
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 7,
    grabCursor: false,
    loop: true,
    preventClicks: true,
    keyboard: {
        enabled: true,
        onlyInViewPort: true
    },
    breakpoints: {
        600: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        900:{
            slidesPerView: 5,
            spaceBetween: 15
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });