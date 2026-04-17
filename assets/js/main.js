// Add this at the TOP of main.js
(function() {
    'use strict';
    
    // Auto-version script tags to prevent caching
    function autoVersionScripts() {
        const scripts = document.querySelectorAll('script[src*="projects-data.js"], script[src*="main.js"]');
        const version = new Date().getTime(); // Use timestamp as version
        
        scripts.forEach(script => {
            const src = script.getAttribute('src');
            if (src && !src.includes('?')) {
                script.setAttribute('src', src + '?v=' + version);
            }
        });
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoVersionScripts);
    } else {
        autoVersionScripts();
    }
})();
// Main JavaScript functionality

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});

// Load featured projects on homepage
function loadFeaturedProjects() {
    const featuredProjectsContainer = document.getElementById('featured-projects');
    if (!featuredProjectsContainer) return;

    const featuredProjects = projects.filter(project => project.featured);
    
    featuredProjectsContainer.innerHTML = featuredProjects.map(project => `
        <div class="project-card">
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.type.charAt(0).toUpperCase() + project.type.slice(1)} | ${project.location}</p>
                <a href="project-detail.html?id=${project.id}" class="project-link" style="display: none;"></a>
            </div>
        </div>
    `).join('');

    // Add click event to project cards
    const projectCards = featuredProjectsContainer.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            window.location.href = `project-detail.html?id=${featuredProjects[index].id}`;
        });
    });
}

// Load all projects on projects page
function loadAllProjects() {
    const allProjectsContainer = document.getElementById('all-projects');
    if (!allProjectsContainer) return;
    
    allProjectsContainer.innerHTML = projects.map(project => `
        <div class="project-card" data-type="${project.type}">
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.type.charAt(0).toUpperCase() + project.type.slice(1)} | ${project.location}</p>
                <a href="project-detail.html?id=${project.id}" class="project-link" style="display: none;"></a>
            </div>
        </div>
    `).join('');

    // Add click event to project cards
    const projectCards = allProjectsContainer.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            window.location.href = `project-detail.html?id=${projects[index].id}`;
        });
    });
}

// Initialize project filter
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-type') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Load project detail
function loadProjectDetail(projectId) {
    const project = projects.find(p => p.id == projectId);
    if (!project) return;

    const projectHero = document.getElementById('project-hero');
    const descriptionText = document.getElementById('project-description-text');
    const detailsList = document.getElementById('project-details-list');
    const projectGallery = document.getElementById('project-gallery');

    if (projectHero) {
    projectHero.innerHTML = `
        <div class="project-hero-image">
            <img src="${project.images[0]}" alt="${project.title}">
        </div>
        <div class="project-hero-content">
            <h1>${project.title}</h1>
            <p class="location">${project.location}</p>
            <p>${project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project</p>
        </div>
    `;
}

    if (descriptionText) {
        descriptionText.textContent = project.description;
    }

    if (detailsList) {
        detailsList.innerHTML = Object.entries(project.details).map(([key, value]) => `
            <div class="detail-item">
                <span class="detail-label">${key}:</span>
                <span>${value}</span>
            </div>
        `).join('');
    }

    if (projectGallery) {
        // Skip the first image as it's used in the hero
        const galleryImages = project.images.slice(1);
        projectGallery.innerHTML = galleryImages.map(image => `
            <div class="gallery-item">
                <img src="${image}" alt="${project.title}">
            </div>
        `).join('');
    }

    // Update page title
    document.title = `${project.title} | Arch67`;
}

// Load latest news on homepage
function loadLatestNews() {
    const latestNewsContainer = document.getElementById('latest-news');
    if (!latestNewsContainer) return;

    const latestNews = news.filter(item => item.featured);
    
    if (latestNews.length === 0) {
        latestNewsContainer.innerHTML = '<p>No news available at the moment.</p>';
        return;
    }
    
    latestNewsContainer.innerHTML = latestNews.map(item => `
        <div class="news-card">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-content">
                <div class="news-date">${item.date}</div>
                <h3>${item.title}</h3>
                <p>${item.excerpt}</p>
                <a href="#" class="btn btn-outline">Read More</a>
            </div>
        </div>
    `).join('');
}

