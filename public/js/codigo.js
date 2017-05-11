function iniciarTamaño() {
	document.documentElement.style.height = document.body.offsetHeight;
	document.body.style.height = document.body.offsetHeight;
}

function cambiarTamaño(argument) {
	document.documentElement.style.height = window.innerHeight;
	document.body.style.height = window.innerHeight;
}

$(document).ready(function() {
	iniciarTamaño();
	$(window).resize(function() {
		cambiarTamaño();
	});

	$('#menu-toggle').click(function () {
		$('#menu-items').slideToggle('slow');
	});

	$('#menu-items').click(function () {
		if(window.innerWidth <= 576) {
			$(this).slideUp();
		}
	})

});