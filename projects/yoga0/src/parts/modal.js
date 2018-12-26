	// Modal
function modal() {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		popupClose = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		clickedButton;

	descriptionBtn.forEach(function(btn) {
		btn.addEventListener('click', function() {
			clickedButton = this;
			showModal.call(this);
		});
	});

	more.addEventListener('click', function() {
		clickedButton = this;
		showModal.call(this);
	});

	popupClose.addEventListener('click', () => {
		overlay.style.display = 'none';
		clickedButton.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	function showModal() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
}

module.exports = modal;