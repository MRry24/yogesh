// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href);
            }
        });
    });
    
    // Initialize animations on scroll
    initScrollAnimations();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize skill progress bars animation
    initSkillsAnimation();
});

// Smooth scrolling function
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Download resume function
function downloadResume() {
    // Create a simple alert for now - you can replace this with actual resume download
    alert('Resume download functionality would be implemented here. Please contact me directly for my resume.');
    
    // Alternative: You could link to a Google Drive file or create a PDF
    // window.open('path/to/your/resume.pdf', '_blank');
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
                showAlert('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!data.privacy) {
                showAlert('Please agree to the privacy policy.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
            // Here you would typically send the data to your server
            // Example: sendContactForm(data);
        });
    }
}

// Simple alert system
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <div style="
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        ">
            ${message}
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none;
                border: none;
                color: white;
                float: right;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: 1rem;
            ">&times;</button>
        </div>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .certification-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Skills progress bar animation
function initSkillsAnimation() {
    const skillsSection = document.querySelector('#skills');
    let skillsAnimated = false;
    
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateProgressBars();
                skillsAnimated = true;
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const percentage = bar.getAttribute('data-percentage');
            if (percentage) {
                // Animate the percentage counter
                const parentItem = bar.closest('.skill-item');
                const percentageElement = parentItem?.querySelector('.skill-percentage');
                
                if (percentageElement) {
                    animatePercentageCounter(percentageElement, parseInt(percentage));
                }
                
                // Animate the progress bar
                bar.style.width = percentage + '%';
            }
        }, index * 150);
    });
}

function animatePercentageCounter(element, targetPercentage) {
    let currentPercentage = 0;
    const duration = 1000;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = targetPercentage / steps;
    
    const counter = setInterval(() => {
        currentPercentage += increment;
        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(counter);
        }
        element.textContent = Math.round(currentPercentage) + '%';
    }, incrementTime);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        navbar.style.backgroundColor = 'rgba(255,255,255,0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        navbar.style.backgroundColor = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Add loading states for buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        const btn = e.target;
        const originalText = btn.textContent;
        
        // Don't add loading state to form submit buttons (handled separately)
        if (btn.type !== 'submit') {
            btn.classList.add('loading');
            btn.textContent = 'Loading...';
            
            setTimeout(() => {
                btn.classList.remove('loading');
                btn.textContent = originalText;
            }, 1000);
        }
    }
});

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Print functionality
function printPage() {
    window.print();
}

// Copy email to clipboard
function copyEmail() {
    const email = 'ryogesh2024@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        showAlert('Email copied to clipboard!', 'success');
    }, function() {
        showAlert('Failed to copy email', 'error');
    });
}

// Social media sharing (if needed)
function shareOnLinkedIn() {
    const url = window.location.href;
    const title = 'Check out Yogesh R\'s Portfolio';
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(linkedInUrl, '_blank');
}

// Analytics event tracking (replace with your analytics service)
function trackEvent(eventName, properties = {}) {
    // Example for Google Analytics
    // gtag('event', eventName, properties);
    
    // Example for other analytics services
    console.log('Event tracked:', eventName, properties);
}

// Track important interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackEvent('button_click', { button_text: e.target.textContent.trim() });
    }
    
    if (e.target.matches('.project-card, .project-card *')) {
        const card = e.target.closest('.project-card');
        if (card) {
            const projectTitle = card.querySelector('h3').textContent;
            trackEvent('project_view', { project: projectTitle });
        }
    }
    
    if (e.target.matches('.social-icon')) {
        trackEvent('social_click', { platform: e.target.title || 'unknown' });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations or effects can be added here
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('main, #home');
        if (mainContent) {
            mainContent.focus();
            e.preventDefault();
        }
    }
    
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }
    }
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed');
        });
    });
}