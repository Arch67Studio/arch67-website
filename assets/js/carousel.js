document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");

    // Safety check (prevents errors if missing on page)
    if (!track || slides.length === 0 || !nextBtn || !prevBtn) {
        console.warn("Carousel not found on this page.");
        return;
    }

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Optional: auto-play
    let auto = setInterval(() => {
        index = (index + 1) % slides.length;
        updateCarousel();
    }, 5000);

    // Pause on hover
    const carousel = document.querySelector(".carousel");

    if (carousel) {
        carousel.addEventListener("mouseenter", () => clearInterval(auto));
        carousel.addEventListener("mouseleave", () => {
            auto = setInterval(() => {
                index = (index + 1) % slides.length;
                updateCarousel();
            }, 5000);
        });
    }

});
