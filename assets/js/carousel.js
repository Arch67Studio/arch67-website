document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.fp-carousel');
    
    carousels.forEach(function(carousel) {
        let currentIndex = 0;
        let startX = 0;
        let isDragging = false;
        
        const track = carousel.querySelector('.fp-carousel-track');
        const slides = carousel.querySelectorAll('.fp-carousel-slide');
        const prevBtn = carousel.querySelector('.fp-prev');
        const nextBtn = carousel.querySelector('.fp-next');
        const dotsContainer = carousel.querySelector('.fp-carousel-dots');
        const slideCount = slides.length;
        let autoPlayInterval;
        
        // Create dots
        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('button');
                dot.classList.add('fp-carousel-dot');
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            }
            updateDots();
        }
        
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.fp-carousel-dot');
            dots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }
        
        function goToSlide(index) {
            if (index < 0) index = slideCount - 1;
            if (index >= slideCount) index = 0;
            currentIndex = index;
            updateCarousel();
            resetAutoPlay();
        }
        
        function nextSlide() {
            goToSlide(currentIndex + 1);
        }
        
        function prevSlide() {
            goToSlide(currentIndex - 1);
        }
        
        function startAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 5000);
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
        
        // Touch events for mobile
        function handleTouchStart(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            stopAutoPlay();
        }
        
        function handleTouchMove(e) {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                isDragging = false;
                startAutoPlay();
            }
        }
        
        function handleTouchEnd() {
            isDragging = false;
            startAutoPlay();
        }
        
        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        
        // Mobile touch support
        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchmove', handleTouchMove);
        carousel.addEventListener('touchend', handleTouchEnd);
        
        // Initialize
        createDots();
        updateCarousel();
        startAutoPlay();
    });
});
