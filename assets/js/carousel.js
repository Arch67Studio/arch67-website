document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel").forEach(initCarousel);
});

function initCarousel(carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".slide");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");

    if (!track || slides.length === 0 || !nextBtn || !prevBtn) return;

    let index = 0;
    let auto;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoPlay() {
        auto = setInterval(() => {
            index = (index + 1) % slides.length;
            updateCarousel();
        }, 5000);
    }

    function stopAutoPlay() {
        clearInterval(auto);
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    carousel.addEventListener("mouseenter", stopAutoPlay);
    carousel.addEventListener("mouseleave", startAutoPlay);

    updateCarousel();
    startAutoPlay();
}
