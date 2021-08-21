export const slider = () => {
    const allSlides = document.querySelector('.slider')?.children;
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const INTERVAL_TIME = 10000;

    let currentId = 0;
    for(let i = 0; i < allSlides.length; i++) {
        if (allSlides[i].classList.contains('active')) {
            currentId = i;
        }
    }

    const changeSlideInterval = () => {
        for(let i = 0; i < allSlides.length; i++) {
            allSlides[i].classList.remove('active');
        }
        if (currentId === allSlides.length - 1) {
            currentId = 0;
        } else {
            currentId = ++currentId;
        }
        allSlides[currentId].classList.add('active')
    }

    let interval = setInterval(changeSlideInterval, INTERVAL_TIME);

    leftArrow?.addEventListener('click', () => {
        window.clearInterval(interval);
        for(let i = 0; i < allSlides.length; i++) {
            allSlides[i].classList.remove('active');
        }
        if (currentId === 0) {
            currentId = allSlides.length - 1;
        } else {
            currentId = --currentId;
        }
        allSlides[currentId].classList.add('active');
        interval = setInterval(changeSlideInterval, INTERVAL_TIME);
    })

    rightArrow?.addEventListener('click', () => {
        window.clearInterval(interval);
        for(let i = 0; i < allSlides.length; i++) {
            allSlides[i].classList.remove('active');
        }
        if (currentId === allSlides.length - 1) {
            currentId = 0;
        } else {
            currentId = ++currentId;
        }
        allSlides[currentId].classList.add('active');
        interval = setInterval(changeSlideInterval, INTERVAL_TIME);
    })

}