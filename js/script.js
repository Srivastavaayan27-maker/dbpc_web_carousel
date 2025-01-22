let currentSlide = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
