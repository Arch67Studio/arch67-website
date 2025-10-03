    // Search Functionality
    setupSearch() {
        const searchBtn = document.getElementById('search-btn');
        const mobileSearchBtn = document.getElementById('mobile-search-btn');
        const searchOverlay = document.getElementById('search-overlay');
        const searchClose = document.getElementById('search-close');
        const searchInput = document.getElementById('search-input');

        // Initialize search overlay as hidden
        if (searchOverlay) {
            searchOverlay.classList.remove('active');
        }

        // Desktop search button
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (searchOverlay) {
                    searchOverlay.classList.add('active');
                    if (searchInput) {
                        searchInput.focus();
                        searchInput.value = '';
                    }
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        // Mobile search button
        if (mobileSearchBtn) {
            mobileSearchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Close mobile menu first
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
                // Open search
                if (searchOverlay) {
                    searchOverlay.classList.add('active');
                    if (searchInput) {
                        searchInput.focus();
                        searchInput.value = '';
                    }
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        // Close search
        if (searchClose) {
            searchClose.addEventListener('click', () => {
                if (searchOverlay) {
                    searchOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
                if (searchInput) searchInput.value = '';
            });
        }

        // Close search on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (searchOverlay && searchOverlay.classList.contains('active')) {
                    searchOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    if (searchInput) searchInput.value = '';
                }
                
                // Also close mobile menu
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        // Close search when clicking outside
        if (searchOverlay) {
            searchOverlay.addEventListener('click', (e) => {
                if (e.target === searchOverlay) {
                    searchOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    if (searchInput) searchInput.value = '';
                }
            });
        }

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
