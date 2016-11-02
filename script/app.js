/* Write your code here! */

(function(){

	const $btnClose = $("<button id='btnClose' class='styleBtn'>X</button>");
	const $btnShow = $("<button id='btnShow' class='styleBtn'>Show announcement</button>");
	
	$(".announcement").append($btnClose, $btnShow);

	$(".styleBtn").click(function(e) {
		$(this).parent().children().toggle();
	})

	$('ul').children('li').children('img').on('click', function() {
		let srcImgClicked = $(this).attr('src');
		let altImgClicked = $(this).attr('alt');
		console.log(altImgClicked);
		$('.overlay').toggleClass('overlayHide');
		$('.overlay').children('img').attr('src', srcImgClicked);
		$('.overlay').children('p').text(altImgClicked);

	})

	$('.overlay').click(function() {
		$('.overlay').toggleClass('overlayHide');
	})



}());