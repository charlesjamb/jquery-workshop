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

	$('.overlay').click(function() {
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

	////////////////////////////////////////////////////////////////////////////////////////////////
	// Exercise 5 & 6 - Get JSON data and display it
	issMap();

	const intervalID = window.setInterval(issMap, 5000);

	function issMap() {
		$.getJSON(`https://api.wheretheiss.at/v1/satellites/25544`)
		.then(function(res) {
			let issLat = res.latitude;
			let issLng = res.longitude;
			console.log(issLat, issLng)

			$('.issText').remove();
			$('article h2').after(`<p class='issText'>The ISS is located at the latitude 
				<span class='issLocation'>${issLat}</span> and the longitude 
				<span class='issLocation'>${issLng}</span>.</p>`);

			$('#issPosition').attr('src', 
			`https://maps.googleapis.com/maps/api/staticmap?
			&center=${issLat},${issLng}
			&markers=color:red%7Clabel=I%7C${issLat},${issLng}
			&zoom=5
			&size=500x400
			&key=AIzaSyCFaZWzWB0ZSBl8NEf9mmbjX6haD6ysSvw`);
		})
	}	

}());