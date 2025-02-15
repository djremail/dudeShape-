jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

    jQuery(".fancybox").fancybox();

    let carousel = jQuery('#carousel_partners');
		
	carousel.owlCarousel({
		items: 6,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 3000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: [],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 3,
				dots: false,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			479:{
				items: 3,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			767:{
				items: 3,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			991:{
				items: 5,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 3000
			},
			1099:{
				items: 6,
				dots: false,
				mouseDrag: true,
				autoplay: true
			}
		}
	});

	let carousel2 = jQuery('#carousel_partners_2');
		
	carousel2.owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 3000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<div class="galery_slider_btn"><ion-icon class="js_item" name="arrow-back-outline"></ion-icon></div>','<div class="galery_slider_btn"><ion-icon class="js_item" name="arrow-forward-outline"></ion-icon></div>'],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: false,
				nav: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			479:{
				items: 2,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			767:{
				items: 2,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			991:{
				items: 3,
				dots: false,
				mouseDrag: true,
				autoplay: true,
				smartSpeed: 1000
			},
			1099:{
				items: 3,
				dots: false,
				mouseDrag: true
			}
		}
	});



});

'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});
