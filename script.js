let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(() => changeSlide(1), 3000); // Auto-slide every 3 seconds



function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = '#121212';
        body.style.color = '#ffffff';
        modeIcon.textContent = '🌙'; // Moon icon for dark mode
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = '#000000';
        modeIcon.textContent = '☀️'; // Sun icon for light mode
    }
}

