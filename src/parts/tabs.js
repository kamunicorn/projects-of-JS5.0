"use strict";

function tabs() {
let decorArray = [ 'internal', 'external', 'rising', 'roof' ];

    // decoration tabs switching

document.addEventListener('DOMContentLoaded', () => {

    let tabsDecorBox = document.querySelector('.decoration_slider'),
        tabsDecor = tabsDecorBox.querySelectorAll('.decoration_item'),
        decorContentBox = document.querySelector('.decoration_content'),
        tabDecorContent = [],
        decorIndex = 0, // используется (?) как индекс первого таба
        prevTabDecor = tabsDecor[decorIndex]; // используется как предыдущий таб
    
    decorArray.forEach( (item) => {tabDecorContent[item] = decorContentBox.querySelector('.' + item);} );
    
    hideTabsDecor();
    showTabDecor(tabsDecor[decorIndex], Object.keys(tabDecorContent)[decorIndex]);

    tabsDecorBox.addEventListener('click', function(e) {
        let target = e.target,
            parent = (target.tagName == 'A') ? target.parentElement.parentElement :
            target.parentElement;
        
        if (parent.classList.contains('decoration_item') && prevTabDecor != parent) {
            switchTabDecor.call(parent);
            prevTabDecor = parent;
        }
    });

    function switchTabDecor() {
        let currentTab = this,
            currentKey,
            previousKey;

        decorArray.forEach( (item) => {
            if (this.querySelector('.decoration_link').classList.contains(item + '_link')) {
                currentKey = item;
            }
            if (prevTabDecor.querySelector('.decoration_link').classList.contains(item + '_link')) {
                previousKey = item;
            }
        });

        if (currentKey != previousKey) {
            hideTabsDecor();
        }
        showTabDecor(currentTab, currentKey);
    }

    function showTabDecor(tab, key) {
        tab.querySelector('.decoration_link').classList.add('after_click');
        // tab.querySelector('.decoration_link a').add('after_click');
        showElem.call(tabDecorContent[key]);
    }

    function hideTabsDecor() {
        decorArray.forEach( (key) => {hideElem.call(tabDecorContent[key]);} );
        document.querySelectorAll('.decoration_link').forEach( (item) => {
            item.classList.remove('after_click');
        });
    }


    // glazing tabs switching

let arrayForTabs = {
    glazing : [ 'tree', 'aluminum', 'plastic', 'french', 'rise' ],
    decoration : [ 'internal', 'external', 'rising', 'roof' ]
},
    glazingArray = [ 'tree', 'aluminum', 'plastic', 'french', 'rise' ],
    tabsName;

    let glazing = document.querySelector('.glazing'),
        tabsContainer = glazing.querySelector('.glazing_slider'),
        tabs = tabsContainer.querySelectorAll('.glazing_block'),
        tabContent = [],
        tabIndex = 0, // используется (?) как индекс первого таба
        previousTab = tabs[tabIndex]; // используется как предыдущий таб
    
    tabContent = glazing.querySelectorAll('.glazing_content');
    // glazingArray.forEach( (item) => {tabContent[glazingArray.indexOf(item)] = glazing.querySelector('.' + item);} );
    // console.log(tabContent);
    // glazingArray.forEach( (item) => {tabContent[item] = glazing.querySelector('.glazing_content.' + item);} );
    
    tabsName = 'glazing';
    hideTabs();
    showTab(tabs[tabIndex], tabContent[tabIndex]);
    /* Object.keys(arrayForTabs).forEach( (item) => {
        tabsName = item;
        arrayForTabs[tabsName].forEach( (k) => {tabContent[k] = glazing.querySelector(`.${tabsName}_content.` + k);} );
        hideTabs();
        showTab(tabs[tabIndex], Object.keys(tabContent)[tabIndex]);
    }); */
    
    tabsContainer.addEventListener('click', function(e) {
        let target = e.target,
            parent = (target.tagName == 'A' || target.tagName == 'IMG') ? target.parentElement :
            target;
        
        if (parent.classList.contains('glazing_block') && previousTab != parent) {
            tabsName = 'glazing';
            switchTab.call(parent);
            previousTab = parent;
        }
    });

    function switchTab() {
        let currentTab = this,
            /* currentKey,
            previousKey, */
            currentIndex,
            prevIndex;

        /* arrayForTabs[tabsName].forEach( (item) => {
            if (this.querySelector(`.${tabsName}_link`).classList.contains(item + '_link')) {
                currentKey = item;
            }
            if (previousTab.querySelector(`.${tabsName}_link`).classList.contains(item + '_link')) {
                previousKey = item;
            }
        }); */
        glazingArray.forEach( (item, index) => {
            if (this.querySelector(`.${tabsName}_link`).classList.contains(item + '_link')) {
                currentIndex = index;
            }
            if (previousTab.querySelector(`.${tabsName}_link`).classList.contains(item + '_link')) {
                prevIndex = index;
            }
        });

        if (currentIndex != prevIndex) {
            hideTabs();
        }
        showTab(currentTab, tabContent[currentIndex]);
    }

    function showTab(tab, content) {
        tab.querySelector(`.${tabsName}_link`).classList.add('active');
        showElem.call(content);
    }

    function hideTabs() {
        tabContent.forEach( (item) => {hideElem.call(item);} );
        tabs.forEach( (item) => {
            item.querySelector(`.${tabsName}_link`).classList.remove('active');
        });
    }
});
}

module.exports = tabs;