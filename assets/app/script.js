$(document).ready( () => {
})

let _i = 0;

function bgSwitch (_i) {
	// $('#bg2').attr('class', 'animate_animated fadeIn');
	// let bgN = 'url(\'assets/css/img/bg' + _i + '.jpg\')';

	// $('#bg').css('background', bgN);
	// $('#bg').attr('class', 'animate_animated fadeOut');
	// $('#bg').animate({ "background": bgN }, 500);
	if ($('#bg2').css('opacity') == 0) {
		$('#bg2').animate({ opacity: 1 }, 3500);
		$('#bg').animate({ opacity: 0 }, 3500);
	} else {
		$('#bg').animate({ opacity: 1 }, 3500);
		$('#bg2').animate({ opacity: 0 }, 3500);
	}
}

setInterval( () => {
	bgSwitch(_i);
	if (_i == 1)
		_i = 0;
	else
		_i++;
}, 5 * 1000 * 2)
