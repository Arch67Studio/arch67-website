// Smooth scrolling implementation like Foster & Partners
class SmoothScroll {
    constructor() {
        this.container = document.documentElement || document.body;
        this.scroll = {
            ease: 0.1,
            current: 0,
            target: 0,
            limit: 0
        };
        
        this.init();
    }
    
    init() {
        this.setLimit();
        this.update();
        this.addEventListeners();
    }
    
    setLimit() {
        this.scroll.limit = this.container.scrollHeight - window.innerHeight;
    }
    
    update() {
        this.scroll.target = window.scrollY;
        this.scroll.current = this.lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
        
        if (Math.abs(this.scroll.target - this.scroll.current) < 0.1) {
            this.scroll.current = this.scroll.target;
        }
        
        this.container.style.transform = `translate3d(0, -${this.scroll.current}px, 0)`;
        requestAnimationFrame(this.update.bind(this));
    }
    
    lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    addEventListeners() {
        window.addEventListener('resize', this.setLimit.bind(this));
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
    
    onScroll() {
        this.scroll.target = window.scrollY;
    }
}

// Initialize smooth scroll
new SmoothScroll();
