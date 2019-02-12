	// Photo slider
function slider() {
	let photoBlock = document.getElementById('photo'),
		sliderItems = photoBlock.querySelectorAll('.slider-item'),
		photoPrev = photoBlock.querySelector('.prev'),
		photoNext = photoBlock.querySelector('.next'),
		sliderDotsBlock = photoBlock.querySelector('.slider-dots'),
		sliderDotsItems = sliderDotsBlock.querySelectorAll('.dot'),
		wantedSlide = 0;

	showSliderItems(wantedSlide);

	photoNext.addEventListener('click', () => {
		let lastSlide = wantedSlide;
		wantedSlide = (wantedSlide >= sliderItems.length - 1) ? 0 : wantedSlide + 1;
		showSliderItems(wantedSlide);
		resetDotActive(lastSlide, wantedSlide);
	});

	photoPrev.addEventListener('click', () => {
		let lastSlide = wantedSlide;
		wantedSlide = (wantedSlide <= 0) ? sliderItems.length - 1 : wantedSlide - 1;
		showSliderItems(wantedSlide);
		resetDotActive(lastSlide, wantedSlide);
	});

	sliderDotsBlock.addEventListener('click', (e) => {
		let target = e.target;
		if (target.classList.contains('dot') && !target.classList.contains('dot-active')) {
			let lastSlide = wantedSlide;
			for (let i = 0; i < sliderDotsItems.length; i++) {
				if (target == sliderDotsItems[i]) {
					wantedSlide = i;
					break;
				}
			}
			showSliderItems(wantedSlide);
			resetDotActive(lastSlide, wantedSlide);
		}
	});

	function showSliderItems(n) {
		for (let i = 0; i < sliderItems.length; i++) {
			if (i == n) {
				sliderItems[n].classList.add('show');
				sliderItems[n].classList.remove('hide');
			} else {
				sliderItems[i].classList.remove('show');
				sliderItems[i].classList.add('hide');	
			}
		}
	}

	function resetDotActive(last, current) {
		sliderDotsItems[last].classList.remove('dot-active');
		sliderDotsItems[current].classList.add('dot-active');
	}
}

module.exports = slider;