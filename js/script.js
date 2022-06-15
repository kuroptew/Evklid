new Swiper ('.section-hero', {
  //Стрелки
  //navigation: {
  //  nextEl: '.swiper-button-next',
  //  prevEl: '.swiper-button-prev'
  //},
  //Навигация
  //Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  loop: true,
  
  autoplay: {
    delay: 8000,
  }
});

//Аккордион
$(function () {
  $("#accordion").accordion({
    collapsible:true,
    active: false,
    heightStyle: "content"
  });

});