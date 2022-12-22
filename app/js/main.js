window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');
  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== MultiStep Form
  (function multiStep() {
    const prevBtns = document.querySelectorAll('.btn-prev');
    const nextBtns = document.querySelectorAll('.btn-next');
    const formSteps = document.querySelectorAll('.form-submit__step');
    const progressSteps = document.querySelectorAll('.form-submit__line');
    const countEl = document.querySelector('.count-steps');
    const submitBtn = document.querySelector('.submit-btn');
    const formInputs = document.querySelectorAll('.form-submit__input');
    const formSelect = document.querySelector('.form-submit__select');
    const formEnd = document.querySelector('.form-submit__end');
    const formInner = document.querySelector('.form-submit__inner');

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      formEnd.style.display = 'block';
      formInner.style.display = 'none';
    });

    let formStepsNum = 0;

    nextBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (
          formInputs[formStepsNum].hasAttribute('required') &&
          formInputs[formStepsNum].value.length
        ) {
          formStepsNum++;
          updateFormSteps();
          updateProgressbar();
        } else if (
          !formInputs[formStepsNum].hasAttribute('required') ||
          formSelect.value != 0
        ) {
          formStepsNum++;
          updateFormSteps();
          updateProgressbar();
        } else {
          alert('Заполните поле');
        }
      });
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
      });
    });

    function updateFormSteps() {
      formSteps.forEach((formStep) => {
        formStep.classList.contains('active') &&
          formStep.classList.remove('active');
      });

      formSteps[formStepsNum].classList.add('active');
    }

    function updateProgressbar() {
      progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
          progressStep.classList.add('active');
        } else {
          progressStep.classList.remove('active');
        }
      });

      const progressActive = document.querySelectorAll(
        '.form-submit__line.active'
      );
      console.log(progressActive);

      countEl.textContent = formSteps.length + 1 - progressActive.length;
    }
  })();

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

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.popup__slider');
    new Swiper(sliderEl, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.popup__wrapper .swiper-button-next',
        prevEl: '.popup__wrapper .swiper-button-prev',
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

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.coach-btn', '.popup--results', '.popup__close');
  })();
});
