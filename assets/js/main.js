// Auto-version script tags to prevent caching
(function() {
    'use strict';
    
    function autoVersionScripts() {
        const scripts = document.querySelectorAll('script[src*="projects-data.js"], script[src*="main.js"]');
        const version = new Date().getTime();
        
        scripts.forEach(script => {
            const src = script.getAttribute('src');
            if (src && !src.includes('?')) {
                script.setAttribute('src', src + '?v=' + version);
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoVersionScripts);
    } else {
        autoVersionScripts();
    }
})();

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
            </div>
        </div>
    `).join('');

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
            </div>
        </div>
    `).join('');

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
            filterButtons.forEach(btn => btn.classList.remove('active'));
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

    // Set global current project for carousel
    window.currentProject = project;

    const projectHero = document.getElementById('project-hero');
    const descriptionText = document.getElementById('project-description-text');
    const detailsList = document.getElementById('project-details-list');
    const projectGallery = document.getElementById('project-gallery');

    if (projectHero) {
        const heroImage = project.images[0] && project.images[0] !== "" ? project.images[0] : "assets/images/placeholder.jpg";
        projectHero.innerHTML = `
            <div class="project-hero-image">
                <img src="${heroImage}" alt="${project.title}">
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
        detailsList.innerHTML = Object.entries(project.details).map(([key, value]) => {
            const fullWidthKeys = ['Area', 'Capacity', 'Awards', 'Client'];
            const isFullWidth = fullWidthKeys.includes(key);
            return `
                <div class="detail-item ${isFullWidth ? 'full-width' : ''}">
                    <span class="detail-label">${key}:</span>
                    <span>${value}</span>
                </div>
            `;
        }).join('');
    }

    if (projectGallery) {
        const galleryImages = project.images.slice(1).filter(img => img && img !== "");
        if (galleryImages.length > 0) {
            projectGallery.innerHTML = galleryImages.map(image => `
                <div class="gallery-item">
                    <img src="${image}" alt="${project.title}">
                </div>
            `).join('');
        } else {
            projectGallery.innerHTML = '<p style="text-align:center; color:#666;">No additional images available.</p>';
        }
    }

    document.title = `${project.title} | Asad Nadkar`;
    
    // Initialize technical carousel after project loads
    setTimeout(initTechnicalCarousel, 100);
}

// Technical Work Carousel - Only shows if current project has technicalImages
function initTechnicalCarousel() {
    const carouselSection = document.getElementById('technicalCarouselSection');
    const track = document.getElementById('technicalCarouselTrack');
    const prevBtn = document.getElementById('technicalPrevBtn');
    const nextBtn = document.getElementById('technicalNextBtn');
    const dotsContainer = document.getElementById('technicalCarouselDots');
    
    if (!carouselSection || !track) return;
    
    let currentProject = window.currentProject;
    
    if (!currentProject) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        if (projectId && typeof projects !== 'undefined') {
            currentProject = projects.find(p => p.id == projectId);
            window.currentProject = currentProject;
        }
    }
    
    const hasTechnicalImages = currentProject && 
                              currentProject.technicalImages && 
                              Array.isArray(currentProject.technicalImages) && 
                              currentProject.technicalImages.length > 0;
    
    if (!hasTechnicalImages) {
        carouselSection.style.display = 'none';
        return;
    }
    
    carouselSection.style.display = 'block';
    
    const technicalImages = currentProject.technicalImages;
    let currentIndex = 0;
    let slideWidth = 100;
    let autoPlayInterval = null;
    
    function buildCarousel() {
        track.innerHTML = '';
        dotsContainer.innerHTML = '';
        
        technicalImages.forEach((imgSrc, index) => {
            const slide = document.createElement('div');
            slide.className = 'fp-carousel-slide';
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Technical Work ${index + 1}`;
            img.onerror = function() {
                console.warn(`Failed to load technical image: ${imgSrc}`);
                this.style.display = 'none';
            };
            slide.appendChild(img);
            track.appendChild(slide);
            
            const dot = document.createElement('div');
            dot.className = 'fp-carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        updateCarousel();
        
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
        const dots = dotsContainer.querySelectorAll('.fp-carousel-dot');
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
            currentIndex = 0;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else if (technicalImages.length > 1) {
            currentIndex = technicalImages.length - 1;
            updateCarousel();
        }
    }
    
    function startAutoPlay() {
        if (technicalImages.length <= 1) return;
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    buildCarousel();
    
    const carousel = document.querySelector('.fp-carousel');
    if (carousel && technicalImages.length > 1) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();
    }
}

// Load news functions
function loadLatestNews() {
    const latestNewsContainer = document.getElementById('latest-news');
    if (!latestNewsContainer) return;
    latestNewsContainer.innerHTML = '<p>No news available at the moment.</p>';
}

function loadAllNews() {
    const allNewsContainer = document.getElementById('all-news');
    if (!allNewsContainer) return;
    allNewsContainer.innerHTML = '<p>No news available at the moment.</p>';
}

function setupHeaderForPage() {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const pageHeader = document.querySelector('.page-header');
    
    if (heroSection || (pageHeader && window.getComputedStyle(pageHeader).backgroundColor === 'rgb(17, 17, 17)')) {
        header.classList.add('transparent-header');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupHeaderForPage();
    
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    switch(page) {
        case 'index.html':
        case '':
            loadFeaturedProjects();
            loadLatestNews();
            break;
        case 'projects.html':
            loadAllProjects();
            initProjectFilter();
            break;
        case 'project-detail.html':
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('id');
            if (projectId) {
                loadProjectDetail(projectId);
            }
            break;
        case 'news.html':
            loadAllNews();
            break;
    }
});

window.addEventListener('load', function() {
    const latestNewsContainer = document.getElementById('latest-news');
    if (latestNewsContainer && latestNewsContainer.children.length === 0) {
        loadLatestNews();
    }
    
    const allNewsContainer = document.getElementById('all-news');
    if (allNewsContainer && allNewsContainer.children.length === 0) {
        loadAllNews();
    }
});
