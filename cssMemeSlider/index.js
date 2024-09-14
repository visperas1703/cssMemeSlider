const sliderLine = document.querySelector('.slider-line');
const controls = document.querySelectorAll('.control');
const slideCaption = document.getElementById('slide-caption');

const captions = [
    'Великий комбинатор!',
    'Аристократ!',
    'Налёт на психушку!!',
    'Ночная тварь...',
    'Серцеед'
];

let currentIndex = 0;

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        moveSliderTo(index);
    });
});

function moveSliderTo(index) {
    currentIndex = index;
    
    const sliderWidth = document.querySelector('.slider').offsetWidth;
    const offset = -sliderWidth * index;
    
    sliderLine.style.transform = `translateX(${offset}px)`;

    updateActiveControl(index);
    updateSlideCaption(index); 
}

function updateActiveControl(index) {
    controls.forEach(control => control.classList.remove('active'));
    controls[index].classList.add('active');
}

function updateSlideCaption(index) {
    const slideCaption = document.getElementById('slide-caption');
    slideCaption.classList.remove('visible');

    setTimeout(() => {
        slideCaption.textContent = captions[index]; 
        slideCaption.classList.add('visible');
    }, 500); 
}





updateActiveControl(0);
updateSlideCaption(0);