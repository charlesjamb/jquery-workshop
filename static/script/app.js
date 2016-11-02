/* Write your code here! */

(function(){
	
	let $btnClose = $("<button id='btnClose' class='styleBtn'>X</button>");
	let $btnShow = $("<button id='btnShow' class='styleBtn'>Show announcement</button>");
	
	$(".announcement").append($btnClose);
	$(".announcement").append($btnShow);

	$(".styleBtn").click(function() {
		$(".announcement p, #btnShow, #btnClose").toggle();
	})

}());