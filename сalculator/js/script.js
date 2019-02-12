let total = 5000,
	time = 1,
	hourRate;

const 	cms = 2500,
		changes = 1000,
		block = 500,
		page = 2500
		land = 5000,
		corp = 12000;

tabLeft = document.querySelector('.tab-left'),
tabRight = document.querySelector('.tab-right'),
blocksBlock = document.getElementById('blocks-block'),
pagesBlock = document.getElementById('pages-block'),
counterBlocks = document.getElementById('counter-blocks'),
counterPages = document.getElementById('counter-pages'),
counterHours = document.getElementById('counter-hours'),
counterRate = document.getElementById('counter-rate'),
changesCheck = document.getElementById('changes-check'),
cmsCheck = document.getElementById('cms-check'),
totalValue = document.getElementsByClassName('total-count')[0],
inputs = document.getElementsByTagName('input');

function deleteAllValues () {
	for (let i=0; i<inputs.length; i++) {
		inputs[i].value = '';
	};
	changesCheck.checked = false;
	cmsCheck.checked = false;
}

window.addEventListener('DOMContentLoaded', function() {

	tabLeft.addEventListener('click', () => {
		blocksBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';

		tabLeft.classList.add('tab_active');
		tabRight.classList.remove('tab_active');

		deleteAllValues();

		total = land;
		totalValue.value = total;
	})

	tabRight.addEventListener('click', () => {
		blocksBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';

		tabLeft.classList.remove('tab_active');
		tabRight.classList.add('tab_active');

		deleteAllValues();

		total = corp;
		totalValue.value = total;
	})

	counterBlocks.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
		counterPages.value = '';
		total = counterBlocks.value * block;
		totalValue.value = total;
	})

	counterPages.addEventListener('change', () => {
		counterHours.value = '';
		counterRate.value = '';
		counterBlocks.value = '';
		total = counterPages.value * page;
		totalValue.value = total;
	})

	counterHours.addEventListener('change', () => {
		counterBlocks.value = '';
		counterPages.value = '';
		total = 0;
		time = counterHours.value;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	})

	counterRate.addEventListener('change', () => {
		counterBlocks.value = '';
		counterPages.value = '';
		total = 0;
		hourRate = time * counterRate.value;
		totalValue.value = hourRate;
		total = hourRate;
	})

	changesCheck.addEventListener('change', () => {
		if (changesCheck.checked) {
			total += changes;
		} else {
			total -= changes;
		}
		totalValue.value = total;
	})

	cmsCheck.addEventListener('change', () => {
		if (cmsCheck.checked) {
			total += cms;
		} else {
			total -= cms;
		}
		totalValue.value = total;
	})

})