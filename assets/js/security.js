// ============================================
// SECURITY.JS - Standalone Security File
// ============================================
// This file works independently and won't affect main.js
// ============================================

(function() {
    'use strict';
    
    // Check if we're on localhost (for development)
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '';
    
    // ============================================
    // 1. DISABLE RIGHT CLICK
    // ============================================
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // ============================================
    // 2. DISABLE IMAGE DRAGGING
    // ============================================
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.closest('img')) {
            e.preventDefault();
            return false;
        }
    });
    
    // ============================================
    // 3. DISABLE IMAGE SAVING (Keyboard shortcuts)
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+S (Save)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            alert('Saving is disabled on this site');
            return false;
        }
        
        // Disable Ctrl+P (Print)
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            alert('Printing is disabled on this site');
            return false;
        }
    });
    
    // ============================================
    // 4. PROTECT IMAGES WITH OVERLAY
    // ============================================
    function protectImages() {
        document.querySelectorAll('img').forEach(img => {
            // Skip if already protected
            if (img.parentElement && img.parentElement.classList.contains('img-protected')) {
                return;
            }
            
            // Only protect images that are not already in a protected wrapper
            if (!img.closest('.img-protected')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'img-protected';
                wrapper.style.position = 'relative';
                wrapper.style.display = 'inline-block';
                wrapper.style.lineHeight = '0';
                
                // Insert wrapper before image
                img.parentNode.insertBefore(wrapper, img);
                wrapper.appendChild(img);
                
                // Create transparent overlay
                const overlay = document.createElement('div');
                overlay.style.position = 'absolute';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'transparent';
                overlay.style.zIndex = '10';
                overlay.style.cursor = 'default';
                wrapper.appendChild(overlay);
            }
        });
    }
    
    // Run image protection when DOM loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', protectImages);
    } else {
        protectImages();
    }
    
    // Also protect dynamically added images
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                protectImages();
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // ============================================
    // 5. HIDE .html EXTENSION (Visual only)
    // ============================================
    if (window.location.pathname.endsWith('.html')) {
        const newUrl = window.location.pathname.slice(0, -5) + window.location.search + window.location.hash;
        window.history.replaceState({}, document.title, newUrl);
    }
    
    // ============================================
    // 6. PREVENT TEXT SELECTION (Optional)
    // ============================================
    // Uncomment the line below if you want to disable text selection
    // document.addEventListener('selectstart', function(e) { e.preventDefault(); return false; });
    
    // ============================================
    // 7. PREVENT IFRAME EMBEDDING (Clickjacking protection)
    // ============================================
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
    
    // ============================================
    // 8. BASIC DEV TOOLS DETECTION (Lightweight)
    // ============================================
    if (!isLocalhost) {
        // Detect when dev tools opens
        let devToolsOpen = false;
        const element = new Image();
        
        Object.defineProperty(element, 'id', {
            get: function() {
                devToolsOpen = true;
                console.log('Developer tools detected');
                return '';
            }
        });
        
        setInterval(() => {
            devToolsOpen = false;
            console.log(element);
            console.clear();
            
            if (devToolsOpen) {
                // Optional: Redirect or show warning
                // alert('Developer tools detected!');
            }
        }, 1000);
    }
    
    // ============================================
    // 9. DISABLE COPYING (Light protection)
    // ============================================
    document.addEventListener('copy', function(e) {
        // Allow copying of text but show warning
        if (window.getSelection().toString().trim().length > 0) {
            // Uncomment to show warning
            // console.log('Copying is monitored on this site');
        }
    });
    
    console.log('Security.js loaded - Site protected');
    
})();
