"use strict";
let decorArray = [ 'internal', 'external', 'rising', 'roof' ];

    // tabs switching
document.addEventListener('DOMContentLoaded', () => {

    let tabsContainer = document.querySelector('.decoration_slider'),
        tabs = tabsContainer.querySelectorAll('.decoration_item'),
        decorContent = document.querySelector('.decoration_content'),
        tabContent = [],
        tabIndex = 0, // используется (?) как индекс предыдущего таба
        previousTab = tabs[tabIndex]; // используется как предыдущий таб
    
    decorArray.forEach( (decor) => {tabContent[decor] = decorContent.querySelector('.' + decor);} );
    
    hideTabs();
    showTab(tabs[tabIndex], Object.keys(tabContent)[tabIndex]);

    tabsContainer.addEventListener('click', function(e) {
        let target = e.target,
            parent = (target.tagName == 'A') ? target.parentElement.parentElement :
            target.parentElement;
        /* console.log(target);
        console.log(parent);
        console.log('.'); */
        
        if (parent.classList.contains('decoration_item') && previousTab != parent) {
            switchTab.call(parent);
            previousTab = parent;
        }
    });

    function switchTab() {
        let currentTab = this,
            currentKey,
            previousKey;

        decorArray.forEach( (item) => {
            if (this.querySelector('.decoration_link').classList.contains(item + '_link')) {
                currentKey = item;
            }
            if (previousTab.querySelector('.decoration_link').classList.contains(item + '_link')) {
                previousKey = item;
            }
        });

        // console.log(previousKey);
        if (currentKey != previousKey) {
            hideTabs();
        }
        showTab(currentTab, currentKey);
    }

    function showTab(tab, key) {
        tab.querySelector('.decoration_link').classList.add('after_click');
        tabContent[key].classList.add('show');
        tabContent[key].classList.remove('hide');
    }

    function hideTabs() {
        decorArray.forEach( (key) => {
            tabContent[key].classList.add('hide');
            tabContent[key].classList.remove('show');
        } );
        document.querySelectorAll('.decoration_link').forEach( (item) => {
            item.classList.remove('after_click');
        });
    }
});