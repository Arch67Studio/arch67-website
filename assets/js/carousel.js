// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    // Initialize all carousels
    const carousels = document.querySelectorAll('.fp-carousel');
    
    carousels.forEach(function(carousel) {
        initCarousel(carousel);
    });
});

function initCarousel(carousel) {
    // Get elements
    const track = carousel.querySelector('.fp-carousel-track');
    const slides = carousel.querySelectorAll('.fp-carousel-slide');
    const prevBtn = carousel.querySelector('.fp-prev');
    const nextBtn = carousel.querySelector('.fp-next');
    const dotsContainer = carousel.querySelector('.fp-carousel-dots');
    
    let currentIndex = 0;
    let autoPlayInterval;
    const slideCount = slides.length;
    
    // Create dots
    function createDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('fp-carousel-dot');
            dot.addEventListener('click', function() {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
        updateDots();
    }
    
    // Update active dot
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.fp-carousel-dot');
        dots.forEach(function(dot, index) {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = 'translateX(' + offset + '%)';
        updateDots();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        currentIndex = index;
        updateCarousel();
        resetAutoPlay();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Auto-play functions
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(function() {
            nextSlide();
        }, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Add event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // Initialize
    createDots();
    updateCarousel();
    startAutoPlay();
}
