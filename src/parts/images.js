
function images() {
"use strict";
document.addEventListener('DOMContentLoaded', () => {
    let imagesBox = document.querySelector('.works .row'),
        overlay = document.querySelector('.overlay');

    imagesBox.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.tagName == 'IMG') {
            let bigImage = document.createElement('img');
    
            bigImage.setAttribute('src', target.parentElement.href);
            // bigImage.classList.add('myimage');
                
            overlay.appendChild(bigImage);
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            overlay.addEventListener('click', function(event) {
                let e = event || window.event;
                if (e.target == this) {
                    bigImage.remove();
                    overlay.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    });
});
}

module.exports = images;