var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  ScrollReveal({ reset: true });
  // ScrollReveal().reveal('.article');
  ScrollReveal().reveal('.article',{ distance: '50px',  duration: 1000 });
  ScrollReveal().reveal('.images',{ distance: '50px',  duration: 1000 });
  ScrollReveal().reveal('.article2',{ distance: '50px',  duration: 1000 });
  ScrollReveal().reveal('.swiper-container',{ distance: '50px',  duration: 1000 });
  ScrollReveal().reveal('.pc',{ distance: '50px',  duration: 1000 });
  ScrollReveal().reveal('.bg1',{ distance: '50px',  duration: 1000 });
  ScrollReveal().reveal('.bg2',{ distance: '50px',  duration: 1000 });