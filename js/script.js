$(document).ready(function() {
	var cnv = document.getElementById('main');
	var ctx = cnv.getContext('2d');
	ctx.fillRect(0,0,60,60);
	var posx = 0;
	var posy = 0;
	loaded();
	$(document).on('keydown', function(event) {
			if (event.which == 40 ) {
				event.preventDefault();
				ctx.clearRect(0, 0, 500, 500);
				ctx.fillRect(posx, posy+60, 60, 60);
				posy = posy+60;
			}
			if (event.which == 39) {
				event.preventDefault();
				ctx.clearRect(0, 0, 500, 500);
				ctx.fillRect(posx+60, posy, 60, 60);
				posx = posx+60;
			}
			if (event.which ==  37) {
				event.preventDefault();
				ctx.clearRect(0, 0, 500, 500);
				ctx.fillRect(posx-60, posy, 60, 60);
				posx = posx-60;
			}
			if (event.which == 38) {
				event.preventDefault();
				ctx.clearRect(0, 0, 500, 500);
				ctx.fillRect(posx, posy-60, 60, 60);
				posy = posy-60;
			}
	});

});


function loaded() {
	$('div#load').show();
	$('div#load').delay(1000).fadeOut();
}


