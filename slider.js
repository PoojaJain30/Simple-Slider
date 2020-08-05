var containerWidth;
var initialLeft;

window.addEventListener('load', function () {
    containerWidth = window.innerWidth;
    document.querySelector('.cus-slider-container').style.width = containerWidth

    initialLeft = ((containerWidth / 2) - 61);
    console.log('initialLeft',initialLeft);
    var waitForSlides = setInterval(function () {

        if (document.getElementsByClassName('cus-slider-slides').length > 0) {
            clearInterval(waitForSlides);

            document.getElementsByClassName('cus-slider-slides')[0].style.left = initialLeft + 'px';

            var myEvent = new Event('mousedown');
            document.querySelector('div.cus-slider-arrowright').dispatchEvent(myEvent);
        }
    }, 50);

});

var stepSize = 122;

var elemIndex = 0;

if (document.querySelectorAll('div.cus-slider-arrowright').length > 0) {

    document.querySelector('div.cus-slider-arrowright').addEventListener('mousedown', function () {

        if (elemIndex < 3) {

            document.querySelector('div.cus-slider-arrowleft').classList.remove('cus-slider-arrowleftactive');
            document.querySelector('div.cus-slider-arrowright').classList.remove('cus-slider-arrowrightactive');

            elemIndex++;

            var currentItem = document.querySelector('div.cus-slider-item.cus-slider-active');

            document.getElementsByClassName('cus-slider-slides')[0].style.left = ((-1) * elemIndex * stepSize) + initialLeft + 'px';

            if (currentItem.nextElementSibling.className.indexOf('cus-slider-item') > -1) {
                currentItem.nextElementSibling.classList.add('cus-slider-active');
                currentItem.classList.remove('cus-slider-active');

                currentItem.nextElementSibling.querySelector('.cus-slider-img').classList.add('cus-slider-hide');
                currentItem.nextElementSibling.querySelector('.cus-slider-imgActive').classList.remove('cus-slider-hide');

                currentItem.querySelector('.cus-slider-imgActive').classList.add('cus-slider-hide');
                currentItem.querySelector('.cus-slider-img').classList.remove('cus-slider-hide');

                document.querySelector('.cus-slider-desc.cus-slider-d-active').classList.remove('cus-slider-d-active');
                document.querySelector('.cus-slider-desc:nth-child(' + (elemIndex + 1) + ')').classList.add('cus-slider-d-active');
            }

            if (elemIndex == 3) {
                document.querySelector('div.cus-slider-arrowright').classList.add('cus-slider-arrowrightactive');
            } else {
                document.querySelector('div.cus-slider-arrowright').classList.remove('cus-slider-arrowrightactive');
            }

        } else {

        }

    });

}

if (document.querySelectorAll('div.cus-slider-arrowleft').length > 0) {

    document.querySelector('div.cus-slider-arrowleft').addEventListener('mousedown', function () {

        if (elemIndex < 1) {

        } else {

            document.querySelector('div.cus-slider-arrowright').classList.remove('cus-slider-arrowrightactive');

            elemIndex--;

            var currentItem = document.querySelector('div.cus-slider-item.cus-slider-active');

            document.getElementsByClassName('cus-slider-slides')[0].style.left = ((-1) * elemIndex * stepSize) + initialLeft + 'px';

            if (currentItem.previousElementSibling.className.indexOf('cus-slider-item') > -1) {
                currentItem.previousElementSibling.classList.add('cus-slider-active');
                currentItem.classList.remove('cus-slider-active');

                currentItem.previousElementSibling.querySelector('.cus-slider-img').classList.add('cus-slider-hide');
                currentItem.previousElementSibling.querySelector('.cus-slider-imgActive').classList.remove('cus-slider-hide');

                currentItem.querySelector('.cus-slider-imgActive').classList.add('cus-slider-hide');
                currentItem.querySelector('.cus-slider-img').classList.remove('cus-slider-hide');

                document.querySelector('.cus-slider-desc.cus-slider-d-active').classList.remove('cus-slider-d-active');
                document.querySelector('.cus-slider-desc:nth-child(' + (elemIndex + 1) + ')').classList.add('cus-slider-d-active');

                if (elemIndex == 0) {
                    document.querySelector('div.cus-slider-arrowleft').classList.add('cus-slider-arrowleftactive');
                } else {
                    document.querySelector('div.cus-slider-arrowleft').classList.remove('cus-slider-arrowleftactive');
                }
            }
        }
    });

}