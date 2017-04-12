
window.onload = function() {
    setTimeout(closeLoadingScreen, 10);

    function closeLoadingScreen() {
        $("body").css('overflow', 'visible');
        $(".loading-screen").animate({
            opacity: 0 
        }, 500, function() {
            $(".loading-screen").css('display', 'none'); 
            $(".content-wrapper").animate({"opacity": "1"}, 500) 
        });
    }
  };

$(document).ready(function($) {

    $(".menu").on("click", "a", function(event) { //перход по якорным ссылкам из меню навигации
        event.preventDefault(); 
        var id = $(this).attr('href'), 
            distanceFromTop;
            if ($(window).width() > 1200) {
                distanceFromTop = $(id).offset().top - 60;//когда есть меню в десктопной версии, минус его высота
            } else {
                distanceFromTop = $(id).offset().top;//мобильный случай, когда нету меню
            }
        if ($(window).width() < 1200) {
            closeMenu();
        }
        
        $('body,html').animate({ 
            scrollTop: distanceFromTop 
        }, 1500);
    });

    $(".arrow-down").on("click", function(event) { //переход на первый блок с анимированной стрелки
        event.preventDefault();
        var distanceToFirstBlock;
        if ($(window).width() > 1200) {
            distanceToFirstBlock = $("#about-us").offset().top - 60;
        } else {
            distanceToFirstBlock = $("#about-us").offset().top;
        }
        $('body,html').animate({
            scrollTop: distanceToFirstBlock
        }, 1500);
    });

    $(".home-arrow").on("click", function(event) { //переход в начало страницы
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    function openMenu() {  //открыть мобильное меню
        $(".home-arrow").fadeOut('0');
        $(".menu").css('opacity', '0'); 
        $(".menu-mobile .banner").css('display', 'none');
        $(".menu").animate({
            opacity: 1 
        }, 400).css('display', 'block');
        $(".menu-icon").css('display', 'none'); 
        $(".menu-close").css('display', 'block'); 
        $(".menu").css({
            position: 'fixed',
            top: '0',
            bot: '0',
            left: '0',
            right:'0'
        });
    }

    function closeMenu() { //закрыть мобильное меню
        $(".home-arrow").fadeIn('0');
        $(".menu-icon").css('display', 'block'); 
        $(".menu-close").css('display', 'none');
        $(".menu-mobile .banner").css('display', 'block');
        $(".menu").animate({
            opacity: 0 
        }, 400, function() {
            $(".menu").css('display', 'none');  
            $(".navigation").css('height', '80px');
        });
    }

    $(".menu-icon").on("click", function() {
        openMenu();
    });

    $(".menu-close").on("click", function () {
        closeMenu();
    });

    function growMenu(speed) {
            if  ($(window).scrollTop() === 0) {
                if (state === "menuIsSmall" || state === undefined) {
                    animateMenu ("80px", "transparent", "#fff", "10px", speed, "block", "none");
                    state = "menuIsBig";
                }
            }
            return  state;
        }

    function decreasesMenu(speed) {
        if  ($(window).scrollTop() !== 0) {
            if (state === "menuIsBig" || state === undefined ) {
                animateMenu ("60px", "#fff", "#16275b", "4px", speed, "none", "block");
                state = "menuIsSmall";
            }
        }
        return  state;
    }

    function animateMenu (menuHeight, menuBgColor, colorText, marginOfBanner, speed, whiteLogoDisplay, colorLogoDisplay) {    
        $(".menu").animate({height: menuHeight}, speed);

        $(".menu").css('background-color', menuBgColor);
        $(".menu a, .menu span").css('color', colorText);
        $(".banner").css('margin-bottom', marginOfBanner);
        $(".banner").css({
            'margin-bottom': marginOfBanner,
            'background-color': menuBgColor
        });
        $(".logo-white").css('display', whiteLogoDisplay);
        $(".logo-color").css('display', colorLogoDisplay);
    } 

    function showBanner() {
        if ($(window).scrollTop() === 0) {
            $(".banner").stop(true, true);
            $(".banner").animate({opacity: "1"}, 500);
        }
    }

    if ($(window).width() > 1200) { //анимация меню при прокрутке
        var state; //переменная состояния, меняет свое значение когда меню изменяет свой размер, нужна для того, чтобы анимация не происходила при каждом событии прокрутки 

        if ($(window).scrollTop() !== 0) {
            decreasesMenu(0);
        } else {
            growMenu(0);
        }

        $(window).scroll(function() {
            decreasesMenu(800);
            growMenu(800);   
        });
    } else {
        $(window).scroll(function() {
            $(".banner").animate({opacity: "0"}, 500);
            showBanner();
        });

        if ($(window).scrollTop() !== 0) {
            $(".banner").css('opacity', "0");
        } 
    }

    // КАРУСЕЛЬ

    var portfolio = {
        galery1 : {
                    partners: 'Юли и Семена',
                    poster: 'images/galery/preview/3.jpg',
                    video: 'images/galery/preview/6.jpg',
                    videoSRC: 'images',
                    imagesSRC: 'video'
                },
        galery2 : {
                    partners: 'Игоря и Лены',
                    poster: 'images/galery/preview/1.jpg',
                    video: 'images/galery/preview/4.jpg',
                    videoSRC: 'images',
                    imagesSRC: 'video'
                },
        galery3 : {
                    partners: 'Gtnhf и Лены',
                    poster: 'images/galery/preview/2.jpg',
                    video: 'images/galery/preview/5.jpg',
                    videoSRC: 'images',
                    imagesSRC: 'video'
                },
        galery4 : {
            partners: 'Gtnhf и Лены',
            poster: 'images/galery/preview/1.jpg',
            video: 'images/galery/preview/1.jpg',
            videoSRC: 'images',
            imagesSRC: 'video'
        }
    };

    var reviews = {
        review1 : {
                    content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
                    title: 'Анна Семёнова',
                    portrait: 'images/rewiew/portrait-1.jpg',
                },
        review2 : {
                    content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
                    title: 'Саша Алексеева',
                    portrait: 'images/rewiew/portrait-2.jpg',
                },
        review3 : {
                    content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
                    title: 'Меган Фокс',
                    portrait: 'images/rewiew/portrait-3.jpg',
                },
        review4 : {
                    content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
                    title: 'Кот Аркадий',
                    portrait: 'images/rewiew/portrait-4.jpg',
                },
        review5 : {
            content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
            title: 'Дуся',
            portrait: 'images/rewiew/portrait-5.jpg',
        }
    };

    var news = {
        news1 : {
                    title: 'news1',
                    poster: 'images/news/news-1.jpg',
                    content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.  purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna.',
                    link: 'images'
                },
        news2 : {
                    title: 'news2',
                    poster: 'images/news/news-2.jpg',
                    content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM',
                    link: 'images'
                },
        news3 : {
                    title: 'news3',
                    poster: 'images/news/news-3.jpg',
                    content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM',
                    link: 'images'
                },
        news4 : {
            title: 'news4',
                    poster: 'images/news/news-1.jpg',
                    content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM',
                    link: 'images'
        },
        news5 : {
            title: 'news5',
                    poster: 'images/news/news-3.jpg',
                    content: 'LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM',
                    link: 'images'
        }
    };

    var counter = 0;

    function caruselSvipe(caruselObj, caruselId, template, carouselItemsClass, carouselBlockClass, tmplWrapp) {
        var counterOfProperty = 0; //счетчик свойств

        for (var property in caruselObj) {
            counterOfProperty++;
        }

        for (var key in caruselObj) {
            $(caruselId).find(carouselItemsClass).append(tmplWrapp);
            $(caruselId).find(carouselBlockClass).eq(counter).attr('id', [key]);//уникальный айди для каждого блока в который вставляется темплейт
            counter++;
            var itemOfCarusel = caruselId + " " + '#' + key; 
            $(itemOfCarusel).loadTemplate(template, caruselObj[key]);//грузим темплейт

            if (counter == counterOfProperty) {
                counter = 0; //если счетчик свойств достиг максимального значения, то сбросить его в ноль
            }
        }

        if (caruselId !== "#reviews-carousel") {
            $(caruselId).on('click', '.right', function(){ 
                var carusel = $(this).parents('.carousel');
                mooveRightCarusel(carusel);
                clearInterval(caruselSvipeinterval);
                return false;
            });
            
            $(caruselId).on('click', '.left', function(){ 
                var carusel = $(this).parents('.carousel');
                mooveLeftCarusel(carusel);
                return false;
            });

            $(caruselId).swiperight(function() {
                mooveRightCarusel(caruselId);
            }).swipeleft(function() {
                mooveLeftCarusel(caruselId);
            });
        } 
    }

    // $('#reviews-carousel').swiperight(function() {
    //     $("#reviews-carousel").carousel('prev');
    // }).swipeleft(function() {
    //     $("#reviews-carousel").carousel('next');
    // });

    caruselSvipe(news, "#news-carousel", "../templates/news-preview-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
    caruselSvipe(portfolio, "#portfolio-carousel", "../templates/portfolio-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
    caruselSvipe(reviews, "#reviews-carousel", "../templates/review-tmpl.html",  '.carousel-inner', '.item', '<div class="item"></div>');

    autoCaruselSvipe('#portfolio-carousel');

    autoCaruselSvipe('#news-carousel');

    $("#reviews-carousel .item").eq(0).addClass('active');//нужно для того чтобы работала бутстраповская карусель
    
    function mooveLeftCarusel(carusel){
       var blockWidth = $(carusel).find('.carousel-block').outerWidth();
       $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
       $(carusel).find(".carousel-items").css({"left":"-"+blockWidth+"px"});
       $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
       $(carusel).find(".carousel-items").animate({left: "0px"}, 500); 
       
    }

    function mooveRightCarusel(carusel){
       var blockWidth = $(carusel).find('.carousel-block').outerWidth();
       $(carusel).find(".carousel-items").animate({left: "-"+ blockWidth +"px"}, 500, function(){
          $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
          $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
          $(carusel).find(".carousel-items").css({"left":"0px"}); 
       }); 
    }

    function autoCaruselSvipe(carusel){
        var caruselSvipeinterval = setInterval(function(){
            if (!$(carusel).is('.hover'))
                mooveRightCarusel(carusel);
        }, 5000);
    }

    $('.carousel').on('mouseenter', function(){$(this).addClass('hover')});

    $('.carousel').on('mouseleave', function(){$(this).removeClass('hover')});

    //АНИМАЦИЯ ПИСЬМА

    var letterIsOpen = false;

    function openLetter() {
        if (letterIsOpen === false) {
            $(".stamp").fadeOut(0);
            $(".letter-wrap").animate({"margin-top": "230px"}, 1000);
            $(".top").css('display', 'none');
            $(".cover-wrap").fadeIn(500);
            $(".letter-form").delay(1200).animate({
                top: -225 
            }, 400); 
            letterIsOpen = true;
        }

        return letterIsOpen;
    }

    function closeLetter() {
        $(".letter-wrap").animate({"margin-top": "0px"}, 1000);
        $(".letter-form").animate({
            top: 0 
        }, 400, function() {
            $(".cover-wrap").fadeOut('500');
            $(".top").fadeIn(500);
            $(".stamp").delay(500).fadeIn(500);
        });
    }

    $(".letter-form button").on("click", function(event) {
        event.preventDefault();
        if ($(window).width() >= 768) { 
            closeLetter();
        } 
    });

    $(".top").on("click", function() {
        letterIsOpen = false;
        openLetter();
    });

    $(window).scroll(function() {
        var distanceFromTop = $(window).scrollTop(), //растояние до блоков от верха окна
            distanceToFeedbackForm = $(".feedback-form").offset().top;
            distanceToAboutUs = $("#about-us").offset().top;

            if ($(window).width() >=  768 && distanceFromTop > distanceToFeedbackForm -200) {
                setTimeout(openLetter, 500);
            } 

            if (distanceFromTop < 40) {
                $(".home-arrow").fadeOut(500);
            } else {
               $(".home-arrow").fadeIn(500); 
            }
    });

    // $(window).scroll(function() { //проверка на растояние от верха для изменения стилей некоторых элементов
    //     var distanceToAboutUs = $("#about-us").offset().top, //растояние до блоков от верха окна
    //         distanceToServHead = $(".services-header").offset().top,
    //         distanceToServ = $(".services-wrapper").offset().top,
    //         distanceToOrders = $("#orders").offset().top,
    //         distanceFromTop = $(window).scrollTop();

    //     if (distanceFromTop < distanceToAboutUs) {
    //         $(".home-arrow").css('display', 'none'); //скрыть боковую стрелку в шапке сайта
    //         if ($(document).width() > 768) {
    //             $(".menu-btn").css({ //сместить кнопку меню
    //                 "top": '5rem',
    //                 'right': '4rem',
    //                 'color': '#dcd3b6'
    //             });
    //         } else {
    //             $(".menu-btn").css({ //сместить кнопку меню
    //                 "top": '4rem',
    //                 'right': '2rem',
    //                 'color': '#dcd3b6'
    //             });
    //         }
    //     } else {
    //         $(".home-arrow").css('display', 'block'); //отобразить боковую стрелку
    //         $(".menu-btn").css({ //сместить кнопку меню
    //             "top": '1rem',
    //             'right': '1rem'
    //         });
    //         $(".fa-bars").css('color', 'black');
    //     }

    //     if (distanceFromTop > distanceToServHead - 10 && distanceFromTop < distanceToServ - 5) { //внутри блока .services-header
    //         $(".fa-bars").css('color', 'white');
    //         $(".home-arrow").css('color', 'white');
    //     } else {
    //         $(".home-arrow").css('color', 'black');

    //     }

    //     if (distanceFromTop > distanceToOrders - 200) {
    //         $('.carousel').carousel('pause'); //пауза карусели если она не в фокусе
    //     } else {
    //         $('.carousel').carousel('cycle'); //старт карусели

    //     }
    // });



    $('#reviews-carousel').swiperight(function() {
        $("#reviews-carousel").carousel('prev');
    }).swipeleft(function() {
        $("#reviews-carousel").carousel('next');
    });
    
});