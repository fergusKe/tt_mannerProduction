$(document).ready(function() {
	$('.wrapper .section2 .s2_bot').click(function() {
      $('.wrapper .section2 .s2_bot').toggleClass('s2_open');
	});

	// $('.movie_nav li').click(function() {
	// 	$('.movie_nav li.movie_target').removeClass();
	// 	$(this).addClass('movie_target');
	// });
	$('.movie_nav li').on('click touchstart', function() {
		$('.movie_nav li.movie_target').removeClass();
		$(this).addClass('movie_target');
	});

	// youtube影片切換
	var now = 0,
		pos = 0,
		pageWidth = 0,
		win = $(window),
		page = $('.youtube-content .youtube-list'),
		// mask = $('.mask'),
		wrap = $('#wrap'),
		pageWrap = $('.youtube-content'),
		menu = $('.movie_nav'),
		menuLi = $('.movie_nav li');
		// mainInfo = $('.main-info');
		// mainInfoHeight;


	//==滿版========================================

	function full() {
		pageWidth = $('.movie_main').width();

		wrap.css({width: pageWidth});

		// if(pageWidth >= 768) {
		// 	pageWidth = 768;
		// }

		// mask.css({width: pageWidth});

		// pageWrap.css({width: pageWidth*4});

		page.css({width: pageWidth});

		// mainInfoHeight = page.eq(now).height();
		// console.log(mainInfoHeight);
		// mainInfo.css({height: mainInfoHeight + 70});

		for(var i = 0; i < menuLi.length; i++) {
			page.eq(i).css({left: i * pageWidth});
			// console.log(i);
		}

	}

	full();

	//==點擊overview-menu========================================

	menuLi.on('touchstart click', gogo);

	function gogo() {
		now = $(this).index();
		move();

		// mainInfoHeight = page.eq(now).height();
		// console.log(mainInfoHeight);
		// mainInfo.css({height: mainInfoHeight + 70});
	}


	function move() {
		pageWidth = $('.movie_main').width();
		// if(pageWidth >= 768) {
		// 	pageWidth = 768;
		// }
		menuLi.removeClass('selected');
		menuLi.eq(now).addClass('selected');
		page.eq(now).css({'z-index': 9});
		page.eq(now).siblings().css({'z-index': 1});
		// page.eq(now).css({'display': 'block', 'z-index': 9});
		// page.eq(now).siblings().css({'display': 'none', 'z-index': 1});
		pos = now * pageWidth * -1;
		// pageWrap.animate({left: pos}, 300);
		// pageWrap.animate({left: pos}, 300);
		// pageWrap.transition({ x: pos }, 300); 
		pageWrap.css(
			'transform', 'translateX('+ pos +'px)'
		);
		event.preventDefault();
		
	}

	//==旋轉手機畫面===============================================

	win.on('orientationchange resize', rotate);
	function rotate() {
		full();
		pos = now * pageWidth * -1;
		// pageWrap.animate({left: pos}, 300);
		// pageWrap.transition({ x: pos }, 300);
		pageWrap.css(
			'transform', 'translateX('+ pos +'px)'
		); 
	}

	// $('.movie_nav li').eq(1).click();
	now = 0;
	move();

});