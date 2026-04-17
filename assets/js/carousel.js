document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel-wrapper").forEach(initCarousel);
});

function initCarousel(wrapper) {
    const carousel = wrapper.querySelector(".carousel");
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".slide");
    const nextBtn = wrapper.querySelector(".carousel-btn.next");
    const prevBtn = wrapper.querySelector(".carousel-btn.prev");

    if (!track || slides.length === 0 || !nextBtn || !prevBtn) return;

    let index = 0;
    let auto;
    let isTransitioning = false;

    function updateCarousel() {
        if (isTransitioning) return;
        isTransitioning = true;
        track.style.transform = `translateX(-${index * 100}%)`;
        
        track.addEventListener("transitionend", () => {
            isTransitioning = false;
        }, { once: true });
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    function startAutoPlay() {
        auto = setInterval(() => {
            if (!isTransitioning) {
                index = (index + 1) % slides.length;
                updateCarousel();
            }
        }, 5000);
    }

    function stopAutoPlay() {
        clearInterval(auto);
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
        resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
        resetAutoPlay();
    });

    carousel.addEventListener("mouseenter", stopAutoPlay);
    carousel.addEventListener("mouseleave", startAutoPlay);

    updateCarousel();
    startAutoPlay();
}
