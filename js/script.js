window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	let title = document.querySelector('.tabs-title'),
		points = document.querySelectorAll('.tabs-point'),
		content = document.querySelectorAll('.tabs-content-point');

	function hideContent(a) {
		for ( let i = a; i < content.length; i++) {
			content[i].classList.remove('show');
			content[i].classList.add('hide');
		}
	}	
	hideContent(1);

	function showContent(b) {
		if (content[b].classList.contains('hide')) {
			content[b].classList.add('show');
			content[b].classList.remove('hide');
		}
	}

	title.addEventListener('mouseover', function(event) {
		let target = event.target;
		if (target && target.classList.contains('tabs-point')) {
			for (let i = 0; i < points.length; i++) {
				if (target == points[i]) {
					hideContent(0);
					showContent(i);
				}
			}
		}
	});

});