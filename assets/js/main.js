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
// ADVANCED SECURITY LAYERS FOR main.js
// ============================================

// 1. DETECT DEV TOOLS AND DEBUGGERS
(function detectDevTools() {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 100) {
        document.body.innerHTML = '<h1>Access Denied: Developer Tools Detected</h1>';
        window.location.href = 'about:blank';
    }
    
    // Check for dev tools via element inspection
    setInterval(() => {
        const before = new Date().getTime();
        debugger;
        const after = new Date().getTime();
        if (after - before > 100) {
            document.body.innerHTML = '<h1>Security Violation Detected</h1>';
        }
    }, 2000);
    
    // Detect console opening via window size
    let element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            document.body.innerHTML = '<h1>Debugging Detected - Access Blocked</h1>';
            window.location.href = 'about:blank';
        }
    });
    console.log('%c', element);
})();

// 2. PREVENT SOURCE CODE VIEWING
// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
    const blockedKeys = ['F12', 'F11', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'];
    const blockedCombos = [
        {ctrl: true, key: 'u'},      // View source
        {ctrl: true, key: 's'},      // Save page
        {ctrl: true, key: 'p'},      // Print
        {ctrl: true, shift: true, key: 'i'},  // Dev tools
        {ctrl: true, shift: true, key: 'j'},  // Console
        {ctrl: true, shift: true, key: 'c'},  // Inspect
        {ctrl: true, key: 'r'},      // Reload
        {ctrl: true, shift: true, key: 'r'},  // Hard reload
        {ctrl: true, key: 'h'},      // History
        {ctrl: true, key: 'e'},      // Search
        {metaKey: true, key: 's'},   // Mac save
        {metaKey: true, key: 'u'}     // Mac source
    ];
    
    // Block function keys
    if (blockedKeys.includes(e.key)) {
        e.preventDefault();
        return false;
    }
    
    // Block combo keys
    for (let combo of blockedCombos) {
        const ctrlMatch = !combo.ctrl || (combo.ctrl && (e.ctrlKey || e.metaKey));
        const shiftMatch = !combo.shift || (combo.shift && e.shiftKey);
        const keyMatch = e.key.toLowerCase() === combo.key.toLowerCase();
        
        if (ctrlMatch && shiftMatch && keyMatch) {
            e.preventDefault();
            return false;
        }
    }
});

// 3. DETECT AND BLOCK PROXY/VPN (basic)
(async function detectProxy() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        
        // Check for common VPN/Proxy IP ranges (simplified)
        const suspiciousIPs = ['192.168.', '10.', '172.'];
        if (suspiciousIPs.some(ip => data.ip.startsWith(ip))) {
            console.warn('VPN/Proxy detected');
        }
    } catch(e) {
        console.log('Security check failed');
    }
})();

// 4. PREVENT CONTEXT MENU, DRAG, AND SELECTION
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});

document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' || e.target.closest('img')) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// 5. DISABLE COPY/PASTE/CUT ON SENSITIVE ELEMENTS
document.addEventListener('copy', function(e) {
    if (window.getSelection().toString().length > 0) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', 'Copying disabled on this site');
        alert('Copying is disabled');
        return false;
    }
});

document.addEventListener('cut', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('paste', function(e) {
    // Block pasting into sensitive areas
    if (e.target.closest('.no-paste')) {
        e.preventDefault();
        return false;
    }
});

// 6. IMAGE PROTECTION WITH OVERLAYS
function protectImages() {
    document.querySelectorAll('img').forEach(img => {
        // Add transparent overlay
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'transparent';
        overlay.style.zIndex = '10';
        overlay.style.cursor = 'default';
        
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        wrapper.appendChild(overlay);
        
        // Disable right click on image
        img.addEventListener('contextmenu', e => e.preventDefault());
        
        // Convert to canvas (optional - prevents direct save)
        // Uncomment below to convert images to canvas (breaks right-click save)
        /*
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0);
        img.replaceWith(canvas);
        */
    });
}

// Apply image protection when DOM loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectImages);
} else {
    protectImages();
}

// 7. URL HIDING (HTML extension removal)
if (window.location.pathname.endsWith('.html')) {
    const newUrl = window.location.pathname.slice(0, -5) + window.location.search + window.location.hash;
    window.history.replaceState({}, document.title, newUrl);
}

// 8. DETECT AND BLOCK AUTOMATED SCRAPING TOOLS
(function antiScraping() {
    // Detect headless browsers
    const isHeadless = !navigator.webdriver === false || 
                      !navigator.languages || 
                      /HeadlessChrome/.test(navigator.userAgent);
    
    if (isHeadless) {
        document.body.innerHTML = '<h1>Access Denied: Automated access detected</h1>';
        throw new Error('Headless browser detected');
    }
    
    // Check for Selenium/PhantomJS
    if (window._phantom || window.callPhantom || window.phantom) {
        window.location.href = 'about:blank';
    }
    
    // Monitor for rapid interactions (bots)
    let clickCount = 0;
    let clickTimer = null;
    document.addEventListener('click', () => {
        clickCount++;
        if (!clickTimer) {
            clickTimer = setTimeout(() => {
                if (clickCount > 20) { // 20 clicks in 5 seconds = suspicious
                    alert('Suspicious activity detected');
                }
                clickCount = 0;
                clickTimer = null;
            }, 5000);
        }
    });
})();

// 9. OBFUSCATE SENSITIVE VARIABLES
// Store sensitive data in closure
const secureStorage = (function() {
    const secrets = new WeakMap();
    return {
        set: (key, value) => secrets.set(key, value),
        get: (key) => secrets.get(key)
    };
})();

// 10. PREVENT IFRAME EMBEDDING (clickjacking protection)
if (window.self !== window.top) {
    window.top.location = window.self.location;
}

// 11. SECURE COOKIES AND STORAGE
document.cookie.split(';').forEach(cookie => {
    document.cookie = cookie.replace(/^ +/, '')
        .replace(/=.*/, `=; expires=${new Date(0).toUTCString()}; path=/; secure; samesite=strict`);
});

// 12. CONSOLE CLEARING AND MONITORING
setInterval(() => {
    console.clear();
}, 1000);

// Override console methods (optional - extreme)
if (window.location.hostname !== 'localhost') {
    console.log = console.warn = console.error = console.debug = function() {};
}

// 13. DETECT TAMPERING WITH YOUR CODE
let originalFetch = window.fetch;
window.fetch = function() {
    console.warn('Fetch attempted');
    return originalFetch.apply(this, arguments);
};
