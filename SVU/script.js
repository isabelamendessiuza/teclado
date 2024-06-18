const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
const totalImages = images.length;

let index = 0;

function showNextImage() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    const offset = -index * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 5000);


let currentIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(showNextSlide, 5000);