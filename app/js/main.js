window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');
  //   // * ===== Nice Select
  //   // $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.coaches__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoins: {
        319: {
          spaceBetween: 20,
        },
        991: {
          spaceBetween: 30,
        },
      },
    });
  })();
  
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.results__slider');
    new Swiper(sliderEl, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.results__slider .swiper-button-next',
        prevEl: '.results__slider .swiper-button-prev',
      },
    });
  })();

  (function scrolAnchor() {
    $('.anchor').on('click', function () {
      let href = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(href).offset().top - 50,
        },
        {
          duration: 500,
          easing: 'linear',
        }
      );

      return false;
    });
  })();

  (function ScrollSection() {
    //* Scroll Section Active Link *//
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector('.menu a[href*=' + sectionId + ']')
            .classList.add('active');
        } else {
          document
            .querySelector('.menu a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);
  })();

  //   // * ===== Slider
  //   (function slider() {
  //     const sliderEl = document.querySelector('.price-list-top__slider');
  //     new Swiper(sliderEl, {
  //       slidesPerView: 'auto',
  //       centeredSlides: true,
  //       slideToClickedSlide: true,
  //       initialSlide: 4,
  //       spaceBetween: 20,
  //       navigation: {
  //         nextEl: '.price-list-top__slider .swiper-button-next',
  //         prevEl: '.price-list-top__slider .swiper-button-prev',
  //       },
  //     });
  //   })();
  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      if (this.scrollY >= 20) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      if (window.pageYOffset >= 20) {
        header.classList.add('scroll-header');
      }
    }
    changeBg();
  })();
  //   // * ===== Show Menu
  //   (function showMenu() {
  //     const menuBtn = document.querySelector('.header__toggle');
  //     const menu = document.querySelector('.mobile-menu');
  //     const menuCloseBtn = document.querySelector('.mobile-menu__close');
  //     const body = document.querySelector('body');
  //     const overlay = document.querySelector('.overlay');
  //     menuBtn.addEventListener('click', (e) => {
  //       menu.classList.toggle('active');
  //       overlay.classList.toggle('active');
  //       body.classList.toggle('no-scroll');
  //     });
  //     overlay.addEventListener('click', (e) => {
  //       menu.classList.remove('active');
  //       overlay.classList.remove('active');
  //       body.classList.remove('no-scroll');
  //     });
  //     menuCloseBtn.addEventListener('click', (e) => {
  //       menu.classList.remove('active');
  //       overlay.classList.remove('active');
  //       body.classList.remove('no-scroll');
  //     });
  //   })();
  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();
  //   // * ===== Toggle Tabs
  //   function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  //     const header = document.querySelectorAll(headerSelector);
  //     const tab = document.querySelectorAll(tabSelector);
  //     const content = document.querySelectorAll(contentSelector);
  //     header.forEach((el) => {
  //       if (el) {
  //         hideTabContent();
  //         showTabContent();
  //         function hideTabContent() {
  //           content.forEach((item) => {
  //             item.classList.remove('active');
  //           });
  //           tab.forEach((item) => {
  //             item.classList.remove(activeClass);
  //           });
  //         }
  //         function showTabContent(i = 0) {
  //           content[i].classList.add('active');
  //           tab[i].classList.add(activeClass);
  //         }
  //         header.forEach((item) => {
  //           if (item) {
  //             item.addEventListener('click', (e) => {
  //               const target = e.target;
  //               if (target.classList.contains(tabSelector.replace(/\./, ''))) {
  //                 tab.forEach((item, i) => {
  //                   if (target == item || target.parentNode == item) {
  //                     hideTabContent();
  //                     showTabContent(i);
  //                   }
  //                 });
  //               }
  //             });
  //           }
  //         });
  //       }
  //     });
  //   }
  //   someTabs('.contacts', '.contacts-top__item', '.contacts__content', 'active');
});
