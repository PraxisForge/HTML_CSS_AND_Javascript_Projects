let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < 3; i++) {  
        let index = (slideIndex + i) % slides.length;
        slides[index].style.display = "block";
    }

    for (let dot of dots) {
        dot.classList.remove("active");
    }
    dots[slideIndex % dots.length].classList.add("active");
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

function currentSlide(n) {
    slideIndex = (n - 1 + slides.length) % slides.length;
    showSlides();
}

// Auto slide every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);

// Initial display
showSlides();
