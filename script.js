/* ═══════════════════════════════════════════
   PORTFOLIO — MAIN SCRIPT
   ═══════════════════════════════════════════ */

(function () {
    'use strict';

    // ── ELEMENTS ──
    const root = document.documentElement;
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbar = document.getElementById('navbar');
    const cursorGlow = document.getElementById('cursorGlow');
    const contactForm = document.getElementById('contactForm');

    // ═══════════════════════════════════════
    //  THEME TOGGLE  (Black ↔ White)
    // ═══════════════════════════════════════
    const STORAGE_KEY = 'portfolio-theme';

    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }

    // Initialize
    applyTheme(getPreferredTheme());

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ═══════════════════════════════════════
    //  MOBILE MENU
    // ═══════════════════════════════════════
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            body.style.overflow = '';
        });
    });

    // ═══════════════════════════════════════
    //  NAVBAR SCROLL EFFECT
    // ═══════════════════════════════════════
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 60);
        lastScroll = scrollY;
    }, { passive: true });

    // ═══════════════════════════════════════
    //  CURSOR GLOW (desktop only)
    // ═══════════════════════════════════════
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ═══════════════════════════════════════
    //  SCROLL REVEAL
    // ═══════════════════════════════════════
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ═══════════════════════════════════════
    //  STAT COUNTER ANIMATION
    // ═══════════════════════════════════════
    const statNumbers = document.querySelectorAll('.stat-card__number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const duration = 1500;
        const startTime = performance.now();

        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }
        requestAnimationFrame(update);
    }

    // ═══════════════════════════════════════
    //  SMOOTH NAV LINK ACTIVE STATE
    // ═══════════════════════════════════════
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav__link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => sectionObserver.observe(s));

    // ═══════════════════════════════════════
    //  CONTACT FORM (demo handler)
    // ═══════════════════════════════════════
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const original = btn.innerHTML;
        btn.innerHTML = '<span>Message Sent! &#10003;</span>';
        btn.style.pointerEvents = 'none';
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.pointerEvents = '';
            contactForm.reset();
        }, 2500);
    });

    // ═══════════════════════════════════════
    //  ACTIVE NAV LINK STYLE (add CSS)
    // ═══════════════════════════════════════
    const style = document.createElement('style');
    style.textContent = `
        .nav__link.active { color: var(--text); }
        .nav__link.active::after { width: 100%; }
    `;
    document.head.appendChild(style);

})();
