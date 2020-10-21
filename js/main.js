document.addEventListener('DOMContentLoaded', function(){
//menu
  const menuBtn = document.querySelector('.menu__btn'),
        menuList = document.querySelector('.menu__list');
      menuBtn.addEventListener('click', function(e){
        e.preventDefault;
        menuBtn.classList.toggle('active');
        menuList.classList.toggle('active');
      });
//typing
    var options = {
        strings: ['Be prepared for the <br> Mountains and beyond!'],
        typeSpeed: 60,
        showCursor: false,
      };
      var typed = new Typed('.header__title', options);

const anchors = document.querySelectorAll('.nav__link[href^="#"]')

//scroll
// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
});