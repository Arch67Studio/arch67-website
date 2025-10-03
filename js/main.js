// Main JavaScript functionality for Arch67
class Arch67 {
    constructor() {
        this.init();
    }
    
    init() {
        this.initNavigation();
        this.initHeroSlider();
        this.initSmoothScroll();
        this.initProjectsFilter();
        this.initContactForm();
        this.initMobileMenu();
    }
    
    initNavigation() {
        const navbar = document.querySelector('.navbar');
        
        // Navbar scroll effect
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
    }
    
    initMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
            
            // Close menu when clicking on links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
    }
    
    initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const prevBtn = document.querySelector('.hero-prev');
        const nextBtn = document.querySelector('.hero-next');
        let currentSlide = 0;
        let slideInterval;
        
        if (slides.length === 0) return;
        
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            currentSlide = index;
        }
        
        const nextSlide = () => {
            let next = currentSlide + 1;
            if (next >= slides.length) next = 0;
            showSlide(next);
        }
        
        const prevSlide = () => {
            let prev = currentSlide - 1;
            if (prev < 0) prev = slides.length - 1;
            showSlide(prev);
        }
        
        // Auto-advance slides
        const startSlider = () => {
            slideInterval = setInterval(nextSlide, 5000);
        }
        
        const stopSlider = () => {
            clearInterval(slideInterval);
        }
        
        // Start auto-sliding
        startSlider();
        
        // Pause on hover
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', stopSlider);
            hero.addEventListener('mouseleave', startSlider);
        }
        
        // Manual controls
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopSlider();
                nextSlide();
                startSlider();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopSlider();
                prevSlide();
                startSlider();
            });
        }
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (hero) {
            hero.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            hero.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
        }
        
        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                // Swipe left - next slide
                stopSlider();
                nextSlide();
                startSlider();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe right - previous slide
                stopSlider();
                prevSlide();
                startSlider();
            }
        }
    }
    
    initSmoothScroll() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    initProjectsFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-archive-item');
        
        if (filterButtons.length === 0 || projectItems.length === 0) return;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Add initial animation to project items
        projectItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const name = contactForm.querySelector('input[type="text"]').value;
                const email = contactForm.querySelector('input[type="email"]').value;
                const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
                const message = contactForm.querySelector('textarea').value;
                
                // Simple validation
                if (!name || !email || !subject || !message) {
                    this.showNotification('Please fill in all fields.', 'error');
                    return;
                }
                
                if (!this.validateEmail(email)) {
                    this.showNotification('Please enter a valid email address.', 'error');
                    return;
                }
                
                // Simulate form submission
                this.showNotification('Thank you for your message, ' + name + '! We will get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // In a real implementation, you would send the data to a server here
                // Example:
                // fetch('/submit-form', {
                //     method: 'POST',
                //     body: formData
                // })
                // .then(response => response.json())
                // .then(data => {
                //     this.showNotification('Message sent successfully!', 'success');
                //     contactForm.reset();
                // })
                // .catch(error => {
                //     this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                // });
            });
            
            // Add input animations
            const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
            formInputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    if (!this.value) {
                        this.parentElement.classList.remove('focused');
                    }
                });
            });
        }
    }
    
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.form-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `form-notification form-notification--${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db'};
            color: white;
            border-radius: 4px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        `;
        
        // Add keyframes for animation
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .form-input:focus, .form-textarea:focus {
                    border-color: #000;
                    outline: none;
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
        
        // Add slideOut keyframes
        if (!document.querySelector('#notification-styles').textContent.includes('slideOut')) {
            const style = document.querySelector('#notification-styles');
            style.textContent += `
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
        }
    }
    
    // Utility function for lazy loading images
    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize animations on scroll
    initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.project-card, .approach-item, .person-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
        // Add animation styles
        if (!document.querySelector('#animation-styles')) {
            const style = document.createElement('style');
            style.id = 'animation-styles';
            style.textContent = `
                .animate-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const arch67 = new Arch67();
    
    // Initialize additional features
    arch67.initLazyLoading();
    arch67.initScrollAnimations();
});

// Add CSS for mobile menu
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: var(--white);
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            display: flex !important;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Inject mobile menu styles
if (!document.querySelector('#mobile-menu-styles')) {
    const style = document.createElement('style');
    style.id = 'mobile-menu-styles';
    style.textContent = mobileMenuStyles;
    document.head.appendChild(style);
}
