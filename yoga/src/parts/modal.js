"use strict";
// Modal
function modal() {
	let more = document.querySelector('.more'),
		descriptionBtn = document.querySelectorAll('.description-btn'),
		popup = document.querySelector('.overlay'),
		popupClose = document.querySelector('.popup-close'),
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
		let statusBox = popup.querySelector('.status');
		if (statusBox) {
			statusBox.remove();
		}
		closeModal();
	});

	popup.addEventListener('click', function(event) {
        let e = event || window.event;
        if (e.target == this) {
            closeModal();
        }
    });

	function showModal() {
		this.classList.add('more-splash');
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		popup.style.display = 'none';
		clickedButton.classList.remove('more-splash');
		document.body.style.overflow = '';
	}
}

module.exports = modal;