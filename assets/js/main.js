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

// Load all projects on projects page
function loadAllProjects() {
    const allProjectsContainer = document.getElementById('all-projects');
    if (!allProjectsContainer) return;
    
    if (projects.length === 0) {
        allProjectsContainer.innerHTML = '<p>No projects available.</p>';
        return;
    }
    
    allProjectsContainer.innerHTML = projects.map(project => {
        const firstImage = project.images && project.images[0] ? project.images[0] : 'https://via.placeholder.com/400x300?text=No+Image';
        return `
            <div class="project-card" data-type="${project.type}">
                <img src="${firstImage}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.type ? project.type.charAt(0).toUpperCase() + project.type.slice(1) : 'Project'} | ${project.location || 'Various Locations'}</p>
                </div>
            </div>
        `;
    }).join('');

    const projectCards = allProjectsContainer.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            window.location.href = `project-detail.html?id=${projects[index].id}`;
        });
    });
}

// Load featured projects on homepage
function loadFeaturedProjects() {
    const featuredContainer = document.getElementById('featured-projects');
    if (!featuredContainer) return;
    
    // Filter projects where featured === true
    const featuredProjects = projects.filter(project => project.featured === true);
    
    if (featuredProjects.length === 0) {
        featuredContainer.innerHTML = '<p style="text-align:center; color:#666;">No featured projects available.</p>';
        return;
    }
    
    featuredContainer.innerHTML = featuredProjects.map(project => {
        const firstImage = project.images && project.images[0] ? project.images[0] : 'https://via.placeholder.com/400x300?text=No+Image';
        return `
            <div class="project-card" data-type="${project.type}" data-id="${project.id}">
                <img src="${firstImage}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.type ? project.type.charAt(0).toUpperCase() + project.type.slice(1) : 'Project'} | ${project.location || 'Various Locations'}</p>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click event to each featured project card
    const projectCards = featuredContainer.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            window.location.href = `project-detail.html?id=${projectId}`;
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

    const projectHero = document.getElementById('project-hero');
    const descriptionText = document.getElementById('project-description-text');
    const detailsList = document.getElementById('project-details-list');
    const projectGallery = document.getElementById('project-gallery');

    if (projectHero) {
        const heroImage = project.images && project.images[0] ? project.images[0] : 'https://via.placeholder.com/1200x600?text=No+Image';
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

    if (detailsList && project.details) {
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

    if (projectGallery && project.images) {
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
    
    // Initialize technical carousel
    initTechnicalCarousel(project);
}

// Technical Work Carousel
function initTechnicalCarousel(project) {
    const carouselSection = document.getElementById('technicalCarouselSection');
    const track = document.getElementById('technicalCarouselTrack');
    const prevBtn = document.getElementById('technicalPrevBtn');
    const nextBtn = document.getElementById('technicalNextBtn');
    const dotsContainer = document.getElementById('technicalCarouselDots');
    
    if (!carouselSection || !track) return;
    
    const hasTechnicalImages = project && project.technicalImages && project.technicalImages.length > 0;
    
    if (!hasTechnicalImages) {
        carouselSection.style.display = 'none';
        return;
    }
    
    carouselSection.style.display = 'block';
    
    const technicalImages = project.technicalImages;
    let currentIndex = 0;
    let autoPlayInterval = null;
    
    // Clear and build carousel
    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    technicalImages.forEach((imgSrc, index) => {
        const slide = document.createElement('div');
        slide.className = 'fp-carousel-slide';
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Technical Work ${index + 1}`;
        img.style.width = '100%';
        img.style.display = 'block';
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found';
        };
        slide.appendChild(img);
        track.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.className = 'fp-carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
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
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % technicalImages.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + technicalImages.length) % technicalImages.length;
        updateCarousel();
    }
    
    function startAutoPlay() {
        if (technicalImages.length <= 1) return;
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }
    
    // Remove old event listeners and add new ones
    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    if (prevBtn.parentNode) {
        prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
        newPrevBtn.addEventListener('click', prevSlide);
    }
    if (nextBtn.parentNode) {
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', nextSlide);
    }
    
    if (technicalImages.length <= 1) {
        if (newPrevBtn) newPrevBtn.style.display = 'none';
        if (newNextBtn) newNextBtn.style.display = 'none';
        if (dotsContainer) dotsContainer.style.display = 'none';
    }
    
    // Add carousel styles
    const style = document.createElement('style');
    style.textContent = `
        .fp-carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        .fp-carousel-slide {
            flex: 0 0 100%;
        }
        .fp-carousel-container {
            overflow: hidden;
        }
        .fp-carousel-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ccc;
            cursor: pointer;
            display: inline-block;
            margin: 0 5px;
        }
        .fp-carousel-dot.active {
            background: #333;
            width: 24px;
            border-radius: 4px;
        }
        .fp-carousel-dots {
            text-align: center;
            margin-top: 20px;
        }
    `;
    document.head.appendChild(style);
    
    updateCarousel();
    
    const carousel = document.querySelector('.fp-carousel');
    if (carousel && technicalImages.length > 1) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();
    }
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (page === 'projects.html') {
        loadAllProjects();
        initProjectFilter();
    } else if (page === 'project-detail.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        if (projectId) {
            loadProjectDetail(parseInt(projectId));
        }
    } else if (page === '' || page === 'index.html') {
        // Load featured projects on homepage
        loadFeaturedProjects();
    }
});
// ============================================
// WORKING SECURITY CODE (Without breaking features)
// ============================================

