document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Pixels to scroll before header changes

    if (header) {
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on load in case page is already scrolled
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            navUl.classList.toggle('nav-active');
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            if (navUl.classList.contains('nav-active')) {
                menuToggle.innerHTML = '×'; // Close icon
                menuToggle.setAttribute('aria-label', 'Close navigation menu');
            } else {
                menuToggle.innerHTML = '☰'; // Hamburger icon
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
            }
        });
    }

    // --- Active Nav Link ---
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split("/").pop() || 'index.html'; // Default to index.html if path is empty

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Footer Current Year ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Simple Contact Form Submission (Front-end only) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all required fields.';
                formStatus.style.color = 'red';
                return;
            }
            
            formStatus.textContent = 'Thank you for your message! (This is a demo)';
            formStatus.style.color = 'var(--green-text)';
            contactForm.reset();
        });
    }

    // --- Scroll Animations (simple fade-in for sections) ---
    const sectionsToAnimate = document.querySelectorAll('.section-padding, .hero-content, .interactive-text'); 
    
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: stop observing once animated
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToAnimate.forEach(section => {
        section.classList.add('fade-in-section'); // Add base class for initial hidden state
        intersectionObserver.observe(section);
    });

});