// Load all news on news page
function loadAllNews() {
    const allNewsContainer = document.getElementById('all-news');
    if (!allNewsContainer) return;
    
    if (news.length === 0) {
        allNewsContainer.innerHTML = '<p>No news available at the moment.</p>';
        return;
    }
    
    allNewsContainer.innerHTML = news.map(item => `
        <div class="news-card">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="news-content">
                <div class="news-date">${item.date}</div>
                <h3>${item.title}</h3>
                <p>${item.excerpt}</p>
                <a href="#" class="btn btn-outline">Read More</a>
            </div>
        </div>
    `).join('');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing functions...');
    
    // Check which page we're on and load appropriate content
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    console.log('Current page:', page);
    
    switch(page) {
        case 'index.html':
        case '':
            console.log('Loading homepage content...');
            loadFeaturedProjects();
            loadLatestNews();
            break;
        case 'projects.html':
            console.log('Loading projects page...');
            loadAllProjects();
            initProjectFilter();
            break;
        case 'project-detail.html':
            console.log('Loading project detail...');
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('id');
            loadProjectDetail(projectId);
            break;
        case 'news.html':
            console.log('Loading news page...');
            loadAllNews();
            break;
    }
});

// Also try to load content when window loads as backup
window.addEventListener('load', function() {
    console.log('Window fully loaded, checking for unloaded content...');
    
    // If on homepage and news container exists but is empty
    const latestNewsContainer = document.getElementById('latest-news');
    if (latestNewsContainer && latestNewsContainer.children.length === 0) {
        console.log('News container empty, loading news...');
        loadLatestNews();
    }
    
    // If on news page and news container exists but is empty
    const allNewsContainer = document.getElementById('all-news');
    if (allNewsContainer && allNewsContainer.children.length === 0) {
        console.log('All news container empty, loading all news...');
        loadAllNews();
    }
});
// Smart cache management
class ProjectDataManager {
    constructor() {
        this.lastUpdate = null;
        this.init();
    }
    
    init() {
        this.checkForUpdates();
        // Check for updates every 60 seconds
        setInterval(() => this.checkForUpdates(), 60000);
    }
    
    async checkForUpdates() {
        try {
            const response = await fetch(`assets/js/projects-data.js?t=${new Date().getTime()}`);
            const text = await response.text();
            const currentHash = this.hashCode(text);
            
            if (!this.lastUpdate) {
                this.lastUpdate = currentHash;
                return;
            }
            
            if (this.lastUpdate !== currentHash) {
                console.log('🔄 Projects data changed, refreshing...');
                this.lastUpdate = currentHash;
                this.reloadData();
            }
        } catch (error) {
            console.log('⚠️ Could not check for updates:', error);
        }
    }
    
    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return hash;
    }
    
    reloadData() {
        // Remove old script
        const oldScript = document.querySelector('script[src*="projects-data.js"]');
        if (oldScript) {
            oldScript.remove();
        }
        
        // Load new script
        const newScript = document.createElement('script');
        newScript.src = `assets/js/projects-data.js?updated=${new Date().getTime()}`;
        newScript.onload = () => {
            console.log('✅ New projects data loaded!');
            this.refreshPageContent();
        };
        document.head.appendChild(newScript);
    }
    
    refreshPageContent() {
        // Re-initialize page content based on current page
        const path = window.location.pathname;
        
        if (path.includes('index.html') || path === '/') {
            if (typeof loadFeaturedProjects === 'function') loadFeaturedProjects();
            if (typeof loadLatestNews === 'function') loadLatestNews();
        } else if (path.includes('projects.html')) {
            if (typeof loadAllProjects === 'function') loadAllProjects();
            if (typeof initProjectFilter === 'function') initProjectFilter();
        } else if (path.includes('news.html')) {
            if (typeof loadAllNews === 'function') loadAllNews();
        }
    }
}

// Initialize the manager
const projectDataManager = new ProjectDataManager();

