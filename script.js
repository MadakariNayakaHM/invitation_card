 const swiper1 = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 180,
          modifier: 1,
          slideShadows: true,
        },
         loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      });

      const  swiper2 = new Swiper(".mySwiper2", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 70,
          shadowScale: 0.54,
        },
        loop:true,
        pagination: {
          el: ".swiper-pagination2",
        },
      });

    const swiper3 = new Swiper(".swiper3", {
        effect: "cards",
        grabCursor: true,
      });