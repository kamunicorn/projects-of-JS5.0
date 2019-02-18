"use strict";

	// tabs switching
function tabs() {
	let headerOfTabs = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	showTabContent(0);

	headerOfTabs.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (target == tabs[i] && tabContent[i].classList.contains('hide')) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	function showTabContent(n) {
		for (let i = 0; i < tabContent.length; i++) {
			if (i == n) {
				tabContent[n].classList.add('show');
				tabContent[n].classList.remove('hide');
			} else {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');	
			}
		}
	}
}

module.exports = tabs;