// Auto-detect if page has dark background and adjust header
function setupHeaderForPage() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const pageHeader = document.querySelector('.page-header');
    
    // If page has hero section with dark background or dark page header
    if (heroSection || (pageHeader && window.getComputedStyle(pageHeader).backgroundColor === 'rgb(17, 17, 17)')) {
        header.classList.add('transparent-header');
    }
}

// Call this function in your DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    setupHeaderForPage();
    // ... your existing code
});
if (!detailsList) {
    detailsList.innerHTML = Object.entries(project.details).map(([key, value]) => `
        <div class="detail-item ${['Area', 'Capacity', 'Awards', 'Client'].includes(key) ? 'full-width' : ''}">
            <span class="detail-label">${key}:</span>
            <span>${value}</span>
        </div>
    `).join('');
}
// Technical Work Carousel - Only shows if current project has technicalImages
function initTechnicalCarousel() {
    const carouselSection = document.getElementById('technicalCarouselSection');
    const track = document.getElementById('technicalCarouselTrack');
    const prevBtn = document.getElementById('technicalPrevBtn');
    const nextBtn = document.getElementById('technicalNextBtn');
    const dotsContainer = document.getElementById('technicalCarouselDots');
    
    if (!carouselSection || !track) return;
    
    // Get the current project ID from URL or page context
    let currentProject = null;
    
    // Method 1: If you have a global currentProject variable set by your existing code
    if (typeof window.currentProject !== 'undefined' && window.currentProject) {
        currentProject = window.currentProject;
    }
    // Method 2: Get from URL parameter (e.g., ?id=3)
    else {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        if (projectId && typeof projects !== 'undefined') {
            currentProject = projects.find(p => p.id == projectId);
        }
    }
    
    // Check if current project has technicalImages array with at least one image
    const hasTechnicalImages = currentProject && 
                              currentProject.technicalImages && 
                              Array.isArray(currentProject.technicalImages) && 
                              currentProject.technicalImages.length > 0;
    
    // If no technical images, hide the entire carousel section and exit
    if (!hasTechnicalImages) {
        carouselSection.style.display = 'none';
        return;
    }
    
    // Show the carousel section
    carouselSection.style.display = 'block';
    
    const technicalImages = currentProject.technicalImages;
    let currentIndex = 0;
    let slideWidth = 100; // percentage
    
    // Build carousel slides
    function buildCarousel() {
        track.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        technicalImages.forEach((imgSrc, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'fp-carousel-slide';
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Technical Work ${index + 1}`;
            // Handle image loading errors
            img.onerror = function() {
                console.warn(`Failed to load technical image: ${imgSrc}`);
                this.style.display = 'none';
            };
            slide.appendChild(img);
            track.appendChild(slide);
            
            // Create dot
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        updateCarousel();
        
        // Hide navigation buttons if only 1 image
        if (technicalImages.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
        } else {
            if (prevBtn) prevBtn.style.display = 'flex';
            if (nextBtn) nextBtn.style.display = 'flex';
            if (dotsContainer) dotsContainer.style.display = 'flex';
        }
    }
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= technicalImages.length) index = technicalImages.length - 1;
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        if (currentIndex < technicalImages.length - 1) {
            currentIndex++;
            updateCarousel();
        } else if (technicalImages.length > 1) {
            // Optional: loop back to first
            currentIndex = 0;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else if (technicalImages.length > 1) {
            // Optional: loop to last
            currentIndex = technicalImages.length - 1;
            updateCarousel();
        }
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Build the carousel
    buildCarousel();
    
    // Optional: Auto-play (only if more than 1 image)
    let autoPlayInterval;
    function startAutoPlay() {
        if (technicalImages.length <= 1) return;
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }
    
    // Start auto-play (uncomment if desired)
    // startAutoPlay();
    
    // Pause auto-play on hover
    const carousel = document.querySelector('.fp-carousel');
    if (carousel && technicalImages.length > 1) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure projects data is loaded
    setTimeout(initTechnicalCarousel, 100);
});
