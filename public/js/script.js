$(document).ready(function() {

	$('.video-container').addClass('display-none');

	$(".enviropi-video-play-button").on('click', () => {
		console.log('click')
		$(".enviropi-video-container").toggleClass('display-none');

	})

	$(".getmesafe-video-play-button").on('click', () => {
		$(".getmesafe-video-container").toggleClass('display-none');
	})


})