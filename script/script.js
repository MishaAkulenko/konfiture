
window.onload = function() {
    setTimeout(closeLoadingScreen, 10);

    function closeLoadingScreen() {
        $("body").css('overflow', 'visible');
        $(".loading-screen").animate({
            opacity: 0 
        }, 0, function() {
            $(".loading-screen").css('display', 'none'); 
            $(".content-wrapper").animate({"opacity": "1"}, 500) ;
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
        $(".menu, .news-article-menu").css('opacity', '0'); 
        $(".menu-mobile .banner").css('display', 'none');
        $(".menu, .news-article-menu").animate({
            opacity: 1 
        }, 400).css('display', 'block');
        $(".menu-icon").css('display', 'none'); 
        $(".menu-close").css('display', 'block'); 
        $(".menu, .news-article-menu").css({
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
        $(".menu, .news-article-menu").animate({
            opacity: 0 
        }, 400, function() {
            $(".menu, .news-article-menu").css('display', 'none');  
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

    if ($(".main-page").width() > 1200 || $(".news-page").width() > 1200) { //анимация меню при прокрутке
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

    var portfolio = [
        {
            partners: 'Лены и Максима',
            poster: 'images/galery/svadba_leny_i_maksima_1/preview.jpg',
            galeryId: '1'
        },
        {
            partners: 'Светы и Василия',
            poster: 'images/galery/svadba_leny_i_maksima_2/preview.jpg',
            galeryId: '2'
        },
       {
             partners: 'Иры и Романа',
            poster: 'images/galery/svadba_leny_i_maksima_3/preview.jpg',
            galeryId: '3'
        },
        {
             partners: 'Насти и Паши',
            poster: 'images/galery/svadba_leny_i_maksima_4/preview.jpg',
            galeryId: '4'
        }
    ];
    var video = [
        {
            partners: 'Лены и Максима',
            poster: 'images/galery/video_preview/svadba_leny_i_maksima_1.jpg',
            link: 'watch?v=xyCdd9qoiKY'
        },
        {
            partners: 'Юли и Игоря',
            poster: 'images/galery/video_preview/svadba_leny_i_maksima_2.jpg',
            link: 'watch?v=zJyd5z6LvEg'
        },
       {
            partners: 'Юли и Ивана',
            poster: 'images/galery/video_preview/svadba_leny_i_maksima_3.jpg',
            link: 'watch?v=Y6Cy9uws_Ew'
        },
        {
            partners: 'Юли и Пети',
            poster: 'images/galery/video_preview/svadba_leny_i_maksima_4.jpg',
            link: 'watch?v=9qoqcEB6_D8'
        }
    ];
    var reviews = [
        {
            content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
            title: 'Анна Семёнова',
            portrait: 'images/rewiew/portrait-1.jpg',
        },
       {
            content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
            title: 'Саша Алексеева',
            portrait: 'images/rewiew/portrait-2.jpg',
        },
        {
            content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
            title: 'Меган Фокс',
            portrait: 'images/rewiew/portrait-3.jpg',
        },
        {
            content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
            title: 'Кот Аркадий',
            portrait: 'images/rewiew/portrait-4.jpg',
        },
        {
            content: 'Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.',
            title: 'Дуся',
            portrait: 'images/rewiew/portrait-5.jpg',
        }
    ];

    var news = [
        {
            title: 'Акция ко дню влюбленных',
            poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
            content: 'бла бла блабля бла чето атм расказывается',
            link: 'тут ссылка на полную статью в самом разделе новости'
        },
        {
            title: 'Акция ко дню влюбленных',
            poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
            content: 'бла бла блабля бла чето атм расказывается бла бла блабля бла чето атм расказывается, короткое превью бла бла блабля бла чето атм расказывается, короткое превью бла бла блабля бла чето атм расказывается, короткое превью',
            link: 'тут ссылка на полную статью в самом разделе новости'
        },
        {
            title: 'Акция ко дню влюбленных',
            poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
            content: 'бла бла блабля бла чето атм расказывается',
            link: 'тут ссылка на полную статью в самом разделе новости'
        },
        {
            title: 'Акция ко дню влюбленных',
            poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
            content: 'бла бла блабля бла чето атм расказывается',
            link: 'тут ссылка на полную статью в самом разделе новости'
        },
        {
            title: 'Акция ко дню влюбленных',
            poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
            content: 'бла бла блабля бла чето атм расказывается',
            link: 'тут ссылка на полную статью в самом разделе новости'
        },
    ];

    var counter = 0;

    function caruselSvipe(caruselObj, caruselId, template, carouselItemsClass, carouselBlockClass, tmplWrapp) {

        for (var key in caruselObj) {
            $(caruselId).find(carouselItemsClass).append(tmplWrapp);
            $(caruselId).find(carouselBlockClass).eq(counter).attr('id', [key]);//уникальный айди для каждого блока в который вставляется темплейт
            counter++;
            var itemOfCarusel = caruselId + " " + '#' + key; 
            $(itemOfCarusel).loadTemplate(template, caruselObj[key]);//грузим темплейт
            
            if (counter == caruselObj.length) {
                counter = 0; //если счетчик свойств достиг максимального значения, то сбросить его в ноль
            }
        }

        if (caruselId !== "#reviews-carousel") {
            $(caruselId).on('click', '.right', function(){ 
                var carusel = $(this).parents('.carousel');
                mooveRightCarusel(carusel);
                return false;
            });
            
            $(caruselId).on('click', '.left', function(){ 
                var carusel = $(this).parents('.carousel');
                mooveLeftCarusel(carusel);
                return false;
            });

            $(caruselId).swiperight(function() {//для тачскринов
                mooveLeftCarusel(caruselId);
            }).swipeleft(function() {
                mooveRightCarusel(caruselId);
            });
        } 
    }

    $('#reviews-carousel').swiperight(function() {//для тачскринов
        $("#reviews-carousel").carousel('prev');
    }).swipeleft(function() {
        $("#reviews-carousel").carousel('next');
    });

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
            if ($(carusel).is('.hover') !== true && $(carusel).is('.galeryIsOpen') !== true)
                mooveRightCarusel(carusel);
        }, 5000);

    }

    if ($(".main-page").length) { //генерим разные карусели для главной страницы
        caruselSvipe(news, "#news-carousel", "../templates/news-preview-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
        caruselSvipe(portfolio, "#portfolio-carousel", "../templates/portfolio-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
        caruselSvipe(reviews, "#reviews-carousel", "../templates/review-tmpl.html",  '.carousel-inner', '.item', '<div class="item"></div>');
        caruselSvipe(video, "#video-carousel", "../templates/video-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');

        autoCaruselSvipe('#portfolio-carousel');

        autoCaruselSvipe('#news-carousel');

        autoCaruselSvipe('#video-carousel');

        $("#reviews-carousel .item").eq(0).addClass('active');//нужно для того чтобы работала бутстраповская карусель
        
        $('.carousel').on('mouseenter', function(){$(this).addClass('hover')});//когда курсор на карусели, карусель останавливаеться

        $('.carousel').on('mouseleave', function(){$(this).removeClass('hover')});
    }

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
        var distanceFromTop = $(window).scrollTop();

        if (distanceFromTop < 40) {
            $(".home-arrow").fadeOut(500);
        } else {
           $(".home-arrow").fadeIn(0);
        }

        if ($(".main-page").length) {
            var  distanceToFeedbackForm = $(".feedback-form").offset().top,
                distanceToAboutUs = $("#about-us").offset().top;

            if ($(window).width() >=  768 && distanceFromTop > distanceToFeedbackForm -200) {
                setTimeout(openLetter, 500);
            } 
        } 

        if ($(".article-page").length) {

            var distanceToArticleContent = $(".article-content").offset().top;

            if (distanceFromTop > distanceToArticleContent && $(window).width() > 1200) {
                $(".back-to-news").fadeIn(500);
            }
        }


    });

    // $(".article-page").scroll(function() {
    //     var distanceFromTop = $(window).scrollTop(), //растояние до блоков от верха окна
    //         distanceToArticleContent = $(".article-content").offset().top;

    //         if (distanceFromTop < 40) {
    //             $(".home-arrow").fadeOut(500);
    //         } else {
    //            $(".home-arrow").fadeIn(500); 
    //         }

    //         if (distanceFromTop > distanceToArticleContent) {
    //             $(".back-to-news").fadeIn(500);
    //         }
    // });


    function showGalery(event) {
        var partners = "Свадьба " + $(event.target).attr('alt'),
            galeryId = $(event.target).attr('href'),
            arrOfPhotosLinks = ["images/galery/svadba_leny_i_maksima_1/photo1.jpg","images/galery/svadba_leny_i_maksima_1/photo2.jpg","images/galery/svadba_leny_i_maksima_1/photo3.jpg", "images/galery/svadba_leny_i_maksima_1/photo4.jpg","images/galery/svadba_leny_i_maksima_1/photo5.jpg","images/galery/svadba_leny_i_maksima_1/photo6.jpg","images/galery/svadba_leny_i_maksima_1/photo7.jpg","images/galery/svadba_leny_i_maksima_1/photo8.jpg","images/galery/svadba_leny_i_maksima_1/photo9.jpg"],
            fotosInGaleryUrl = [];

        for (var i = 0; i < arrOfPhotosLinks.length; i++) {
            fotosInGaleryUrl.push({"url": arrOfPhotosLinks[i], "thumbUrl": arrOfPhotosLinks[i], "title": partners});  
        }

        $('#gallery').show().jGallery({//галерея на главной странице
            mode: 'full-screen',
            slideshowAutostart: false,
            canChangeMode: false,
            canZoom:false,
            canClose: true,
            swipeEvents: true,
            thumbnailsHideOnMobile: false,
            slideshowCanRandom: false,
            thumbnailsFullScreen: true,
            canMinimalizeThumbnails: false,
            maxMobileWidth: 300,
            tooltipRandom: 'Рандом',
            tooltipSlideshow: 'Слайдшоу',
            tooltipClose: 'Закрыть',
            tooltipSeeAllPhotos: 'Все фото',
            tooltipToggleThumbnails: 'Скрыть миниатюры',
            backgroundColor: '#25325a',
            textColor: 'white',
            items: fotosInGaleryUrl
        });
    }

    $('#article-gallery').jGallery({//новостная галерея
        mode: 'standard',
        slideshowAutostart: false,
        canChangeMode: true,
        canZoom:false,
        canClose: false,
        swipeEvents: true,
        thumbnailsHideOnMobile: false,
        slideshowCanRandom: false,
        thumbnailsFullScreen: false,
        slideshow: false,
        canMinimalizeThumbnails: false,
        maxMobileWidth: 300,
        tooltipRandom: 'Рандом',
        tooltipSlideshow: 'Слайдшоу',
        tooltipClose: 'Закрыть',
        tooltipSeeAllPhotos: 'Все фото',
        tooltipToggleThumbnails: 'Скрыть миниатюры',
        backgroundColor: '#21284d',
        textColor: 'white',
        items: [{"url": "images/galery/svadba_leny_i_maksima_1/photo1.jpg", "thumbUrl": "images/galery/svadba_leny_i_maksima_1/photo1.jpg"},{"url": "images/galery/svadba_leny_i_maksima_1/photo2.jpg", "thumbUrl": "images/galery/svadba_leny_i_maksima_1/photo2.jpg"}]
    });

    // ВИДЕО ПЛЕЕР
    var portfolioPlayer = plyr.setup('.portfolio-player', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
        volume: 2,
        autoplay: false
    });

    var articlePlayer = plyr.setup('.article-player', {
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
        volume: 2,
        autoplay: false
    });

    $("#video-carousel").on('click', 'a', function(event) {
        event.preventDefault();
        $("#video-carousel").addClass('galeryIsOpen');
        $("body").css('overflow', 'hidden');
        $("#video-gallery").css('display', 'flex');
        var videoLink = $(this).attr('href');

        portfolioPlayer[0].source({
          type:       'video',
          sources: [{
            src:    videoLink,
            type:   'youtube' 
          }]
        });
    });

    $(".close-video").on('click', "span", function(event) {
        event.preventDefault();
        $("#video-carousel").removeClass('galeryIsOpen');
        $("#video-gallery").fadeOut("500");
        portfolioPlayer[0].stop();
        $("body").css('overflow', 'visible');
    });

    $("#portfolio-carousel").on('click', 'a', function(event) {
        event.preventDefault();
        showGalery(event);
        $("#portfolio-carousel").addClass('galeryIsOpen');
    });

    $("#gallery").on('click', ".fa-times", function(event) {
        event.preventDefault();
        $("#portfolio-carousel").removeClass('galeryIsOpen');
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
});

    
