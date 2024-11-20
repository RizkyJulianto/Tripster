const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
    },

    breakpoints: {
      450: {
        slidesPerView: 1, // Pada layar kecil, hanya 1 card
      },
      1024: {
        slidesPerView: 2, // Pada layar besar, 2 card
      },
    },


  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });