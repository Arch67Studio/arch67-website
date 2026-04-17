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
    
    if (featuredProjects.length === 0) {
        featuredProjectsContainer.innerHTML = '<p>No featured projects available.</p>';
        return;
    }
    
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
    
    if (projects.length === 0) {
        allProjectsContainer.innerHTML = '<p>No projects available.</p>';
        return;
    }
    
    allProjectsContainer.innerHTML = projects.map(project => `
        <div class="project-card" data-type="${project.type}">
            <img src="${project.images[0] || 'assets/images/placeholder.jpg'}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.type ? project.type.charAt(0).toUpperCase() + project.type.slice(1) : 'Project'} | ${project.location || 'Various Locations'}</p>
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
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    console.log('Loading project:', project.title);

    const projectHero = document.getElementById('project-hero');
    const descriptionText = document.getElementById('project-description-text');
    const detailsList = document.getElementById('project-details-list');
    const projectGallery = document.getElementById('project-gallery');

    if (projectHero) {
        const heroImage = project.images[0] && project.images[0] !== "" ? project.images[0] : "https://via.placeholder.com/1200x600?text=No+Image";
        projectHero.innerHTML = `
            <div class="project-hero-image">
                <img src="${heroImage}" alt="${project.title}">
            </div>
            <div class="project-hero-content">
                <h1>${project.title}</h1>
                <p class="location">${project.location || 'Location TBA'}</p>
                <p>${project.type ? project.type.charAt(0).toUpperCase() + project.type.slice(1) : 'Project'}</p>
            </div>
        `;
    }

    if (descriptionText) {
        descriptionText.textContent = project.description || 'No description available.';
    }

    if (detailsList) {
        if (Object.keys(project.details).length > 0) {
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
        } else {
            detailsList.innerHTML = '<p>No additional details available.</p>';
        }
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
    console.log('DOM loaded, initializing...');
    setupHeaderForPage();
    
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    console.log('Current page:', page);
    
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
            console.log('Project ID:', projectId);
            if (projectId) {
                loadProjectDetail(projectId);
            } else {
                console.error('No project ID in URL');
            }
            break;
        case 'news.html':
            loadAllNews();
            break;
        default:
            console.log('Unknown page:', page);
    }
});

window.addEventListener('load', function() {
    console.log('Window fully loaded');
});
