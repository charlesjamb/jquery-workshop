/* Write your code here! */

(function(){

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 1 - buttons displaying or hiding content
	const $btnClose = $("<button id='btnClose' class='styleBtn'>X</button>");
	const $btnShow = $("<button id='btnShow' class='styleBtn'>Show announcement</button>");
	
	$(".announcement").append($btnClose, $btnShow);

	$(".styleBtn").click(function(e) {
		$(this).parent().children().toggle();
	})

	/////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 2 - create overlay when img is clicked
	$('#imgGallery li img').on('click', function() {
		let srcImgClicked = $(this).attr('src');
		let altImgClicked = $(this).attr('alt');
		$('.overlay').toggleClass('overlayHide');
		$('.overlay img').attr('src', srcImgClicked);
		$('.overlay p').text(altImgClicked);
	})

	$('.overlay').click(function() {('#imgGallery li img')
		$('.overlay').toggleClass('overlayHide');
	})

	/////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 3 - sticky and not sticky based on width
	if (matchMedia) {
		var mq = window.matchMedia("(min-width: 641px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		if (mq.matches) {
			$('#signupForm').sticky({topSpacing:0});
		} 
		else {
			$('#signupForm').unstick();
		}
	}

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 4 - form checking
	$('#signupForm').on('submit', function(e) {
		let password = $("input[name='password']").val();
		let confirmPassword = $("input[name='password2']").val();

		if (password.length < 10) {
			e.preventDefault()
			alert('!Password must be at least 10 characters!')
		}
		else if (password !== confirmPassword) {
			e.preventDefault()
			alert('!The two passwords are different!')
		}
	});

	//////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 5 - get and display JSON data
	$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal')
	.then(function(res) {
		let issLocation = res.results[0].geometry.location;

		$('article h2').after(`<p class='issText'>The ISS is located at the latitude 
			<span class='issLocation'>${issLocation.lat}</span> and the longitude 
			<span class='issLocation'>${issLocation.lng}</span>.</p>`);
	})

}());