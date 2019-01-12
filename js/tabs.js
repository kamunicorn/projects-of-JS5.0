"use strict";

    // tabs switching
document.addEventListener('DOMContentLoaded', () => {

    let headerOfTabs = document.querySelector('.decoration_slider'),
        tabs = headerOfTabs.querySelectorAll('.decoration_item'),
        tabContent = document.querySelectorAll('.decoration_content_item'),
        tabCounter = 0;
        // tabCounter используется как индекс предыдущего таба
    /* tabContent[0] = decorContent.querySelector('.internal');
    tabContent[1] = decorContent.querySelector('.external');
    tabContent[2] = decorContent.querySelector('.rising');
    tabContent[3] = decorContent.querySelector('.roof'); */

    for (let i = 0; i < tabContent.length; i++) {
        hideTab(i);
    }
    showTab(tabCounter);

    headerOfTabs.addEventListener('click', function(e) {
        let target = e.target,
            parent = (target.tagName == 'A') ? target.parentElement.parentElement :
            target.parentElement,
            siblings = parent.parentElement.childNodes;
        console.log(parent);
        console.log(siblings);
        
        /* console.log(parent.parentElement);
        console.log(parent.parentElement.children);
        console.log(parent.parentElement.childNodes);
        console.log('.'); */
        if (parent.classList.contains('decoration_item')) {
            // if (siblings.length == tabs.length) {}
            for (let i = 0; i < tabs.length; i++) {
                // if (parent == tabs[i] && tabContent[i].style.display == "none") {
                /* console.log(tabs[i]);
                console.log(parent == tabs[i]); */
                if (parent == tabs[i]) {
                    switchTab(i);
                    tabCounter = i;
                    break;
                }
            }
        }
    });

    function switchTab(n) {
        if (n != tabCounter) {
            showTab(n);
            hideTab(tabCounter);
        }
    }

    function showTab(n) {
        tabContent[n].classList.add('show');
        tabContent[n].classList.remove('hide');
        tabs[n].querySelector('.decoration_link').classList.add('after_click');
    }

    function hideTab(n) {
        tabContent[n].classList.add('hide');
        tabContent[n].classList.remove('show');
        tabs[n].querySelector('.decoration_link').classList.remove('after_click');
    }
});