// 1. PREVENT CONTEXT MENU (Right Click)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// 2. PREVENT DRAGGING IMAGES
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
        return false;
    }
});

// 3. PREVENT TEXT SELECTION (Optional - remove if you want users to copy text)
document.addEventListener('selectstart', function(e) {
    // Only prevent on images, allow text selection
    if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
    }
});

// 4. IMAGE PROTECTION - Add watermark or overlay
function protectImages() {
    document.querySelectorAll('img').forEach(img => {
        // Disable right click on images specifically
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
        
        // Optional: Add a semi-transparent overlay
        if (img.parentElement && !img.parentElement.classList.contains('image-protected')) {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            wrapper.style.display = 'inline-block';
            wrapper.classList.add('image-protected');
            
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            
            // Add subtle watermark text (optional)
            const watermark = document.createElement('div');
            watermark.textContent = '© Asad Nadkar';
            watermark.style.position = 'absolute';
            watermark.style.bottom = '10px';
            watermark.style.right = '10px';
            watermark.style.color = 'rgba(255,255,255,0.5)';
            watermark.style.fontSize = '12px';
            watermark.style.pointerEvents = 'none';
            watermark.style.zIndex = '11';
            wrapper.appendChild(watermark);
        }
    });
}

// Apply image protection after page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectImages);
} else {
    protectImages();
}

// 5. HIDE .html EXTENSION (Doesn't break anything)
if (window.location.pathname.endsWith('.html')) {
    const newUrl = window.location.pathname.slice(0, -5) + window.location.search + window.location.hash;
    window.history.replaceState({}, document.title, newUrl);
}

// 6. BASIC KEYBOARD SHORTCUT PROTECTION (Only essential)
document.addEventListener('keydown', function(e) {
    // Only block critical shortcuts
    const criticalCombos = [
        {ctrl: true, shift: true, key: 'i'},  // Dev tools
        {ctrl: true, shift: true, key: 'j'},  // Console
        {ctrl: true, key: 'u'}                 // View source
    ];
    
    for (let combo of criticalCombos) {
        const ctrlMatch = !combo.ctrl || (combo.ctrl && (e.ctrlKey || e.metaKey));
        const shiftMatch = !combo.shift || (combo.shift && e.shiftKey);
        const keyMatch = e.key.toLowerCase() === combo.key.toLowerCase();
        
        if (ctrlMatch && shiftMatch && keyMatch) {
            e.preventDefault();
            return false;
        }
    }
    
    // Block F12 separately
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
});

// 7. PREVENT IFRAME EMBEDDING
if (window.self !== window.top) {
    window.top.location = window.self.location;
}

// ============================================
// IMPORTANT: REMOVED PROBLEMATIC CODE
// ============================================
// - REMOVED: console.clear() interval (hides errors)
// - REMOVED: console.log override (breaks debugging)
// - REMOVED: aggressive dev tools detection (breaks functionality)
// - REMOVED: fetch override (breaks image loading)
// - REMOVED: cookie clearing (breaks sessions)
// - REMOVED: VPN detection (unnecessary and slow)
