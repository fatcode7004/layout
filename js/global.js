$(document).ready(function() {

			
				//Основные переменные

	var callBackBtn = $('.call-btn');
	var orderBtn = $('.order-btn');
	var popupContainer =$('.popup-container');
	var popupItem = $('.popup-content');
	var popupCallBack = $('.call-container');
	var popupOrder = $('.order-container');
	var closeBtn = $('.close-btn');
	var nextSlideBtn = $('.btn-arrow__right');
	var prevSlideBtn =$('.btn-arrow__left');
	var paginationContainer = $('.dots');
	var swiperContainer =$('.swiper-container');
	var menuBtn =$('.menu-1024__button');
	var headerNav =$('.header-navigation');

				//Функции форм заказа

	function popupCallBackShow(event) {
		event.preventDefault();
		popupContainer.addClass('flex');
		popupCallBack.addClass('active');
		popupCallBack.animate({opacity: '1'}, 700);
	};

	function popupOrderShow(event) {
		event.preventDefault();
		popupContainer.addClass('flex');
		popupOrder.addClass('active');
		popupOrder.animate({opacity: '1'}, 700);
	};

	function popupClose() {
		popupContainer.removeClass('flex');
		popupFormHide();
	};

	function popupFormHide() {
		popupCallBack.animate({opacity: '0'}, 0);
		popupOrder.animate({opacity: '0'}, 0);
		popupCallBack.removeClass('active');
		popupOrder.removeClass('active');
	};

	function touchNavShow(event) {
		event.preventDefault();
		headerNav.toggleClass('active');
	};

				//Плагин слайдера

	var mySwiper = new Swiper (swiperContainer, {
		loop: true, 		//задает цикличность слайдера
		spaceBetween: 20, 		//расстояние между слайдами
		slidesPerView: 1, 		//кол-во слайдов на странице
		pagination: {		 //пагинация
			el: paginationContainer,
		},

		breakpoints: {		 //брейкпоинты
			1201: {				
				slidesPerView: 3,
				pagination: 0,
			},

			769: {
				pagination: {
			      el: paginationContainer,
			    },

				slidesPerView: 2,
			},
		},		
		    
	    navigation: {		 // Navigation arrows
	      nextEl: nextSlideBtn,
	      prevEl: prevSlideBtn,
	    },
    });
				
				//Методы вызова функций

	callBackBtn.click(popupCallBackShow);

	orderBtn.click(popupOrderShow);

	closeBtn.click(popupClose);

	popupContainer.click(function(event) {
		if (event.target == this) {			
			popupClose();
		}
	});

	menuBtn.click(touchNavShow);
})

