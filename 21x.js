$=jQuery.noConflict(),function($){$(document).ready((function(){const _document=$(document);function TransitionToAnchor(){if(/^#[A-z0-9\-\_]+$/.test(location.hash)){let t=$(location.hash);t.length>0&&(t=t.offset(),t.top>0&&$("body, html").scrollTop(t.top-100))}}function pageReady(){initSliders(),initTeleport(),initFancyBox(),initMasonry()}TransitionToAnchor(),$(window).on("locationchange",TransitionToAnchor),pageReady();let vh=.01*window.innerHeight;function isOpenLanguage(){let block=$("[js-open-language]").parent();$("body").width()<=480?block.addClass("is-open"):block.removeClass("is-open")}function initFancyBox(){$("[data-fancybox]").fancybox({closeExisting:!0,touch:!1}),$("[data-fancybox-no-transition]").fancybox({closeExisting:!0,touch:!1,transitionEffect:!1,animationEffect:!1})}function initTeleport(){$("[js-teleport]").each((function(i,val){var self=$(val),objHtml=$(val).html(),target=$("[data-teleport-target="+$(val).data("teleport-to")+"]"),conditionMedia=$(val).data("teleport-condition").substring(1),conditionPosition=$(val).data("teleport-condition").substring(0,1);if(target&&objHtml&&conditionPosition){function teleport(){var condition;"<"===conditionPosition?condition=$(window).width()<conditionMedia:">"===conditionPosition&&(condition=$(window).width()>conditionMedia),condition?""==target.html()&&(target.html(objHtml),self.html("")):""==self.html()&&(self.html(objHtml),target.html(""))}teleport(),$(window).on("resize",debounce(teleport,100))}}))}function initSliders(){var initTextAnimatedHeroSwiper=function(){$(".hero__slider .swiper-slide .animated").each((function(){$(this).attr("data-text",$(this).text())}))};initTextAnimatedHeroSwiper();var heroSwiper=new Swiper("[js-hero-slider]",{direction:"vertical",autoplay:{delay:2200},allowTouchMove:!1,speed:800,loop:!0,on:{slideChangeTransitionEnd:function(){$(".hero__slider .swiper-slide").removeClass("is-current");var activeIndex=this.activeIndex,realIndex=this.slides.eq(activeIndex).attr("data-swiper-slide-index");$('.hero__slider .swiper-slide[data-swiper-slide-index="'+realIndex+'"]').addClass("is-current")}}});let heroSwiperObserver=new MutationObserver((function(){initTextAnimatedHeroSwiper()}));$(".hero__slider .swiper-slide .animated").each((function(){heroSwiperObserver.observe($(this).get(0),{childList:!0,subtree:!0})}));var pricesTabSwiper=new Swiper(".prices ._nav-slider .swiper-container",{slidesPerView:"auto",preventClicksPropagation:!1,preventInteractionOnTransition:!0,scrollbar:{el:"._nav-slider .swiper-scrollbar",draggable:!0,clickable:!0}});$(".prices ._more-tabs").click((function(){$(this).parents("._spoiler-tabs").toggleClass("_open")}));var reviewsSwiper=new Swiper("[js-reviews-slider]",{breakpoints:{1400:{slidesPerView:4},992:{slidesPerView:3},740:{slidesPerView:2}},watchSlidesProgress:!0,slideVisibleClass:"swiper-slide-visible",slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},loop:!0,spaceBetween:0,navigation:{nextEl:".reviews__slider-arrow--next",prevEl:".reviews__slider-arrow--prev"}}),advantagesSwiper=new Swiper("[js-advantages-slider]",{breakpoints:{768:{loop:!0}},watchSlidesVisibility:!0,watchSlidesProgress:!0,slideVisibleClass:"swiper-slide-visible",slidesPerView:1,pagination:{el:".swiper-pagination",clickable:!0},autoHeight:!0,loop:!1,spaceBetween:0,navigation:{nextEl:".advantages__arrow--next",prevEl:".advantages__arrow--prev"},on:{init:function(){var slideHeight2=$("[js-advantages-slider]").find(".swiper-slide-visible .advantages__slide").height();$("[js-advantages-slider]").find(".swiper-wrapper").height(slideHeight2)}}});let advantagesSwiperHeight=function(){setTimeout((function(){$("[js-advantages-slider]").find(".swiper-wrapper").height($("[js-advantages-slider]").find(".swiper-slide-active").height())}),25)};advantagesSwiper.on("transitionEnd",(function(){advantagesSwiperHeight()}));let advantagesSwiperObserver=new MutationObserver((function(){advantagesSwiperHeight()}));if($("[js-advantages-slider] .advantages__slide .advantages__info").each((function(){advantagesSwiperObserver.observe($(this).get(0),{childList:!0,subtree:!0})})),$("[js-mobile-slider]").length>0){var initSwiperMobile=function initSwiperMobile(){var screenWidth=$(window).width();screenWidth<=740&&null==swiperMobile?swiperMobile=new Swiper("[js-mobile-slider]",{watchSlidesVisibility:!0,spaceBetween:0,loop:!1,slidesPerView:1.4,centeredSlides:!1,autoplay:!1,pagination:{el:".swiper-pagination",clickable:!0}}):screenWidth>740&&null!=swiperMobile&&($("[js-mobile-slider]").each((function(){this.swiper.destroy({deleteInstance:!1,cleanStyles:!0})})),swiperMobile=void 0)},swiperMobile=void 0;initSwiperMobile(),$(window).on("resize",(function(){initSwiperMobile()}))}var feedbackSwiper=new Swiper("[js-feedback-slider]",{navigation:{nextEl:".feedback__slider-arrow--next",prevEl:".feedback__slider-arrow--prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},slidesPerView:1})}function initMasonry(){$(".grid").masonry({itemSelector:".grid-item",percentPosition:!0,horizontalOrder:!0})}document.documentElement.style.setProperty("--vh",`${vh}px`),$(window).on("scroll",throttle((function(){var scroll=$(window).scrollTop(),headerHeight=$(".header").height(),heroHeight=$(".hero").height();scroll>headerHeight?$(".header").addClass("is-fixed-start"):$(".header").removeClass("is-fixed-start"),scroll>=heroHeight-headerHeight/1||null==heroHeight&&scroll>headerHeight?$(".header").addClass("is-fixed"):$(".header").removeClass("is-fixed")}),25)),_document.on("click",'[href="#"]',(function(e){e.preventDefault()})).on("click","[js-menu-link]",(function(){$(".header").removeClass("is-active"),$("[js-hamburger]").removeClass("is-open"),$(".header__mobile-menu").removeClass("is-open"),$(".header__mobile-overlay").removeClass("is-open"),$("body").removeClass("is-fixed")})).on("click","[js-hamburger]",(function(){$(".header").toggleClass("is-active"),$("[js-hamburger]").toggleClass("is-open"),$(".header__mobile-menu").toggleClass("is-open"),$(".header__mobile-overlay").toggleClass("is-open"),$("body").toggleClass("is-fixed"),$(".header__services").hasClass("is-open")&&$(".header__services").removeClass("is-open"),$("[js-open-services]").hasClass("is-open")&&$("[js-open-services]").removeClass("is-open"),$("header").hasClass("is-bg")&&$("header").removeClass("is-bg"),setTimeout(()=>{$(".header__services-mobile").hasClass("visible")&&$(".header__services-mobile").removeClass("visible"),$(".header__mobile-menu .header__menu").hasClass("hidden")&&$(".header__mobile-menu .header__menu").removeClass("hidden"),$(".header__mobile-menu .header__mobile-buttons").hasClass("hidden")&&$(".header__mobile-menu .header__mobile-buttons").removeClass("hidden"),$(".header__mobile-menu .header__mobile-languages").hasClass("hidden")&&$(".header__mobile-menu .header__mobile-languages").removeClass("hidden")},200)})).on("click",".header__mobile-overlay",(function(){$(".header").removeClass("is-active"),$("[js-hamburger]").removeClass("is-open"),$(".header__mobile-menu").removeClass("is-open"),$(".header__mobile-overlay").removeClass("is-open"),$("body").removeClass("is-fixed"),$(".header__services").hasClass("is-open")&&$(".header__services").removeClass("is-open"),$("[js-open-services]").hasClass("is-open")&&$("[js-open-services]").removeClass("is-open"),$("header").hasClass("is-bg")&&$("header").removeClass("is-bg"),setTimeout(()=>{$(".header__services-mobile").hasClass("visible")&&$(".header__services-mobile").removeClass("visible"),$(".header__mobile-menu .header__menu").hasClass("hidden")&&$(".header__mobile-menu .header__menu").removeClass("hidden"),$(".header__mobile-menu .header__mobile-buttons").hasClass("hidden")&&$(".header__mobile-menu .header__mobile-buttons").removeClass("hidden"),$(".header__mobile-menu .header__mobile-languages").hasClass("hidden")&&$(".header__mobile-menu .header__mobile-languages").removeClass("hidden")},200)})).on("click","[js-close-popup]",(function(){$(".fancybox-button.fancybox-close-small").trigger("click")})).on("click","[js-social-tab]",(function(e){if($(this).hasClass("is-active"))e.preventDefault();else{e.preventDefault();var $self=$(this),tabIndex=$self.index();$self.siblings().removeClass("is-active"),$self.addClass("is-active"),$(".tabs .tab").css("display","none").eq(tabIndex).fadeIn(),$(".tabs2 .tab").css("display","none").eq(tabIndex).fadeIn()}})).on("click","[js-popup-back]",(function(e){e.preventDefault(),$(this).closest(".popup").find(".fancybox-close-small").trigger("click")})).on("click","[js-open-language]",(function(e){e.preventDefault(),$(this).parent().toggleClass("is-open")})).on("click","[js-quantity]",(function(e){var button_classes,value=+$(this).closest(".quantity").find(".counter").val();-1!==(button_classes=$(e.currentTarget).prop("class")).indexOf("up_count")?value+=1:value-=1,value=value<0?0:value,$(this).closest(".quantity").find(".counter").val(value).trigger("UpdateCount")})).on("click","[js-open-services]",(function(){$(this).toggleClass("is-open"),$(".header__services").toggleClass("is-open"),$("header").toggleClass("is-bg")})).on("click","[js-open-services-mobile]",(function(e){e.preventDefault(),$(this).closest(".header__menu").addClass("hidden"),$(this).closest(".header__mobile-menu").find(".header__mobile-buttons").addClass("hidden"),$(this).closest(".header__mobile-menu").find(".header__mobile-languages").addClass("hidden"),$(this).closest(".header__mobile-menu").find("[js-general-services]").addClass("visible")})).on("click","[js-close-services-mobile]",(function(e){e.preventDefault(),$(this).closest(".header__mobile-menu").find(".header__menu").removeClass("hidden"),$(this).closest(".header__mobile-menu").find(".header__mobile-buttons").removeClass("hidden"),$(this).closest(".header__mobile-menu").find(".header__mobile-languages").removeClass("hidden"),$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible")})).on("click","[js-close-inside-service]",(function(){$(this).closest(".header__mobile-menu").find(".header__services-mobile").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-general-services]").addClass("visible")})).on("click","[js-open-instagram]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-instagram-services]").addClass("visible")})).on("click","[js-open-youtube]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-youtube-services]").addClass("visible")})).on("click","[js-open-facebook]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-facebook-services]").addClass("visible")})).on("click","[js-open-tiktok]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-tiktok-services]").addClass("visible")})).on("click","[js-open-spotify]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-spotify-services]").addClass("visible")})).on("click","[js-open-twitch]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-twitch-services]").addClass("visible")})).on("click","[js-open-telegram]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-telegram-services]").addClass("visible")})).on("click","[js-open-twitter]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-twitter-services]").addClass("visible")})).on("click","[js-open-soundcloud]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-soundcloud-services]").addClass("visible")})).on("click","[js-open-kick]",(function(){$(this).closest(".header__mobile-menu").find("[js-general-services]").removeClass("visible"),$(this).closest(".header__mobile-menu").find("[js-kick-services]").addClass("visible")})).on("click","[js-open-answer]",(function(){$(this).closest(".faq__item").toggleClass("is-open"),$(this).closest(".faq__item").find(".faq__answer").slideToggle()})),$(window).width()>760?$(document).on("click","[js-open-advantage]",(function(e){e.preventDefault(),$(this).toggleClass("is-open")})):$(document).on("click","[js-open-advantage]",(function(e){e.preventDefault(),$(this).toggleClass("is-open"),$(this).find(".info").slideToggle()})),$(window).on("resize",isOpenLanguage),isOpenLanguage(),$("a[data-alt-href]").each((function(){try{let link=new URL($(this).attr("href"),window.location);(link.origin=window.location.origin&&link.pathname==window.location.pathname&&link.hash)&&(0==$(link.hash).length?$(this).attr("href",$(this).attr("data-alt-href")):$(this).on("click",(function(){setTimeout((function(){$(this).trigger("locationchange")}),5)})))}catch(error){}})),$(".prices__item input.counter").on("UpdateCount input",(function(){let item=$(this).closest(".prices__item"),quantity=$(this).val(),new_price=quantity*item.attr("data-price");new_price=new_price.toFixed(2),new_price.length>=12&&(new_price=new_price.substring(0,9)+"...");let button_quick=item.find("a[data-quick-order]");item.find(".total_cost").text(new_price);let set_function="";if(button_quick.attr("data-quick-function"))set_function=button_quick.attr("data-quick-function");else{let data_quick,split=button_quick.attr("data-quick-order").split(";"),params={};$.each(split,(function(k,v){v=v.split(":");let param="";for(i=0;i<v.length;i++){let p=v[i];0!==p.length&&(0==i?(param=p.trim(),params[param]=""):params[param]=params[param]+p)}param.length>0&&(params[param]=params[param].trim())})),set_function="function(q){",set_function+="let params = "+JSON.stringify(params)+";",set_function+='if(typeof params["start-count"] !== "undefined"){',set_function+='params["start-count"] = q;',set_function+="}else{",set_function+='params["quantity"] = q;',set_function+="}",set_function+='let string = "";',set_function+="for (key in params) {",set_function+='string = string+key+":"+params[key]+";"; ',set_function+="}",set_function+="return string;",set_function+="}",button_quick.attr("data-quick-function",set_function)}let f=new Function("q","return "+set_function)();button_quick.attr("data-quick-order",f(quantity))})),$(".prices__item input.counter").trigger("UpdateCount"),$("body").on("click",".toggle-spoiler>a",(function(e){var active;e.preventDefault(),$(this).closest(".toggle-spoiler").hasClass("active")?$(this).closest(".toggle-spoiler").removeClass("active").children("div").hide(600):$(this).closest(".toggle-spoiler").addClass("active").children("div").show(500)}))}))}($);
