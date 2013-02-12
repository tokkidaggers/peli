$(document).ready(function() {
	var cnv = document.getElementById('main');
	var ctx = cnv.getContext('2d');
	ctx.fillRect(20,20,60,60);
	var posx = 20;
	var posy = 20;
	loaded();
	$(document).on('keypress', function(event) {
			console.log('ebin');
		if (event.which == 40 ) {
			event.preventDefault();
			ctx.clearRect(0,0,500,500);
		}
	});
});

function loaded() {
	$('div#load').show();
	$('div#load').delay(1000).fadeOut();
}


