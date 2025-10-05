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
            <img src="${project.images[0]}" alt="${project.title}">
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
// Force refresh projects data
function refreshProjectsData() {
    console.log('🔄 Refreshing projects data...');
    
    // Clear module cache (if applicable)
    delete require.cache[require.resolve('./projects-data.js')];
    
    // Reload the projects data
    const script = document.querySelector('script[src*="projects-data.js"]');
    if (script) {
        const newScript = document.createElement('script');
        newScript.src = script.src + '?refresh=' + new Date().getTime();
        document.head.appendChild(newScript);
        
        // Reload the page content after a short delay
        setTimeout(() => {
            if (typeof loadFeaturedProjects === 'function') {
                loadFeaturedProjects();
            }
            if (typeof loadAllProjects === 'function') {
                loadAllProjects();
            }
            if (typeof loadLatestNews === 'function') {
                loadLatestNews();
            }
            console.log('✅ Projects data refreshed!');
        }, 100);
    }
}

// Auto-refresh every 30 seconds (optional)
// setInterval(refreshProjectsData, 30000);
