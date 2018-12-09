window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let headerOfTabs = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(n) {
		for (let i = n; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTabContent(1);

	function showTabContent(n) {
		if (tabContent[n].classList.contains('hide')) {
			tabContent[n].classList.remove('hide');
			tabContent[n].classList.add('show');
		}
	};

	headerOfTabs.addEventListener('click', function(event) {
		let target = event.target;

		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; tabs.length; i++) {
				if (target == tabs[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}

	});	

});
