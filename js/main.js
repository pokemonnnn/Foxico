const slider = document.querySelectorAll('.slide');
const countryTxt = document.querySelectorAll('.left .box .country');
const desc = document.querySelectorAll('.left .box-desc .desc-country');
const numberContainer = document.querySelector('.vr .wrapper');

slider.forEach((slide,indx) => {
    slide.style.transform = `translateX(${indx*105}%)`;
});
countryTxt.forEach((txt,indx) => {
    txt.style.transform = `translateY(${indx*105}%)`;
});
desc.forEach((des,indx) => {
    des.style.transform = `translateY(${indx*100}%)`;
});

slider.forEach((slide, indx) => {
    const number = document.createElement('div');
    number.classList.add('number');
    numberContainer.appendChild(number);

    const num = document.createElement('p');
    num.textContent = indx + 1;
    number.appendChild(num);
})
const numbers = document.querySelectorAll('.vr .wrapper .number');
numbers[0].style.opacity = 1;
numbers[0].style.transform = 'scale(1)';

const updateNumberVisibility = () => {
    numbers.forEach((number, index) => {
        if (index === currSlide) {
            number.style.opacity = 1;
            number.style.transform = 'scale(1)';
        } else {
            number.style.opacity = 0;
            number.style.transform = 'scale(0)';
        }
    });
};

let currSlide = 0;
let maxSlide = slider.length - 1;

// window.onload = function(){
//     autoSlide = setInterval(function () {
//         if (currSlide === maxSlide){
//             currSlide = 0;
//         } else {
//             currSlide++;
//         }

//         console.log(currSlide)

//         slider.forEach((slide, indx) => {
//             slide.style.transform = `translateX(${105*(indx - currSlide)}%)`
//         })
//     })
// }

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const thumb = document.querySelectorAll('.thumb');
const main = document.getElementsByTagName('main');
const image = document.querySelectorAll('.thumb-img');


console.log(countryTxt);

thumb[0].classList.add('thumb-active');

const imgSrc = thumb[0].querySelector('img').src;
document.querySelector('body').style.backgroundImage = `url(${imgSrc})`;

btnPrev.addEventListener('click', function () {
    if (currSlide === 0) {
        currSlide = maxSlide;
    } else {
        currSlide = currSlide - 1;
    }

    updateSliderTransform();
    updateNumberVisibility();
});

btnNext.addEventListener('click', function () {
    if (currSlide === maxSlide) {
        currSlide = 0;
    } else {
        currSlide = currSlide + 1;
    }

    updateSliderTransform();
    updateNumberVisibility();
});

function updateSliderTransform() {
    countryTxt.forEach((txt, indx) => {
        const offset = indx - currSlide;
        txt.style.transform = `translateY(${offset * 105}%)`;
    });
    desc.forEach((des, indx) => {
        const offset = indx - currSlide;
        des.style.transform = `translateY(${offset * 105}%)`;
    });
    slider.forEach((slide, indx) => {
        const offset = indx - currSlide;
        slide.style.transform = `translateX(${offset * 105}%)`;
        if (indx == currSlide) {
            thumb[indx].classList.add('thumb-active');
            const imgSrc = thumb[indx].querySelector('img').src;
            document.querySelector('body').style.background = ` url(${imgSrc})`;
        } else {
            thumb[indx].classList.remove('thumb-active');
        }
    });

    updateNumberVisibility();

    // console.log(thumb[currSlide])
}
