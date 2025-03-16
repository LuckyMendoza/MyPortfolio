// Scroll Animation Handler
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    setupAnimationElements();
    
    // Initial check for elements in viewport
    checkAnimations();
    
    // Listen for scroll events
    window.addEventListener('scroll', throttle(checkAnimations, 200));
    
    // Also check on page navigation
    document.querySelectorAll('.icon-box, .mobile-nav-element').forEach(item => {
        item.addEventListener('click', function() {
            // Wait for page transition
            setTimeout(checkAnimations, 800);
        });
    });
});

// Setup animation classes on elements
function setupAnimationElements() {
    // Add fade-in classes to various elements
    
    // Home page elements
    document.querySelectorAll('.home-details h1, .home-details h2').forEach(el => {
        el.classList.add('fade-in', 'fade-in-down');
    });
    
    document.querySelectorAll('.home-details p').forEach(el => {
        el.classList.add('fade-in', 'fade-in-right');
    });
    
    document.querySelectorAll('.home-details .button').forEach(el => {
        el.classList.add('fade-in', 'fade-in-up');
    });
    
    // About page elements only
    document.querySelectorAll('.about .title-section').forEach(el => {
        el.classList.add('fade-in', 'fade-in-down');
    });
    
    document.querySelectorAll('.about-me.content').forEach(el => {
        el.classList.add('fade-in', 'fade-in-left');
    });
    
    document.querySelectorAll('.about .col-12.mt-3').forEach(el => {
        el.classList.add('fade-in', 'fade-in-up');
    });
    
    document.querySelectorAll('.about .box-stats').forEach(el => {
        el.classList.add('fade-in', 'fade-in-zoom');
    });
    
    // Make timeline items staggered
    document.querySelectorAll('.timeline ul').forEach(el => {
        el.classList.add('stagger-children');
    });
    
    // Note: Portfolio, Contact, and Certificate sections are excluded from animations as requested
}

// Check if elements are in viewport and add active class
function checkAnimations() {
    const elements = document.querySelectorAll('.fade-in, .stagger-children');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        // Skip elements in portfolio, contact, and certificate sections
        if (isInExcludedSection(element)) {
            return;
        }
        
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value to change when the animation triggers
        
        if (elementPosition < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            // Optional: remove the active class when element is out of viewport
            // element.classList.remove('active');
        }
    });
    
    // Also check current page
    const currentPage = document.querySelector('.page--current');
    if (currentPage && !isExcludedPage(currentPage.id)) {
        setTimeout(() => {
            const elementsInPage = currentPage.querySelectorAll('.fade-in, .stagger-children');
            elementsInPage.forEach(el => {
                if (!isInExcludedSection(el)) {
                    el.classList.add('active');
                }
            });
        }, 200);
    }
}

// Helper function to check if an element is in an excluded section
function isInExcludedSection(element) {
    // Check if the element is in portfolio, contact, or certificate sections
    const excludedParents = ['portfolio', 'contact', 'blog']; // 'blog' is the certificate section ID
    
    let parent = element;
    while (parent) {
        // Check if the element itself or any parent has one of the excluded IDs
        if (excludedParents.includes(parent.id)) {
            return true;
        }
        
        // Check if the element is inside a section with one of the excluded classes
        if (parent.classList && 
            (parent.classList.contains('portfolio') || 
             parent.classList.contains('contact') || 
             parent.classList.contains('Certificate'))) {
            return true;
        }
        
        parent = parent.parentElement;
    }
    
    return false;
}

// Helper function to check if a page ID is excluded
function isExcludedPage(pageId) {
    return ['portfolio', 'contact', 'blog'].includes(pageId);
}

// Throttle function to limit how often a function can be called
function throttle(callback, limit) {
    let waiting = false;
    return function() {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function() {
                waiting = false;
            }, limit);
        }
    };
}

// Enhance page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation elements
    const navItems = document.querySelectorAll('.icon-box, .mobile-nav-element');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Find current and target pages
            const currentPage = document.querySelector('.page--current');
            
            // Add a small delay to allow for smooth transitions
            if (currentPage && !isExcludedPage(currentPage.id)) {
                // Reset animations on current page elements
                const currentElements = currentPage.querySelectorAll('.fade-in, .stagger-children');
                currentElements.forEach(el => {
                    if (!isInExcludedSection(el)) {
                        el.classList.remove('active');
                    }
                });
            }
        });
    });
}); 