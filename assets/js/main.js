const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const currentYear = document.querySelector('#currentYear');

    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    const setMenuOpen = (open) => {
        if (!navToggle || !navMenu) return;
        navToggle.classList.toggle('active', open);
        navMenu.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', String(open));
    };

    if (navToggle && navMenu) {
        navToggle.setAttribute('role', 'button');
        navToggle.setAttribute('tabindex', '0');
        navToggle.setAttribute('aria-label', 'Toggle navigation');
        navToggle.setAttribute('aria-expanded', 'false');

        navToggle.addEventListener('click', () => {
            setMenuOpen(!navMenu.classList.contains('active'));
        });

        navToggle.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setMenuOpen(!navMenu.classList.contains('active'));
            }
        });

        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                setMenuOpen(false);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            setMenuOpen(false);
            const offset = (header?.offsetHeight || 0) + 20;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: targetTop,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
        const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
        rel.add('noopener');
        rel.add('noreferrer');
        link.setAttribute('rel', Array.from(rel).join(' '));
    });

    if (header) {
        const updateHeader = () => {
            header.classList.toggle('scrolled', window.scrollY > 64);
        };
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.14, rootMargin: '0px 0px -48px 0px' });

        document.querySelectorAll('.feature-card, .step, .screenshot').forEach((element) => {
            element.classList.add('reveal');
            observer.observe(element);
        });
    }
});
