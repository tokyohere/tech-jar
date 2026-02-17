// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 500); // Minimum 500ms show time for branding
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 50,
    });

    // Mouse Follower Animation
    const follower = document.querySelector('.mouse-follower');

    if (follower) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // Using transform for better performance than top/left
            follower.style.left = `${x}px`;
            follower.style.top = `${y}px`;
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.classList.toggle('no-scroll'); // Prevent background scrolling
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchor Links (excluding /# links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header height
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["Software", "Innovation", "The Future", "Top-Tier Talent"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Faster deleting
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Normal typing
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end of word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Next word
                typeSpeed = 500; // Pause before typing new word
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing
        setTimeout(type, 1000);
    }

    // Contact Form Submission (Existing code below)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // Construct Mailto Link
            const recipient = "t3ch.jar@gmail.com";
            const subject = encodeURIComponent(`New Contact Request from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Service: ${service}\n\n` +
                `Message:\n${message}`
            );

            // Open Email Client
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

            // Show success message immediately
            formStatus.innerText = 'Opening your email client...';
            formStatus.style.display = 'block';
            formStatus.style.color = 'green';

            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.style.display = 'none';
            }, 3000);
        });
    }
});
