// Foster + Partners Style JavaScript
class FosterStyleWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSearch();
        this.setupSmoothScrolling();
        this.setupHeaderScroll();
        this.setupProjectHover();
        this.setupImageLoading();
        this.setupAnimations();
        
        console.log('ARCH67 Foster Style Website initialized');
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        if (mobileMenuClose && mobileMenu) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        const mobileLinks = document.querySelectorAll('.mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    setupSearch() {
        const searchBtn = document.getElementById('search-btn');
        const mobileSearchBtn = document.getElementById('mobile-search-btn');
        const searchOverlay = document.getElementById('search-overlay');
        const searchClose = document.getElementById('search-close');
        const searchInput = document.getElementById('search-input');

        // Ensure search overlay is hidden on load
        if (searchOverlay) searchOverlay.classList.remove('active');

        if (searchBtn && searchOverlay) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchOverlay.classList.add('active');
                if (searchInput) searchInput.focus();
                document.body.style.overflow = 'hidden';
            });
        }

        if (mobileSearchBtn && searchOverlay) {
            mobileSearchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) mobileMenu.classList.remove('active');
                searchOverlay.classList.add('active');
                if (searchInput) searchInput.focus();
                document.body.style.overflow = 'hidden';
            });
        }

        if (searchClose && searchOverlay) {
            searchClose.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (searchInput) searchInput.value = '';
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (searchOverlay && searchOverlay.classList.contains('active')) {
                    searchOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    if (searchInput) searchInput.value = '';
                }
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        if (searchOverlay) {
            searchOverlay.addEventListener('click', (e) => {
                if (e.target === searchOverlay) {
                    searchOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    if (searchInput) searchInput.value = '';
                }
            });
        }

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

        const projectItems = document.querySelectorAll('.project-item');
        let found = false;

        projectItems.forEach(item => {
            const title = item.querySelector('.project-title')?.textContent.toLowerCase() || '';
            const location = item.querySelector('.project-location')?.textContent.toLowerCase() || '';
            
            if (title.includes(term.toLowerCase()) || location.includes(term.toLowerCase())) {
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                item.style.backgroundColor = 'var(--gray-light)';
                setTimeout(() => {
                    item.style.backgroundColor = '';
                }, 3000);
                found = true;
            }
        });

        const searchOverlay = document.getElementById('search-overlay');
        if (searchOverlay) {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (!found) {
            console.log('No projects found matching:', term);
        }
    }

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

    setupHeaderScroll() {
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    setupProjectHover() {
        const projectItems = document.querySelectorAll('.project-item');
        
        projectItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = 'var(--gray-light)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = '';
            });
        });
    }

    setupImageLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            img.addEventListener('error', function() {
                console.warn('Image failed to load:', this.src);
            });
        });
    }

    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll('.project-item, .content-section, .gallery-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Initialize website
document.addEventListener('DOMContentLoaded', () => {
    new FosterStyleWebsite();
});

// Project detail page handling
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
    document.title = `${project.title} | ARCH67`;
    const projectImageData = projectImages[project.id];

    // Render hero section
    const heroSection = document.getElementById('project-hero');
    if (heroSection && projectImageData) {
        heroSection.innerHTML = `
            <img src="${projectImageData.hero.url}" alt="${projectImageData.hero.alt}" class="hero-image">
            <div class="hero-overlay"></div>
            <div class="project-hero-content">
                <h1 class="project-detail-title">${project.title}</h1>
                <p class="project-detail-location">${project.location}</p>
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
            <div class="gallery-item">
                <img src="${image.url}" alt="${image.alt}" class="gallery-image">
                <div class="image-caption">${image.caption}</div>
            </div>
        `).join('');
    }

    // Render content
    const contentSection = document.getElementById('project-content');
    if (contentSection) {
        contentSection.innerHTML = `
            <div class="project-content">
                <div class="content-section">
                    <h2>Architectural Vision</h2>
                    ${project.longDescription.map(paragraph => `
                        <p>${paragraph}</p>
                    `).join('')}
                </div>

                <div class="content-section">
                    <h2>Design Approach</h2>
                    <p>${project.designApproach || 'Innovative design solutions that respond to context, climate, and user needs while pushing the boundaries of architectural expression.'}</p>
                    
                    <div class="project-stats">
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.floors}</span>
                            <span class="stat-label">Floors</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.area}</span>
                            <span class="stat-label">Square Meters</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.year}</span>
                            <span class="stat-label">Year</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${project.stats.certification}</span>
                            <span class="stat-label">Certification</span>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Technical Innovation</h2>
                    <p>${project.technicalInnovation || 'State-of-the-art building systems and sustainable technologies integrated seamlessly into the architectural design.'}</p>
                </div>
            </div>
        `;
    }
}

// Project navigation
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.dataset.projectId;
            if (projectId && projects[projectId]) {
                sessionStorage.setItem('currentProject', JSON.stringify(projects[projectId]));
                window.location.href = 'project-detail.html';
            }
        });
    });
});
