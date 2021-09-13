// slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//burger

const burgerBtn = document.querySelector(".header__btn");
const burger = document.querySelector(".header__nav");
const burgerItems = document.querySelectorAll(".header__nav-list-link");

if (burgerBtn) {
    burgerBtn.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        burgerBtn.classList.toggle("header__btn--active");
        burger.classList.toggle("header__nav--active");
    })
}

for (const burgerItem of burgerItems) {
       burgerItem.addEventListener('click', () => {
        burger.classList.remove("header__nav--active");
        burgerBtn.classList.remove("header__btn--active");

    })
}