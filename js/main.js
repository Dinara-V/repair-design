/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
}); */

/* готов ли документ к тому, чтобы мы начали с ним манипуляцию? дальше используеи безымянную функцию, которая начнёт выполняться после того, как весь документ прогрузится*/
$(document).ready(function () {
  /* создаём переменную modal и помещаем туда наше модальное окно*/
  var modal = $('.modal'),
      modalBtn =$('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function(){
    /* по клику присваиваем модальному окну класс modal--visible*/
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)
});