window.onload=function(){function e(){$("body").css("overflow","visible"),$(".loading-screen").animate({opacity:0},0,function(){$(".loading-screen").css("display","none"),$(".content-wrapper").animate({opacity:"1"},500)})}setTimeout(e,10)},$(document).ready(function(e){function a(){e(".home-arrow").fadeOut("0"),e(".menu, .news-article-menu").css("opacity","0"),e(".menu-mobile .banner").css("display","none"),e(".menu, .news-article-menu").animate({opacity:1},400).css("display","block"),e(".menu-icon").css("display","none"),e(".menu-close").css("display","block"),e(".menu, .news-article-menu").css({position:"fixed",top:"0",bot:"0",left:"0",right:"0"})}function i(){e(".home-arrow").fadeIn("0"),e(".menu-icon").css("display","block"),e(".menu-close").css("display","none"),e(".menu-mobile .banner").css("display","block"),e(".menu, .news-article-menu").animate({opacity:0},400,function(){e(".menu, .news-article-menu").css("display","none"),e(".navigation").css("height","80px")})}function o(a){return 0===e(window).scrollTop()&&("menuIsSmall"!==g&&void 0!==g||(s("80px","transparent","#fff","10px",a,"block","none"),g="menuIsBig")),g}function t(a){return 0!==e(window).scrollTop()&&("menuIsBig"!==g&&void 0!==g||(s("60px","#fff","#16275b","4px",a,"none","block"),g="menuIsSmall")),g}function s(a,i,o,t,s,n,l){e(".menu").animate({height:a},s),e(".menu").css("background-color",i),e(".menu a, .menu span").css("color",o),e(".banner").css("margin-bottom",t),e(".banner").css({"margin-bottom":t,"background-color":i}),e(".logo-white").css("display",n),e(".logo-color").css("display",l)}function n(){0===e(window).scrollTop()&&(e(".banner").stop(!0,!0),e(".banner").animate({opacity:"1"},500))}function l(a,i,o,t,s,n){for(var l in a){e(i).find(t).append(n),e(i).find(s).eq(h).attr("id",[l]),h++;e(i+" #"+l).loadTemplate(o,a[l]),h==a.length&&(h=0)}"#reviews-carousel"!==i&&(e(i).on("click",".right",function(){return u(e(this).parents(".carousel")),!1}),e(i).on("click",".left",function(){return r(e(this).parents(".carousel")),!1}),e(i).swiperight(function(){r(i)}).swipeleft(function(){u(i)}))}function r(a){var i=e(a).find(".carousel-block").outerWidth();e(a).find(".carousel-items .carousel-block").eq(-1).clone().prependTo(e(a).find(".carousel-items")),e(a).find(".carousel-items").css({left:"-"+i+"px"}),e(a).find(".carousel-items .carousel-block").eq(-1).remove(),e(a).find(".carousel-items").animate({left:"0px"},500)}function u(a){var i=e(a).find(".carousel-block").outerWidth();e(a).find(".carousel-items").animate({left:"-"+i+"px"},500,function(){e(a).find(".carousel-items .carousel-block").eq(0).clone().appendTo(e(a).find(".carousel-items")),e(a).find(".carousel-items .carousel-block").eq(0).remove(),e(a).find(".carousel-items").css({left:"0px"})})}function c(a){setInterval(function(){e(a).is(".hover")!==!0&&e(a).is(".galeryIsOpen")!==!0&&u(a)},5e3)}function m(){return b===!1&&(e(".stamp").fadeOut(0),e(".letter-wrap").animate({"margin-top":"230px"},1e3),e(".top").css("display","none"),e(".cover-wrap").fadeIn(500),e(".letter-form").delay(1200).animate({top:-225},400),b=!0),b}function p(){e(".letter-wrap").animate({"margin-top":"0px"},1e3),e(".letter-form").animate({top:0},400,function(){e(".cover-wrap").fadeOut("500"),e(".top").fadeIn(500),e(".stamp").delay(500).fadeIn(500)})}function d(a){for(var i="Свадьба "+e(a.target).attr("alt"),o=(e(a.target).attr("href"),["images/galery/svadba_leny_i_maksima_1/photo1.jpg","images/galery/svadba_leny_i_maksima_1/photo2.jpg","images/galery/svadba_leny_i_maksima_1/photo3.jpg","images/galery/svadba_leny_i_maksima_1/photo4.jpg","images/galery/svadba_leny_i_maksima_1/photo5.jpg","images/galery/svadba_leny_i_maksima_1/photo6.jpg","images/galery/svadba_leny_i_maksima_1/photo7.jpg","images/galery/svadba_leny_i_maksima_1/photo8.jpg","images/galery/svadba_leny_i_maksima_1/photo9.jpg"]),t=[],s=0;s<o.length;s++)t.push({url:o[s],thumbUrl:o[s],title:i});e("#gallery").show().jGallery({mode:"full-screen",slideshowAutostart:!1,canChangeMode:!1,canZoom:!1,canClose:!0,swipeEvents:!0,thumbnailsHideOnMobile:!1,slideshowCanRandom:!1,thumbnailsFullScreen:!0,canMinimalizeThumbnails:!1,maxMobileWidth:300,tooltipRandom:"Рандом",tooltipSlideshow:"Слайдшоу",tooltipClose:"Закрыть",tooltipSeeAllPhotos:"Все фото",tooltipToggleThumbnails:"Скрыть миниатюры",backgroundColor:"#25325a",textColor:"white",items:t})}if(e(".menu").on("click","a",function(a){a.preventDefault();var o,t=e(this).attr("href");o=e(window).width()>1200?e(t).offset().top-60:e(t).offset().top,e(window).width()<1200&&i(),e("body,html").animate({scrollTop:o},1500)}),e(".arrow-down").on("click",function(a){a.preventDefault();var i;i=e(window).width()>1200?e("#about-us").offset().top-60:e("#about-us").offset().top,e("body,html").animate({scrollTop:i},1500)}),e(".home-arrow").on("click",function(a){e("body,html").animate({scrollTop:0},500)}),e(".menu-icon").on("click",function(){a()}),e(".menu-close").on("click",function(){i()}),e(".main-page").width()>1200||e(".news-page").width()>1200){var g;0!==e(window).scrollTop()?t(0):o(0),e(window).scroll(function(){t(800),o(800)})}else e(window).scroll(function(){e(".banner").animate({opacity:"0"},500),n()}),0!==e(window).scrollTop()&&e(".banner").css("opacity","0");var f=[{partners:"Лены и Максима",poster:"images/galery/svadba_leny_i_maksima_1/preview.jpg",galeryId:"1"},{partners:"Светы и Василия",poster:"images/galery/svadba_leny_i_maksima_2/preview.jpg",galeryId:"2"},{partners:"Иры и Романа",poster:"images/galery/svadba_leny_i_maksima_3/preview.jpg",galeryId:"3"},{partners:"Насти и Паши",poster:"images/galery/svadba_leny_i_maksima_4/preview.jpg",galeryId:"4"}],v=[{partners:"Лены и Максима",poster:"images/galery/video_preview/svadba_leny_i_maksima_1.jpg",link:"watch?v=xyCdd9qoiKY"},{partners:"Юли и Игоря",poster:"images/galery/video_preview/svadba_leny_i_maksima_2.jpg",link:"watch?v=zJyd5z6LvEg"},{partners:"Юли и Ивана",poster:"images/galery/video_preview/svadba_leny_i_maksima_3.jpg",link:"watch?v=Y6Cy9uws_Ew"},{partners:"Юли и Пети",poster:"images/galery/video_preview/svadba_leny_i_maksima_4.jpg",link:"watch?v=9qoqcEB6_D8"}],w=[{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Анна Семёнова",portrait:"images/rewiew/portrait-1.jpg"},{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Саша Алексеева",portrait:"images/rewiew/portrait-2.jpg"},{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Меган Фокс",portrait:"images/rewiew/portrait-3.jpg"},{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Кот Аркадий",portrait:"images/rewiew/portrait-4.jpg"},{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Дуся",portrait:"images/rewiew/portrait-5.jpg"}],_=[{title:"Акция ко дню влюбленных",poster:"images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg",content:"бла бла блабля бла чето атм расказывается",link:"тут ссылка на полную статью в самом разделе новости"},{title:"Акция ко дню влюбленных",poster:"images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg",content:"бла бла блабля бла чето атм расказывается бла бла блабля бла чето атм расказывается, короткое превью бла бла блабля бла чето атм расказывается, короткое превью бла бла блабля бла чето атм расказывается, короткое превью",link:"тут ссылка на полную статью в самом разделе новости"},{title:"Акция ко дню влюбленных",poster:"images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg",content:"бла бла блабля бла чето атм расказывается",link:"тут ссылка на полную статью в самом разделе новости"},{title:"Акция ко дню влюбленных",poster:"images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg",content:"бла бла блабля бла чето атм расказывается",link:"тут ссылка на полную статью в самом разделе новости"},{title:"Акция ко дню влюбленных",poster:"images/news/akcija_ko_dnu_vlublennyh_1/preview.jpg",content:"бла бла блабля бла чето атм расказывается",link:"тут ссылка на полную статью в самом разделе новости"}],h=0;e("#reviews-carousel").swiperight(function(){e("#reviews-carousel").carousel("prev")}).swipeleft(function(){e("#reviews-carousel").carousel("next")}),e(".main-page").length&&(l(_,"#news-carousel","../templates/news-preview-tmpl.html",".carousel-items",".carousel-block",'<div class="carousel-block"></div>'),l(f,"#portfolio-carousel","../templates/portfolio-tmpl.html",".carousel-items",".carousel-block",'<div class="carousel-block"></div>'),l(w,"#reviews-carousel","../templates/review-tmpl.html",".carousel-inner",".item",'<div class="item"></div>'),l(v,"#video-carousel","../templates/video-tmpl.html",".carousel-items",".carousel-block",'<div class="carousel-block"></div>'),c("#portfolio-carousel"),c("#news-carousel"),c("#video-carousel"),e("#reviews-carousel .item").eq(0).addClass("active"),e(".carousel").on("mouseenter",function(){e(this).addClass("hover")}),e(".carousel").on("mouseleave",function(){e(this).removeClass("hover")}));var b=!1;e(".letter-form button").on("click",function(a){a.preventDefault(),e(window).width()>=768&&p()}),e(".top").on("click",function(){b=!1,m()}),e(window).scroll(function(){if(e(".main-page").length){var a=e(window).scrollTop(),i=e(".feedback-form").offset().top;e("#about-us").offset().top;e(window).width()>=768&&a>i-200&&setTimeout(m,500),a<40?e(".home-arrow").fadeOut(500):e(".home-arrow").fadeIn(500)}if(e(".article-page").length){var a=e(window).scrollTop(),o=e(".article-content").offset().top;a<40?e(".home-arrow").fadeOut(500):e(".home-arrow").fadeIn(500),a>o&&e(window).width()>1200&&e(".back-to-news").fadeIn(500)}e(".news-page").length&&(a<40?e(".home-arrow").fadeOut(500):e(".home-arrow").fadeIn(500))}),e("#article-gallery").jGallery({mode:"standard",slideshowAutostart:!1,canChangeMode:!0,canZoom:!1,canClose:!1,swipeEvents:!0,thumbnailsHideOnMobile:!1,slideshowCanRandom:!1,thumbnailsFullScreen:!1,slideshow:!1,canMinimalizeThumbnails:!1,maxMobileWidth:300,tooltipRandom:"Рандом",tooltipSlideshow:"Слайдшоу",tooltipClose:"Закрыть",tooltipSeeAllPhotos:"Все фото",tooltipToggleThumbnails:"Скрыть миниатюры",backgroundColor:"#21284d",textColor:"white",items:[{url:"images/galery/svadba_leny_i_maksima_1/photo1.jpg",thumbUrl:"images/galery/svadba_leny_i_maksima_1/photo1.jpg"},{url:"images/galery/svadba_leny_i_maksima_1/photo2.jpg",thumbUrl:"images/galery/svadba_leny_i_maksima_1/photo2.jpg"}]});var y=plyr.setup(".portfolio-player",{controls:["play","progress","current-time","mute","volume","captions","fullscreen"],volume:2,autoplay:!1});plyr.setup(".article-player",{controls:["play","progress","current-time","mute","volume","captions","fullscreen"],volume:2,autoplay:!1});e("#video-carousel").on("click","a",function(a){a.preventDefault(),e("#video-carousel").addClass("galeryIsOpen"),e("body").css("overflow","hidden"),e("#video-gallery").css("display","flex");var i=e(this).attr("href");y[0].source({type:"video",sources:[{src:i,type:"youtube"}]})}),e(".close-video").on("click","span",function(a){a.preventDefault(),e("#video-carousel").removeClass("galeryIsOpen"),e("#video-gallery").fadeOut("500"),y[0].stop(),e("body").css("overflow","visible")}),e("#portfolio-carousel").on("click","a",function(a){a.preventDefault(),d(a),e("#portfolio-carousel").addClass("galeryIsOpen")}),e("#gallery").on("click",".fa-times",function(a){a.preventDefault(),e("#portfolio-carousel").removeClass("galeryIsOpen")})});