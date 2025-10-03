// Main JavaScript for ARCH67 Website
class Arch67Website {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupHeaderBehavior();
        this.setupImageLoading();
        this.setupProjectNavigation();
        this.setupSearch();
        this.setupAnimations();
        
        console.log('ARCH67 Website initialized');
    }

    // Mobile Menu Functionality
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-nav a');

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Header Behavior
    setupHeaderBehavior() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'var(--primary-white)';
                header.style.backdropFilter = 'none';
            }

            lastScrollY = window.scrollY;
        });
    }

    // Image Loading and Optimization
    setupImageLoading() {
        // Lazy loading for images
        const lazyImages = document.querySelectorAll('img[data-src]');
        
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

        lazyImages.forEach(img => imageObserver.observe(img));

        // Handle image loading errors
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'IMG') {
                console.warn('Image failed to load:', e.target.src);
                e.target.style.display = 'none';
            }
        }, true);
    }

    // Project Navigation
    setupProjectNavigation() {
        // Handle project card clicks
        const projectCards = document.querySelectorAll('.project-card[data-project-id]');
        
        projectCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const projectId = card.dataset.projectId;
                this.loadProject(projectId);
            });
        });

        // Handle view project buttons
        const viewProjectBtns = document.querySelectorAll('.view-project');
        
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = btn.dataset.projectId;
                if (projectId) {
                    this.loadProject(projectId);
                }
            });
        });
    }

    // Load Project Detail
    loadProject(projectId) {
        const projectData = projects[projectId];
        if (!projectData) {
            console.error('Project not found:', projectId);
            return;
        }

        // Store project data for detail page
        sessionStorage.setItem('currentProject', JSON.stringify(projectData));
        
        // Navigate to project detail page
        window.location.href = 'project-detail.html';
    }

    // Search Functionality
    setupSearch() {
        const searchBtn = document.getElementById('search-btn');
        const searchOverlay = document.getElementById('search-overlay');
        const searchClose = document.getElementById('search-close');
        const searchInput = document.getElementById('search-input');

        if (searchBtn && searchOverlay) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchOverlay.classList.add('active');
                if (searchInput) searchInput.focus();
                document.body.style.overflow = 'hidden';
            });
        }

        if (searchClose) {
            searchClose.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (searchInput) searchInput.value = '';
            });
        }

        // Close search on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (searchInput) searchInput.value = '';
            }
        });

        // Handle search input
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(searchInput.value.trim());
                }
            });
        }
    }

    performSearch(term) {
        if (!term) return;

        // Simple search implementation - can be enhanced
        const projectCards = document.querySelectorAll('.project-card');
        let found = false;

        projectCards.forEach(card => {
            const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
            const location = card.querySelector('.project-location')?.textContent.toLowerCase() || '';
            
            if (title.includes(term.toLowerCase()) || location.includes(term.toLowerCase())) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.outline = '2px solid var(--accent-gold)';
                setTimeout(() => {
                    card.style.outline = 'none';
                }, 3000);
                found = true;
            }
        });

        if (!found) {
            // Show no results message
            console.log('No projects found matching:', term);
        }

        // Close search overlay
        const searchOverlay = document.getElementById('search-overlay');
        if (searchOverlay) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Animations
    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.project-card, .description-section, .gallery-item');
        animateElements.forEach(el => observer.observe(el));
    }
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Arch67Website();
});

// Handle project detail page
if (window.location.pathname.includes('project-detail.html')) {
    document.addEventListener('DOMContentLoaded', loadProjectDetail);
}

function loadProjectDetail() {
    const projectData = JSON.parse(sessionStorage.getItem('currentProject'));
    
    if (!projectData) {
        window.location.href = 'projects.html';
        return;
    }

    renderProjectDetail(projectData);
}

function renderProjectDetail(project) {
    // Update page title
    document.title = `${project.title} | ARCH67`;

    // Get images for this project
    const projectImageData = projectImages[project.id];

    // Render hero section
    const heroSection = document.getElementById('project-hero');
    if (heroSection && projectImageData) {
        heroSection.innerHTML = `
            <img src="${projectImageData.hero.url}" alt="${projectImageData.hero.alt}" class="hero-image">
            <div class="hero-content fade-in">
                <h1 class="hero-title">${project.title}</h1>
                <p class="hero-subtitle">${project.location}</p>
            </div>
        `;
    }

    // Render project info
    const infoSection = document.getElementById('project-info');
    if (infoSection) {
        infoSection.innerHTML = `
            <div class="project-info-grid">
                <div class="info-item">
                    <h3>Location</h3>
                    <p>${project.location}</p>
                </div>
                <div class="info-item">
                    <h3>Client</h3>
                    <p>${project.client}</p>
                </div>
                <div class="info-item">
                    <h3>Size</h3>
                    <p>${project.size}</p>
                </div>
                <div class="info-item">
                    <h3>Status</h3>
                    <p>${project.status}</p>
                </div>
            </div>
        `;
    }

    // Render gallery
    const gallerySection = document.getElementById('project-gallery');
    if (gallerySection && projectImageData) {
        gallerySection.innerHTML = projectImageData.gallery.map((image, index) => `
            <div class="gallery-item fade-in">
                <img src="${image.url}" alt="${image.alt}" class="gallery-image">
                <div class="image-caption">${image.caption}</div>
            </div>
        `).join('');
    }

    // Render description
    const descriptionSection = document.getElementById('project-description');
    if (descriptionSection) {
        descriptionSection.innerHTML = `
            <div class="project-description">
                <div class="description-section fade-in">
                    <h2>Architectural Vision</h2>
                    ${project.longDescription.map(paragraph => `
                        <p>${paragraph}</p>
                    `).join('')}
                </div>

                <div class="description-section fade-in">
                    <h2>Key Features</h2>
                    <ul>
                        ${project.features.map(feature => `
                            <li>${feature}</li>
                        `).join('')}
                    </ul>
                    
                    <div class="project-stats">
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.floors}</span>
                            <span class="stat-label">Floors</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.area}</span>
                            <span class="stat-label">Square Feet</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.certification}</span>
                            <span class="stat-label">Certified</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.year}</span>
                            <span class="stat-label">${project.status.includes('Completed') ? 'Completed' : 'Target'}</span>
                        </div>
                    </div>
                </div>

                <div class="description-section fade-in">
                    <h2>Services</h2>
                    <p>${project.services.join(', ')}</p>
                </div>
            </div>
        `;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Arch67Website };
}
