window.onload=function(){function e(){$("body").css("overflow","visible"),$(".loading-screen").animate({opacity:0},500,function(){$(".loading-screen").css("display","none"),$(".content-wrapper").animate({opacity:"1"},500)})}setTimeout(e,10)},$(document).ready(function(e){function i(){e(".home-arrow").fadeOut("0"),e(".menu").css("opacity","0"),e(".menu-mobile .banner").css("display","none"),e(".menu").animate({opacity:1},400).css("display","block"),e(".menu-icon").css("display","none"),e(".menu-close").css("display","block"),e(".menu").css({position:"fixed",top:"0",bot:"0",left:"0",right:"0"})}function n(){e(".home-arrow").fadeIn("0"),e(".menu-icon").css("display","block"),e(".menu-close").css("display","none"),e(".menu-mobile .banner").css("display","block"),e(".menu").animate({opacity:0},400,function(){e(".menu").css("display","none"),e(".navigation").css("height","80px")})}function t(i){return 0===e(window).scrollTop()&&("menuIsSmall"!==p&&void 0!==p||(s("80px","transparent","#fff","10px",i,"block","none"),p="menuIsBig")),p}function o(i){return 0!==e(window).scrollTop()&&("menuIsBig"!==p&&void 0!==p||(s("60px","#fff","#16275b","4px",i,"none","block"),p="menuIsSmall")),p}function s(i,n,t,o,s,a,u){e(".menu").animate({height:i},s),e(".menu").css("background-color",n),e(".menu a, .menu span").css("color",t),e(".banner").css("margin-bottom",o),e(".banner").css({"margin-bottom":o,"background-color":n}),e(".logo-white").css("display",a),e(".logo-color").css("display",u)}function a(){0===e(window).scrollTop()&&(e(".banner").stop(!0,!0),e(".banner").animate({opacity:"1"},500))}function u(i){var n=e(i).find(".carousel-block").outerWidth();e(i).find(".carousel-items .carousel-block").eq(-1).clone().prependTo(e(i).find(".carousel-items")),e(i).find(".carousel-items").css({left:"-"+n+"px"}),e(i).find(".carousel-items .carousel-block").eq(-1).remove(),e(i).find(".carousel-items").animate({left:"0px"},500)}function r(i){var n=e(i).find(".carousel-block").outerWidth();e(i).find(".carousel-items").animate({left:"-"+n+"px"},500,function(){e(i).find(".carousel-items .carousel-block").eq(0).clone().appendTo(e(i).find(".carousel-items")),e(i).find(".carousel-items .carousel-block").eq(0).remove(),e(i).find(".carousel-items").css({left:"0px"})})}function l(i){setInterval(function(){e(i).is(".hover")||r(i)},3e3)}function c(){return v===!1&&(e(".stamp").fadeOut(0),e(".letter-wrap").animate({"margin-top":"230px"},1e3),e(".top").css("display","none"),e(".cover-wrap").fadeIn(500),e(".letter-form").delay(1200).animate({top:-225},400),v=!0),v}function m(){e(".letter-wrap").animate({"margin-top":"0px"},1e3),e(".letter-form").animate({top:0},400,function(){e(".cover-wrap").fadeOut("500"),e(".top").fadeIn(500),e(".stamp").delay(500).fadeIn(500)})}if(e(".menu").on("click","a",function(i){i.preventDefault();var t,o=e(this).attr("href");t=e(window).width()>1200?e(o).offset().top-60:e(o).offset().top,e(window).width()<1200&&n(),e("body,html").animate({scrollTop:t},1500)}),e(".arrow-down").on("click",function(i){i.preventDefault();var n;n=e(window).width()>1200?e("#about-us").offset().top-60:e("#about-us").offset().top,e("body,html").animate({scrollTop:n},1500)}),e(".home-arrow").on("click",function(i){e("body,html").animate({scrollTop:0},500)}),e(".menu-icon").on("click",function(){i()}),e(".menu-close").on("click",function(){n()}),e(window).width()>1200){var p;0!==e(window).scrollTop()?o(0):t(0),e(window).scroll(function(){o(800),t(800)})}else e(window).scroll(function(){e(".banner").animate({opacity:"0"},500),a()}),0!==e(window).scrollTop()&&e(".banner").css("opacity","0");var d={review1:{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Анна Семёнова",portrait:"images/rewiew/portrait-1.jpg"},review2:{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Саша Алексеева",portrait:"images/rewiew/portrait-2.jpg"},review3:{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Меган Фокс",portrait:"images/rewiew/portrait-3.jpg"},review4:{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Кот Аркадий",portrait:"images/rewiew/portrait-4.jpg"},review5:{content:"Pellentesque vestibulum turpis sit amet felis porttitor, nec maximus risus egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum condimentum purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna. Curabitur sollicitudin.",title:"Дуся",portrait:"images/rewiew/portrait-5.jpg"}},f={news1:{title:"Sed elementum condimenum.",poster:"images/news/news-1.jpg",content:"Interdum et malesuada fames ac ante ipsum primis in faucibus.  purus, eu vehicula magna aliquam eu. Donec sollicitudin dignissim urna.",link:"images"},news2:{title:"LOREM IPSUM",poster:"images/news/news-2.jpg",content:"LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM",link:"images"},news3:{title:"LOREM IPSUM",poster:"images/news/news-3.jpg",content:"LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM",link:"images"},news4:{title:"LOREM IPSUM",poster:"images/news/news-2.jpg",content:"LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM",link:"images"}};!function(i,n,t){for(var o in i)e(n).find(".carousel-items").append('<div class="carousel-block"></div>'),e(n).find(".carousel-block").eq(w).attr("id",[o]),w++,console.log(w),e(n+" #"+o).loadTemplate(t,i[o]);e(n).on("click",".right",function(){return r(e(this).parents(".carousel")),!1}),e(n).on("click",".left",function(){return u(e(this).parents(".carousel")),!1})}(f,"#news-carousel","../templates/news-preview-tmpl.html");var w=0;e(".carousel").on("mouseenter",function(){e(this).addClass("hover")}),e(".carousel").on("mouseleave",function(){e(this).removeClass("hover")}),l("#portfolio-carousel");var b=0;for(var g in d){e("#rewiews-carousel .carousel-inner").append('<div class="item"></div>'),e("#rewiews-carousel .item").eq(b).attr("id",[g]),b++;e("#rewiews-carousel #"+g).loadTemplate("../templates/review-tmpl.html",d[g])}e("#rewiews-carousel .item").eq(0).addClass("active"),l("#news-carousel");var v=!1;e(".letter-form button").on("click",function(i){i.preventDefault(),e(window).width()>=768&&m()}),e(".top").on("click",function(){v=!1,c()}),e(window).scroll(function(){var i=e(window).scrollTop(),n=e(".feedback-form").offset().top;distanceToAboutUs=e("#about-us").offset().top,e(window).width()>=768&&i>n-200&&setTimeout(c,500),i<40?e(".home-arrow").fadeOut(500):e(".home-arrow").fadeIn(500)})});