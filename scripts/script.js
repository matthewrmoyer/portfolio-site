$(document).ready(function() {

	$('.about').addClass('display-none')
	$('.about-container').addClass('display-none')
	// $('.project-container').addClass('display-none')
	$('.languages-and-tools-container').addClass('display-none')
	$('.contact-container').addClass('display-none')
	// $("#player").addClass('display-none');



	$("body").on("click", ".list-item-text", function(e) {
		//without this the click on the netflix-play-button would also click the module-movie
		e.stopPropagation();
		$('.navbar-list-item').removeClass('accent-blue-border')
		$(this).parent('.navbar-list-item').addClass('accent-blue-border');
		console.log(this)
		var navItemText = this.innerText;
		console.log(navItemText)

		if (navItemText == "Projects") {
			console.log('text is projects')
			$('.project-container').removeClass('display-none')
			$('.about').addClass('display-none')
			$('.about-container').addClass('display-none')

			$('.languages-and-tools-container').addClass('display-none')
			$('.contact-container').addClass('display-none')
		} else if (this.innerText == "About") {
			$('.about').removeClass('display-none')
			$('.about-container').removeClass('display-none')

			$('.languages-and-tools-container').removeClass('display-none')
			$('.project-container').addClass('display-none')
			$('.contact-container').addClass('display-none')
		} else if (this.innerText == "Contact"){
			$('.contact-container').removeClass('display-none')
			$('.languages-and-tools-container').addClass('display-none')
			$('.project-container').addClass('display-none')
			$('.about').addClass('display-none')
			$('.about-container').addClass('display-none')

		}
	});

});