$(function() {

	$(window).scroll(function() {
		/************************
		 * Paralax image effect *
		 ************************/
		var FACTOR = 0.5;
		var $heroImage = $('.hero-image');

		/* Calculate percentComplete, which goes from 0 to 1 */
		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var totalDistanceToScroll = $heroImage.height();
		var percentComplete = Math.min(distanceScrolled / totalDistanceToScroll, 1);

		/* Use percentComplete to determine how much we translate */
		var translateY = (percentComplete * 100 * FACTOR);

		/* Apply the transform */
		$heroImage.css({'transform': 'translateY(' + translateY + '%)'});

		/**********************
		 * Pinning the navbar *
		 **********************/

		var $navbar = $('nav');
		var $navbarWrapper = $('.navbar-wrapper')

		/* navbarWrapper never moves, so it's a good pinPoint */
		var pinPoint = $navbarWrapper.offset().top;

		/* 
		 * add or remove the 'pinned' class depending on what side of the pin
		 * point we are.
		 */
		if (distanceScrolled >= pinPoint) {
			$navbar.addClass('pinned');
		} else {
			$navbar.removeClass('pinned');
		}



		var $aside = $('aside');
		var $asideWrapper = $('.aside-wrapper');
		var sidePoint = $asideWrapper.offset().top;

		if(distanceScrolled >= sidePoint){
			$aside.addClass('pinned');
		}else{
			$aside.removeClass('pinned');
		}


		var $banner = $('.banner');
		var $slogan = $('.slogan');
		var $bannerPoint = $banner.offset().top;
		if(distanceScrolled >=bannerPoint){
			$slogan.addClass('pinned');
		}else{
			$slogan.removeClass('pinned');
		}
	});

	/*************
	 * Scroll to *
	 *************/

	$('a[href*="#"]').click(function(e) {
		e.preventDefault();
		var $target = $($(this).attr('href'));
		var scrollTop = $target.offset().top;
		$('html, body').animate({'scrollTop': scrollTop}, 2000);
	});

});