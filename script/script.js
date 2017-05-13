
window.onload = function() {
    setTimeout(closeLoadingScreen, 0);
    setInterval(changeOrgHeaderBg, 5000);

    function closeLoadingScreen() {
        $("body").css('overflow', 'visible');
        $(".loading-screen").animate({
            opacity: 0 
        }, 0, function() {
            $(".loading-screen").css('display', 'none'); 
            $(".content-wrapper").animate({"opacity": "1"}, 500) ;
        });
    }
    var stateOfOrgHeaderBg = "nowIsFirstImg";

    function changeOrgHeaderBg() {
        if (stateOfOrgHeaderBg == "nowIsFirstImg") {
            $(".first-header-img").fadeOut("0");
            $(".second-header-img").fadeIn("500");
            stateOfOrgHeaderBg = "nowIsSecondImg";
        } else {
            $(".first-header-img").fadeIn("500");
            $(".second-header-img").fadeOut("0");
            stateOfOrgHeaderBg = "nowIsFirstImg";
        }
    }
};

$(document).ready(function($) {

    $(window).scroll(function() {
        var distanceFromTop = $(window).scrollTop();

        if (distanceFromTop < 40) {
            $(".home-arrow").fadeOut(500);
        } else {
           $(".home-arrow").fadeIn(0);
        }

        if ($(".main-page").length || $(".coordination-page").length || $(".organisation-page").length)  {
            var  distanceToFeedbackForm = $(".feedback-form").offset().top,
                distanceToAboutUs = $("#about-us").offset().top;

            if ($(window).width() >=  768 && distanceFromTop > distanceToFeedbackForm -200) {
                setTimeout(openLetter, 500);
            } 
        } 
    });

    $(".menu, .news-article-menu").on("click", "a", function(event) { //перход по якорным ссылкам из меню навигации
         
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

    if ($(".main-page").width() > 1200 || $(".news-page").width() > 1200 || $(".coordination-page").width() > 1200 || $(".organisation-page").width() > 1200) { //анимация меню при прокрутке
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

    // var mainNews = [
    //     {
    //         title: 'Свадьбы на природе',
    //         chapter: 'Новости',
    //         poster: 'images/news/news3.jpg',
    //         link: 'watch?v=xyCdd9qoiKY'
    //     },
    //     {
    //         title: 'Свадьбы на природе',
    //         chapter: 'Новости',
    //         poster: 'images/news/news3.jpg',
    //         link: 'watch?v=xyCdd9qoiKY'
    //     },
       
    // ]; 

    // var news = [
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается бла бла блабля бла чето атм расказывается, короткое превью бла бла блабля бла чето атм расказывается, короткое превью бла бла блабля бла чето атм расказывается, короткое превью',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    //     {
    //         title: 'Акция ко дню влюбленных',
    //         poster: 'images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg',
    //         content: 'бла бла блабля бла чето атм расказывается',
    //         link: 'тут ссылка на полную статью в самом разделе новости'
    //     },
    // ];

    var counter = 0,
        mainNews = [],
        newsCounter = 0;//В зависимости от значения строяться определенные блоки новостей, сбрасывается в ноль каждые 6 итераций
        itemCount = 0;//Нужен для присвоения айдишников для блоков в которые вставляются темплейты

    function bildNews(mainNews) {//Страница новостей
        mainNews.forEach(function(elem, i) {
            var itemOfNews = '#news-wrap' + " " + '#big-' + itemCount;
            
            if (newsCounter === 0) { 
                $('#news-wrap').append('<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 big"></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6"><div class="row double-block"><div class="upper-block"></div><div class="lower-block"></div></div></div>');
                $('#news-wrap').find('.big').eq(itemCount).attr('id', 'big-' + [itemCount]);//уникальный айди для каждого блока в который вставляется темплейт
                $('#news-wrap').find('.upper-block').eq(itemCount).attr('id', 'upper-block-' + [itemCount]);
                $('#news-wrap').find('.lower-block').eq(itemCount).attr('id', 'lower-block-' + [itemCount]);
                $(itemOfNews).loadTemplate("../templates/big-block-tmpl.html", elem);//грузим темплейт
                itemCount++;
            }

            if (newsCounter === 3) {
                $('#news-wrap').append('<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6"><div class="row double-block"><div class="upper-block"></div><div class="lower-block"></div></div></div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 big"></div>');
                $('#news-wrap').find('.upper-block').eq(itemCount).attr('id', 'upper-block-' + [itemCount]);
                $('#news-wrap').find('.lower-block').eq(itemCount).attr('id', 'lower-block-' + [itemCount]);
                $('#news-wrap').find('.big').eq(itemCount).attr('id', 'big-' + [itemCount]);
                itemCount++;
            }

            if (newsCounter === 1 || newsCounter === 3) {
                itemOfNews = '#news-wrap' + " " + '#upper-block-' + (itemCount - 1);
                $(itemOfNews).loadTemplate("../templates/upper-block-tmpl.html", elem);
            }

            if (newsCounter === 2 || newsCounter === 4) {
                itemOfNews = '#news-wrap' + " " + '#lower-block-' + (itemCount - 1);
                $(itemOfNews).loadTemplate("../templates/lower-block-tmpl.html", elem);
            }

            if (newsCounter === 5) {
                itemOfNews = '#news-wrap' + " " + '#big-' + (itemCount - 1);
                $(itemOfNews).loadTemplate("../templates/big-block-tmpl.html", elem);
            }

            newsCounter++;

            if (newsCounter === 6) {
                newsCounter = 0;
            }
        });
    }

    // if ($('.news-page').length) {

    //     $.ajax({
    //         url: 'newsMainPage',
    //         type: 'GET',
    //     })
    //     .done(function(mainNews) {
    //         bildNews(mainNews);// запуск построения страницы с новостями после получения массива с данными для темплейта по аякс
    //         console.log(mainNews);
    //     }); 
    //     bildNews(mainNews);
    // }

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

        $.ajax({ // построение карусели отзывов
            url: 'api.php?action=get_reviews',
            type: 'GET',
        })
        .done(function(reviews) {
            caruselSvipe(reviews, "#reviews-carousel", "../templates/review-tmpl.html",  '.carousel-inner', '.item', '<div class="item"></div>');
            $("#reviews-carousel .item").eq(0).addClass('active');//нужно для того чтобы работала бутстраповская карусель 
        });
        
        $.ajax({// построение видео карусели 
            url: 'api.php?action=get_video',
            type: 'GET',
        })
        .done(function(video) {
            caruselSvipe(video, "#video-carousel", "../templates/video-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
        });

        $.ajax({// построение карусели портфолио 
            url: 'api.php?action=get_album',
            type: 'GET',
        })
        .done(function(portfolio) {
            caruselSvipe(portfolio, "#portfolio-carousel", "../templates/portfolio-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
        });

        $.ajax({// построение карусели портфолио 
            url: 'api.php?action=get_news_preview',
            type: 'GET',
        })
        .done(function(news) {// построение карусели новостей
            caruselSvipe(news, "#news-carousel", "../templates/news-preview-tmpl.html", '.carousel-items', '.carousel-block', '<div class="carousel-block"></div>');
        });
        
        autoCaruselSvipe('#portfolio-carousel');//Запуск каруселей
        autoCaruselSvipe('#news-carousel');
        autoCaruselSvipe('#video-carousel');
        
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

    $(".top").on("click", function() {
        letterIsOpen = false;
        $(".letter-form").parent().find('button').html("Отправить").css('font-size', '16px');
        openLetter();
    });

    function showGalery(event) {
        var partners = "Свадьба " + $(event.target).attr('alt'),
            galeryId = 'api.php?action=get_photo&id_album=' + $(event.target).attr('href'),
            arrOfPhotosLinks = [],
            fotosInGaleryUrl = [];

        $.ajax({
            url: galeryId,
            type: 'GET',
        })
        .done(function(data) {
            arrOfPhotosLinks = data;

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
        });
    }

    if ($(".news-article-page").length) {// Построение новостной галереи 
        bildArticleGalery();
    }

    function bildArticleGalery() {//Новостная галерея
        var arrOfPhotosLinks = [{"url": "images/galery/svadba_leny_i_maksima_1/photo1.jpg", "thumbUrl": "images/galery/svadba_leny_i_maksima_1/photo1.jpg"},{"url": "images/galery/svadba_leny_i_maksima_1/photo2.jpg", "thumbUrl": "images/galery/svadba_leny_i_maksima_1/photo2.jpg"}],
            fotosInGaleryUrl = [];
            
            // $.ajax({
            //     url: newsGaleryLinks,
            //     type: 'GET',
            // })
            // .done(function(data) {
            //     arrOfPhotosLinks = data;
            // });
            
        for (var i = 0; i < arrOfPhotosLinks.length; i++) {
            fotosInGaleryUrl.push({"url": arrOfPhotosLinks[i], "thumbUrl": arrOfPhotosLinks[i]});  
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
            items: arrOfPhotosLinks
        });
    }

    $("#portfolio-carousel").on('click', 'a', function(event) {//отркытие галереи на главной
        event.preventDefault();
        showGalery(event);
        $("#portfolio-carousel").addClass('galeryIsOpen');//остановка карусели, когда галерея открыта
    });

    $("#gallery").on('click', ".fa-times", function(event) { //запуск карусели, когда галерея закрыта
        event.preventDefault();
        $("#portfolio-carousel").removeClass('galeryIsOpen');
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

    // РАБОТА С ФОРМАМИ СВЯЗИ
    $('#inputPhone').mask("+3 (999) 999-99-99");

    $('.form-group').on('click', 'button', function(event) {
        event.preventDefault();
        var phone = $(this).parent().find('#inputPhone'),
            clientName = $(this).parent().find('#inputName'),
            organisatorForm = "Имя клиента: " + clientName.val() + " " + "Номер телефона: " + phone.val();

        if (clientName.val() === "") {
            clientName.css('outline', 'solid red').attr('placeholder', 'Введите ваше имя');
        } else {
            clientName.css('outline', 'none').attr('placeholder', 'Ваше имя');
        }

        if (phone.val() === "") {
            phone.css('outline', 'solid red').attr('placeholder', 'Введите ваш телефон');
        } else {
            phone.css('outline', 'none').attr('placeholder', 'Ваш телефон');
        }

        if (phone.val() !== "" && clientName.val() !== "") {
            $.ajax({
                url: 'organisationForm',
                type: 'PUL',
                processData: false,
                data: organisatorForm,
            });
            $(this).parent().find('button').html("Данные отправлены").css('font-size', '16px');
        }
    });

    $('.letter-wrap').find('[name = phone]').mask("+3 (999) 999-99-99");

    $('.letter-wrap').on('click', 'button', function(event) {
        event.preventDefault();
        var weddingDate = $(this).parent().find('[name = date]'),
            clientEmail = $(this).parent().find('[name = email]'),
            phone = $(this).parent().find('[name = phone]'),
            contactForm = "Дата свадьбы: " + weddingDate.val() + " " + "Номер телефона: " + phone.val() + " " + "Емейл: " + clientEmail.val(),
            mailMask = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i; 

        if (clientEmail.val().search(mailMask) === 0) {//проверка правильности введения емейл
            clientEmail.css('border-bottom', 'solid 1px black').attr('placeholder', 'Ваш e-mail');
            $('.letter-wrap form').find('p').fadeOut('0');
        } else {
            clientEmail.css('border-bottom', 'solid 2px red').attr('placeholder', 'Введите E-mail');
            $('.letter-wrap form').find('p').fadeOut('0');
            if (clientEmail.val() !== "") {
                $('.letter-wrap form').append('<p>Неправильная почта</p>').find('p').css({
                    position: 'absolute',
                    color: 'red',
                    top: '230px',
                    left: '0',
                    width: '100%',
                    'font-size': '17px'
                });
            }
        }

        if (phone.val() === "") {
            phone.css('border-bottom', 'solid 2px red').attr('placeholder', 'Введите ваш телефон');
        } else {
            phone.css('border-bottom', 'solid 1px black').attr('placeholder', 'Ваш телефон');
        }
        
        if (phone.val() !== "" && clientEmail.val() !== "" && clientEmail.val().search(mailMask) === 0) {

            $.ajax({
                url: 'contactForm',
                type: 'PUL',
                processData: false,
                data: contactForm,
            });

            if ($(window).width() >= 768) { 
                closeLetter();
            } 

            $(this).parent().find('button').html("Данные отправлены").css('font-size', '16px');
        }
    });

    $('.letter-wrap [name = email]').on('keyup', function() {
        if ($(this).val() === "") {
            $('.letter-wrap form').find('p').fadeOut('0');
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
});


