document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.add('header__nav-open');
  });
  document.querySelector('.header__nav-item-close').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.remove('header__nav-open');
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: true,

    speed: 1000,

  });

  document.querySelectorAll('.work__tab-item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', () => {

      const path = tabsBtn.dataset.path;

      console.log(tabsBtn.dataset);

      document.querySelector('.work__tab-item_active').classList.remove('work__tab-item_active');

      tabsBtn.classList.add('work__tab-item_active');

      document.querySelector('.work__carousel-content-active').classList.remove('work__carousel-content-active');

      document.querySelector(`[data-target="${path}"]`).classList.add('work__carousel-content-active');
    })
  });

  const button = document.querySelectorAll('.questions__item');

  button.forEach((el) => {
    el.addEventListener('click', () => {

      let description_block = el.lastElementChild;

      if(description_block.style.maxHeight === 0 || description_block.style.maxHeight === '') {
        description_block.style.margin = "30px 0";
        description_block.style.maxHeight = description_block.scrollHeight + 'px';
      } else {
        description_block.style.margin = "0 0";
        description_block.style.maxHeight = '';
      }

      el.firstElementChild.lastElementChild.classList.toggle('questions__icon-animation');
    });
  })
});


