
const  menuOpemButton = document.querySelector("#menu-open-button");
const  menuCloseButton  = document.querySelector("#menu-close-button");
menuOpemButton = addEventListener("click", () =>{
  //Toggle mobile menu visibility

    document.body.classList.toggle("show-mobile-menu");
  
});

//Close menu when the close buttun is clicked
menuCloseButton.addEventListener("click" , () => menuOpemButton.click())


//Initializar Swiper

const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});