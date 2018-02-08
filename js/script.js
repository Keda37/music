(function () {
  'use strict';
  var swiper = new Swiper('.swiper-container', {
   slidesPerView: 'auto',
   spaceBetween: 30,
   loop: true,
   nextButton: '.slider__arrow',
});


//   // 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', '../slide.php', false);

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
//   // вывести результат
//   var musicArr = xhr.responseText;
//   return console.log(musicArr); // responseText -- текст ответа.
// }


})();