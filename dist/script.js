window.onload=function(){function e(){$("body").css("overflow","visible"),$(".loading-screen").animate({opacity:0},0,function(){$(".loading-screen").css("display","none"),$(".content-wrapper").animate({opacity:"1"},500)})}function o(){"nowIsFirstImg"==t?($(".first-header-img").fadeOut("0"),$(".second-header-img").fadeIn("500"),t="nowIsSecondImg"):($(".first-header-img").fadeIn("500"),$(".second-header-img").fadeOut("0"),t="nowIsFirstImg")}setTimeout(e,0),setInterval(o,5e3);var t="nowIsFirstImg"},$(document).ready(function(e){function o(){e(".home-arrow").fadeOut("0"),e(".menu, .news-article-menu").css("opacity","0"),e(".menu-mobile .banner").css("display","none"),e(".menu, .news-article-menu").animate({opacity:1},400).css("display","block"),e(".menu-icon").css("display","none"),e(".menu-close").css("display","block"),e(".menu, .news-article-menu").css({position:"fixed",top:"0",bot:"0",left:"0",right:"0"})}function t(){e(".home-arrow").fadeIn("0"),e(".menu-icon").css("display","block"),e(".menu-close").css("display","none"),e(".menu-mobile .banner").css("display","block"),e(".menu, .news-article-menu").animate({opacity:0},400,function(){e(".menu, .news-article-menu").css("display","none"),e(".navigation").css("height","80px")})}function a(o){return 0===e(window).scrollTop()&&("menuIsSmall"!==f&&void 0!==f||(l("80px","transparent","#fff","10px",o,"block","none"),f="menuIsBig")),f}function n(o){return 0!==e(window).scrollTop()&&("menuIsBig"!==f&&void 0!==f||(l("60px","#fff","#16275b","4px",o,"none","block"),f="menuIsSmall")),f}function l(o,t,a,n,l,i,s){e(".menu").animate({height:o},l),e(".menu").css("background-color",t),e(".menu a, .menu span").css("color",a),e(".banner").css("margin-bottom",n),e(".banner").css({"margin-bottom":n,"background-color":t}),e(".logo-white").css("display",i),e(".logo-color").css("display",s)}function i(){0===e(window).scrollTop()&&(e(".banner").stop(!0,!0),e(".banner").animate({opacity:"1"},500))}function s(o,t,a,n,l,i){for(var s in o){e(t).find(n).append(i),e(t).find(l).eq(h).attr("id",[s]),h++;e(t+" #"+s).loadTemplate(a,o[s]),h==o.length&&(h=0)}"#reviews-carousel"!==t&&(e(t).on("click",".right",function(){return c(e(this).parents(".carousel")),!1}),e(t).on("click",".left",function(){return r(e(this).parents(".carousel")),!1}),e(t).swiperight(function(){r(t)}).swipeleft(function(){c(t)}))}function r(o){var t=e(o).find(".carousel-block").outerWidth();e(o).find(".carousel-items .carousel-block").eq(-1).clone().prependTo(e(o).find(".carousel-items")),e(o).find(".carousel-items").css({left:"-"+t+"px"}),e(o).find(".carousel-items .carousel-block").eq(-1).remove(),e(o).find(".carousel-items").animate({left:"0px"},500)}function c(o){var t=e(o).find(".carousel-block").outerWidth();e(o).find(".carousel-items").animate({left:"-"+t+"px"},500,function(){e(o).find(".carousel-items .carousel-block").eq(0).clone().appendTo(e(o).find(".carousel-items")),e(o).find(".carousel-items .carousel-block").eq(0).remove(),e(o).find(".carousel-items").css({left:"0px"})})}function u(o){setInterval(function(){!0!==e(o).is(".hover")&&!0!==e(o).is(".galeryIsOpen")&&c(o)},5e3)}function p(){return!1===w&&(e(".stamp").fadeOut(0),e(".letter-wrap").animate({"margin-top":"230px"},1e3),e(".top").css("display","none"),e(".cover-wrap").fadeIn(500),e(".letter-form").delay(1200).animate({top:-225},400),w=!0),w}function d(){e(".letter-wrap").animate({"margin-top":"0px"},1e3),e(".letter-form").animate({top:0},400,function(){e(".cover-wrap").fadeOut("500"),e(".top").fadeIn(500),e(".stamp").delay(500).fadeIn(500)})}function m(o){var t="Свадьба "+e(o.target).attr("alt"),a="api.php?action=get_photo&id_album="+e(o.target).attr("href"),n=[],l=[];e.ajax({url:a,type:"GET"}).done(function(o){n=o;for(var a=0;a<n.length;a++)l.push({url:n[a],thumbUrl:n[a],title:t});e("#gallery").show().jGallery({mode:"full-screen",slideshowAutostart:!1,canChangeMode:!1,canZoom:!1,canClose:!0,swipeEvents:!0,thumbnailsHideOnMobile:!1,slideshowCanRandom:!1,thumbnailsFullScreen:!0,canMinimalizeThumbnails:!1,maxMobileWidth:300,tooltipRandom:"Рандом",tooltipSlideshow:"Слайдшоу",tooltipClose:"Закрыть",tooltipSeeAllPhotos:"Все фото",tooltipToggleThumbnails:"Скрыть миниатюры",backgroundColor:"#25325a",textColor:"white",items:l})})}if(e(window).scroll(function(){var o=e(window).scrollTop();if(o<40?e(".home-arrow").fadeOut(500):e(".home-arrow").fadeIn(0),e(".main-page").length||e(".coordination-page").length||e(".organisation-page").length){var t=e(".feedback-form").offset().top;e("#about-us").offset().top;e(window).width()>=768&&o>t-200&&setTimeout(p,500)}}),e(".menu, .news-article-menu").on("click","a",function(o){var a,n=e(this).attr("href");a=e(window).width()>1200?e(n).offset().top-60:e(n).offset().top,e(window).width()<1200&&t(),e("body,html").animate({scrollTop:a},1500)}),e(".arrow-down").on("click",function(o){o.preventDefault();var t;t=e(window).width()>1200?e("#about-us").offset().top-60:e("#about-us").offset().top,e("body,html").animate({scrollTop:t},1500)}),e(".home-arrow").on("click",function(o){e("body,html").animate({scrollTop:0},500)}),e(".menu-icon").on("click",function(){o()}),e(".menu-close").on("click",function(){t()}),e(".main-page").width()>1200||e(".news-page").width()>1200||e(".coordination-page").width()>1200||e(".organisation-page").width()>1200){var f;0!==e(window).scrollTop()?n(0):a(0),e(window).scroll(function(){n(800),a(800)})}else e(window).scroll(function(){e(".banner").animate({opacity:"0"},500),i()}),0!==e(window).scrollTop()&&e(".banner").css("opacity","0");var h=0;itemCount=0,e("#reviews-carousel").swiperight(function(){e("#reviews-carousel").carousel("prev")}).swipeleft(function(){e("#reviews-carousel").carousel("next")}),e(".main-page").length&&(e.ajax({url:"api.php?action=get_reviews",type:"GET"}).done(function(o){s(o,"#reviews-carousel","../templates/review-tmpl.html",".carousel-inner",".item",'<div class="item"></div>'),e("#reviews-carousel .item").eq(0).addClass("active")}),e.ajax({url:"api.php?action=get_video",type:"GET"}).done(function(e){s(e,"#video-carousel","../templates/video-tmpl.html",".carousel-items",".carousel-block",'<div class="carousel-block"></div>')}),e.ajax({url:"api.php?action=get_album",type:"GET"}).done(function(e){s(e,"#portfolio-carousel","../templates/portfolio-tmpl.html",".carousel-items",".carousel-block",'<div class="carousel-block"></div>')}),e.ajax({url:"api.php?action=get_news_preview",type:"GET"}).done(function(e){s(e,"#news-carousel","../templates/news-preview-tmpl.html",".carousel-items",".carousel-block",'<div class="carousel-block"></div>')}),u("#portfolio-carousel"),u("#news-carousel"),u("#video-carousel"),e(".carousel").on("mouseenter",function(){e(this).addClass("hover")}),e(".carousel").on("mouseleave",function(){e(this).removeClass("hover")}));var w=!1;e(".top").on("click",function(){w=!1,e(".letter-form").parent().find("button").html("Отправить").css("font-size","16px"),p()}),e(".news-article-page").length&&function(){for(var o=[{url:"images/galery/svadba_leny_i_maksima_1/photo1.jpg",thumbUrl:"images/galery/svadba_leny_i_maksima_1/photo1.jpg"},{url:"images/galery/svadba_leny_i_maksima_1/photo2.jpg",thumbUrl:"images/galery/svadba_leny_i_maksima_1/photo2.jpg"}],t=[],a=0;a<o.length;a++)t.push({url:o[a],thumbUrl:o[a]});e("#article-gallery").jGallery({mode:"standard",slideshowAutostart:!1,canChangeMode:!0,canZoom:!1,canClose:!1,swipeEvents:!0,thumbnailsHideOnMobile:!1,slideshowCanRandom:!1,thumbnailsFullScreen:!1,slideshow:!1,canMinimalizeThumbnails:!1,maxMobileWidth:300,tooltipRandom:"Рандом",tooltipSlideshow:"Слайдшоу",tooltipClose:"Закрыть",tooltipSeeAllPhotos:"Все фото",tooltipToggleThumbnails:"Скрыть миниатюры",backgroundColor:"#21284d",textColor:"white",items:o})}(),e("#portfolio-carousel").on("click","a",function(o){o.preventDefault(),m(o),e("#portfolio-carousel").addClass("galeryIsOpen")}),e("#gallery").on("click",".fa-times",function(o){o.preventDefault(),e("#portfolio-carousel").removeClass("galeryIsOpen")});var v=plyr.setup(".portfolio-player",{controls:["play","progress","current-time","mute","volume","captions","fullscreen"],volume:2,autoplay:!1});plyr.setup(".article-player",{controls:["play","progress","current-time","mute","volume","captions","fullscreen"],volume:2,autoplay:!1});e("#video-carousel").on("click","a",function(o){o.preventDefault(),e("#video-carousel").addClass("galeryIsOpen"),e("body").css("overflow","hidden"),e("#video-gallery").css("display","flex");var t=e(this).attr("href");v[0].source({type:"video",sources:[{src:t,type:"youtube"}]})}),e(".close-video").on("click","span",function(o){o.preventDefault(),e("#video-carousel").removeClass("galeryIsOpen"),e("#video-gallery").fadeOut("500"),v[0].stop(),e("body").css("overflow","visible")}),e("#inputPhone").mask("+3 (999) 999-99-99"),e(".form-group").on("click","button",function(o){o.preventDefault();var t=e(this).parent().find("#inputPhone"),a=e(this).parent().find("#inputName"),n="Имя клиента: "+a.val()+" Номер телефона: "+t.val();""===a.val()?a.css("outline","solid red").attr("placeholder","Введите ваше имя"):a.css("outline","none").attr("placeholder","Ваше имя"),""===t.val()?t.css("outline","solid red").attr("placeholder","Введите ваш телефон"):t.css("outline","none").attr("placeholder","Ваш телефон"),""!==t.val()&&""!==a.val()&&(e.ajax({url:"organisationForm",type:"PUL",processData:!1,data:n}),e(this).parent().find("button").html("Данные отправлены").css("font-size","16px"))}),e(".letter-wrap").find("[name = phone]").mask("+3 (999) 999-99-99"),e(".letter-wrap").on("click","button",function(o){o.preventDefault();var t=e(this).parent().find("[name = date]"),a=e(this).parent().find("[name = email]"),n=e(this).parent().find("[name = phone]"),l="Дата свадьбы: "+t.val()+" Номер телефона: "+n.val()+" Емейл: "+a.val(),i=/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;0===a.val().search(i)?(a.css("border-bottom","solid 1px black").attr("placeholder","Ваш e-mail"),e(".letter-wrap form").find("p").fadeOut("0")):(a.css("border-bottom","solid 2px red").attr("placeholder","Введите E-mail"),e(".letter-wrap form").find("p").fadeOut("0"),""!==a.val()&&e(".letter-wrap form").append("<p>Неправильная почта</p>").find("p").css({position:"absolute",color:"red",top:"230px",left:"0",width:"100%","font-size":"17px"})),""===n.val()?n.css("border-bottom","solid 2px red").attr("placeholder","Введите ваш телефон"):n.css("border-bottom","solid 1px black").attr("placeholder","Ваш телефон"),""!==n.val()&&""!==a.val()&&0===a.val().search(i)&&(e.ajax({url:"contactForm",type:"PUL",processData:!1,data:l}),e(window).width()>=768&&d(),e(this).parent().find("button").html("Данные отправлены").css("font-size","16px"))}),e(".letter-wrap [name = email]").on("keyup",function(){""===e(this).val()&&e(".letter-wrap form").find("p").fadeOut("0")})});