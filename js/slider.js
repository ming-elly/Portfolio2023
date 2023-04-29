const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

setInterval(changeSlide, 5000); // 5000ms = 5秒ごとに画像が切り替わる
