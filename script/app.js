/* Write your code here! */

(function(){

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 1
	const $btnClose = $("<button id='btnClose' class='styleBtn'>X</button>");
	const $btnShow = $("<button id='btnShow' class='styleBtn'>Show announcement</button>");
	
	$(".announcement").append($btnClose, $btnShow);

	$(".styleBtn").click(function(e) {
		$(this).parent().children().toggle();
	})

	/////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 2
	$('ul').children('li').children('img').on('click', function() {
		let srcImgClicked = $(this).attr('src');
		let altImgClicked = $(this).attr('alt');
		$('.overlay').toggleClass('overlayHide');
		$('.overlay').children('img').attr('src', srcImgClicked);
		$('.overlay').children('p').text(altImgClicked);
	})

	$('.overlay').click(function() {('ul').children('li').children('img')
		$('.overlay').toggleClass('overlayHide');
	})

	/////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 3
	if (matchMedia) {
		var mq = window.matchMedia("(min-width: 641px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		console.log('function running');
		if (mq.matches) {
			$('.ex3 aside form').sticky({topSpacing:0});
		} 
		else {
			$('.ex3 aside form').unstick();
		}
	}

}());