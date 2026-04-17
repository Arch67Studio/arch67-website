// Foster + Partners Style Carousel
class FPCarousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.fp-carousel-track');
        this.slides = Array.from(container.querySelectorAll('.fp-carousel-slide'));
        this.prevBtn = container.querySelector('.prev');
        this.nextBtn = container.querySelector('.next');
        this.dotsContainer = container.querySelector('.fp-carousel-dots');
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.autoPlayInterval = null;
        this.isTransitioning = false;
        
        this.init();
    }
    
    init() {
        if (this.slideCount === 0) return;
        
        this.createDots();
        this.updateCarousel();
        
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());
        
        this.startAutoPlay();
        
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        
        this.addTouchSupport();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('fp-carousel-dot');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        this.updateDots();
    }
    
    updateDots() {
        const dots = this.dotsContainer?.querySelectorAll('.fp-carousel-dot');
        dots?.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    updateCarousel() {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        const offset = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        this.updateDots();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }
    
    goToSlide(index) {
        if (this.isTransitioning) return;
        
        if (index < 0) index = this.slideCount - 1;
        if (index >= this.slideCount) index = 0;
        
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }
    
    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }
    
    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }
    
    startAutoPlay() {
        if (this.autoPlayInterval) return;
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) < swipeThreshold) return;
        
        if (diff > 0) {
            this.nextSlide();
        } else {
            this.prevSlide();
        }
    }
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.fp-carousel');
    carousels.forEach(carousel => new FPCarousel(carousel));
});
