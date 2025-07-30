// Main JavaScript for AI Dating Chat Website

// Language Toggle
let currentLanguage = 'zh';

const translations = {
    zh: {
        title: 'AI约会助手 - 智能约会对话助手',
        heroTitle: '让AI帮您<span class="highlight">掌握约会对话技巧</span>',
        heroDescription: 'AI约会助手是您的智能聊天伙伴，帮助您生成完美的约会回复，提升对话质量，让每一次聊天都充满魅力。支持多种回复风格，让您在约会中更加自信。',
        downloadBtn: '立即下载',
        demoBtn: '观看演示',
        navFeatures: '功能特色',
        navHowItWorks: '使用方法',
        navPricing: '价格',
        navContact: '联系我们'
    },
    en: {
        title: 'AI Dating Chat - Smart Dating Conversation Assistant',
        heroTitle: 'Let AI Help You <span class="highlight">Master Dating Conversations</span>',
        heroDescription: 'AI Dating Chat is your intelligent conversation partner, helping you generate perfect dating replies, improve conversation quality, and make every chat charming. Support multiple reply styles to boost your confidence in dating.',
        downloadBtn: 'Download Now',
        demoBtn: 'Watch Demo',
        navFeatures: 'Features',
        navHowItWorks: 'How It Works',
        navPricing: 'Pricing',
        navContact: 'Contact'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    updateContent();
    
    // Update language switch button
    const langSwitch = document.querySelector('.lang-switch');
    langSwitch.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
}

function updateContent() {
    const t = translations[currentLanguage];
    
    // Update document title
    document.title = t.title;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const downloadBtn = document.querySelector('.hero-buttons .btn-primary');
    const demoBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (heroTitle) heroTitle.innerHTML = t.heroTitle;
    if (heroDescription) heroDescription.textContent = t.heroDescription;
    if (downloadBtn) downloadBtn.textContent = t.downloadBtn;
    if (demoBtn) demoBtn.textContent = t.demoBtn;
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = [t.navFeatures, t.navHowItWorks, t.navPricing, t.navContact];
    navLinks.forEach((link, index) => {
        if (index < navTexts.length && !link.classList.contains('lang-switch')) {
            link.textContent = navTexts[index];
        }
    });
}

// Mobile Navigation Toggle
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.feature-card, .step, .pricing-card, .screenshot');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Pricing card interactions
function initPricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            pricingCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            pricingCards.forEach(otherCard => {
                otherCard.style.opacity = '1';
            });
        });
    });
}

// Form validation and submission
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = currentLanguage === 'zh' ? '提交中...' : 'Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert(currentLanguage === 'zh' ? '提交成功！我们会尽快与您联系。' : 'Submitted successfully! We will contact you soon.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                form.reset();
            }, 2000);
        });
    });
}

// Statistics counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                
                if (numericValue > 0) {
                    animateCounter(target, 0, numericValue, finalValue);
                }
                
                observer.unobserve(target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, suffix) {
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString() + suffix.replace(/[\d,]/g, '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Screenshot gallery lightbox
function initScreenshotGallery() {
    const screenshots = document.querySelectorAll('.screenshot');
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            createLightbox(screenshot.src, screenshot.alt);
        });
    });
}

function createLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}">
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Close lightbox
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            document.body.removeChild(lightbox);
        }
    });
}

// Error handling
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // You could send this to an error reporting service
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // You could send this to an error reporting service
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    window.addEventListener('load', () => {
        // Measure page load time
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
        
        // Measure Time to First Contentful Paint
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name === 'first-contentful-paint') {
                        console.log(`First Contentful Paint: ${entry.startTime}ms`);
                    }
                }
            });
            
            observer.observe({ entryTypes: ['paint'] });
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScroll();
    initPricingCards();
    initForms();
    initStatsCounter();
    initScreenshotGallery();
    initErrorHandling();
    initPerformanceMonitoring();
    
    // Add CSS for mobile navigation and lightbox
    const additionalCSS = `
        .nav-menu.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            transition: transform 0.3s ease, background 0.3s ease;
        }
        
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 8px;
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
});

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for external use
window.AIDatingChat = {
    toggleLanguage,
    updateContent,
    createLightbox
};