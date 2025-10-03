// Main JavaScript for ARCH67 Website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    setupMobileMenu();
    setupSearch();
    setupProjectNavigation();
    console.log('ARCH67 Website initialized');
}

// Mobile Menu Functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Search Functionality - FIXED
function setupSearch() {
    const searchBtn = document.getElementById('search-btn');
    const mobileSearchBtn = document.getElementById('mobile-search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');

    // Ensure search overlay is hidden on page load
    if (searchOverlay) {
        searchOverlay.classList.remove('active');
    }

    // Desktop search button
    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            searchOverlay.classList.add('active');
            if (searchInput) {
                searchInput.focus();
            }
            document.body.style.overflow = 'hidden';
        });
    }

    // Mobile search button
    if (mobileSearchBtn && searchOverlay) {
        mobileSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Close mobile menu first
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            // Open search
            searchOverlay.classList.add('active');
            if (searchInput) {
                searchInput.focus();
            }
            document.body.style.overflow = 'hidden';
        });
    }

    // Close search
    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
            if (searchInput) searchInput.value = '';
        });
    }

    // Close search on escape key and when clicking outside
    if (searchOverlay) {
        // Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (searchInput) searchInput.value = '';
            }
        });

        // Click outside
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
                document.body.style.overflow = '';
                if (searchInput) searchInput.value = '';
            }
        });
    }

    // Handle search input
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(searchInput.value.trim());
            }
        });
    }
}

function performSearch(term) {
    if (!term) return;

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

    // Close search overlay
    const searchOverlay = document.getElementById('search-overlay');
    if (searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (!found) {
        console.log('No projects found matching:', term);
    }
}

// Project Navigation
function setupProjectNavigation() {
    const projectCards = document.querySelectorAll('.project-card[data-project-id]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            loadProject(projectId);
        });
    });

    const viewProjectBtns = document.querySelectorAll('.view-project[data-project-id]');
    
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = this.dataset.projectId;
            if (projectId) {
                loadProject(projectId);
            }
        });
    });
}

function loadProject(projectId) {
    const projectData = projects[projectId];
    if (!projectData) {
        console.error('Project not found:', projectId);
        return;
    }

    sessionStorage.setItem('currentProject', JSON.stringify(projectData));
    window.location.href = 'project-detail.html';
}

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
    document.title = `${project.title} | ARCH67`;
    const projectImageData = projectImages[project.id];

    // Render hero section
    const heroSection = document.getElementById('project-hero');
    if (heroSection && projectImageData) {
        heroSection.innerHTML = `
            <img src="${projectImageData.hero.url}" alt="${projectImageData.hero.alt}" class="hero-image">
            <div class="hero-content">
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
            <div class="gallery-item">
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
                <div class="description-section">
                    <h2>Architectural Vision</h2>
                    ${project.longDescription.map(paragraph => `
                        <p>${paragraph}</p>
                    `).join('')}
                </div>

                <div class="description-section">
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

                <div class="description-section">
                    <h2>Services</h2>
                    <p>${project.services.join(', ')}</p>
                </div>
            </div>
        `;
    }
}
