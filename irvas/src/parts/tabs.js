    // Переключение табов отстекление (glazing) и отделка (decoration)

function tabs() {
    "use strict";

    let tabsArray = {
        glazing: {
            type: [ 'tree', 'aluminum', 'plastic', 'french', 'rise' ],
            activeClassName: 'active'
        },
        decoration: {
            type: [ 'internal', 'external', 'rising', 'roof' ],
            activeClassName: 'after_click'
        }
    };
    
        // decoration and glazing tabs switching
    
    document.addEventListener('DOMContentLoaded', () => {
        let tabsNamesArray = Object.keys(tabsArray);
        
        tabsNamesArray.forEach( (tabsName) => {
    
            let tabsSlider = document.querySelector(`.${tabsName}_slider`),
                sliderItems = tabsSlider.querySelectorAll(`.${tabsName}_slider_item`),
                previousTab = sliderItems[0];
                
            tabsSlider.addEventListener('click', function(e) {
                let target = e.target,
                    parent;
                if (tabsName == 'decoration') {
                    parent = (target.tagName == 'A') ? target.parentElement.parentElement :
                    target.parentElement;
                } else if (tabsName == 'glazing') {
                    parent = (target.tagName == 'A' || target.tagName == 'IMG') ? target.parentElement :
                    target;
                }
                
                if (parent.classList.contains(`${tabsName}_slider_item`) && parent != previousTab) {
                    switchTab(parent, previousTab, tabsName);
                    previousTab = parent;
                }
            });
    
        });
    });
    
    function switchTab(currentTab, lastTab, tabsName) {
        let currentKey,
            lastKey,
            types = tabsArray[tabsName].type;
    
        types.forEach( (key) => {
            if (currentTab.querySelector(`.${tabsName}_link`).classList.contains(`${key}_link`)) {
                currentKey = key;
            }
            if (lastTab.querySelector(`.${tabsName}_link`).classList.contains(`${key}_link`)) {
                lastKey = key;
            }
        });
    
        if (currentKey != lastKey) {
            hideTabs(tabsName);
        }
        showTab(currentTab, tabsName, currentKey);
    }
    
    function hideTabs(tabsName) {
        let contentItems = document.querySelectorAll(`.${tabsName}_content_item`),
            tabLinks = document.querySelectorAll(`.${tabsName}_link`);
    
        contentItems.forEach( (content) => {hideElem.call(content);} );
        tabLinks.forEach( (link) => {
            link.classList.remove(tabsArray[tabsName].activeClassName);
        } );
    }
    
    function showTab(tab, tabsName, contentKey) {
        let tabLink = tab.querySelector(`.${contentKey}_link`),
            content = document.querySelector(`.${tabsName}_content_item.${contentKey}`);
        tabLink.classList.add(tabsArray[tabsName].activeClassName);
        showElem.call(content);
    }
}

module.exports = tabs;