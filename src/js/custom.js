if(document.querySelectorAll('.lang__item')) {
    var langItem = document.querySelectorAll('.lang__item');
    var langCurrent = document.querySelector('.lang__current');
    var langItems =  document.querySelector('.lang__items');

    langCurrent.addEventListener('click', function (e) {
        langItems.classList.toggle('open');
    });

    [].forEach.call(langItem,function(el){
        el.addEventListener('click', function (e) {
            [].forEach.call(langItem,function(el){
                el.classList.remove('active');
            });
            langItems.classList.toggle('open');
            this.classList.add('active');
            langCurrent.innerHTML = this.innerHTML;
        })
    });
}
if(document.querySelectorAll('.btn-processing')) {
    var btnProcessing = document.querySelectorAll('.btn-processing');

    [].forEach.call(btnProcessing,function(el){
        el.addEventListener('click', function (e) {
            this.classList.toggle('done');
        })
    });
}

// $(function() {
//     // проверка начальной позиции анимированных блоков - на 1м экране первые блоки анимация должна запускаться сразу, без скролла - так как блок(и) находятся в зоне видимости сразу
//     if ($('.animated-block').length) {
//         var anim = $('.animated-block');
//         anim.each(function(){
//             var windowPostition = $(window).scrollTop();
//             var posit = $(this).offset().top - 500;
//             if (windowPostition >= posit) {
//                 $(this).addClass('fadeInUp');
//             }
//         });
//     }
//     if ($('.letters').length) {
//         var stroke = $('.letters__wrap');
//         stroke.each(function(){
//             var windowPostition = $(window).scrollTop();
//             var posit = $(this).offset().top - 500;
//             if (windowPostition >= posit) {
//                 $(this).addClass('lettersUp');
//             }
//         });
//     }


// });

// $(window).scroll(function(){
//     if ($('.animated-block').length) {
//         var anim = $('.animated-block');
//         anim.each(function(){
//             var windowPostition = $(window).scrollTop();
//             var posit = $(this).offset().top - 480;
//             if (windowPostition >= posit) {
//                 $(this).addClass('fadeInUp');
//             }
//         });
//     }
//     if ($('.letters').length) {
//         var stroke = $('.letters__wrap');
//         stroke.each(function(){
//             var windowPostition = $(window).scrollTop();
//             var posit = $(this).offset().top - 480;
//             if (windowPostition >= posit) {
//                 $(this).addClass('lettersUp');
//             }
//         });
//     }
// });