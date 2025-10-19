 document.addEventListener('DOMContentLoaded', function () {
            const header = document.getElementById('main-header');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            // 1. Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // 2. Mobile menu toggle
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });

            // Close mobile menu when a link is clicked
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });

            // 3. Fade-in animation on scroll
            const sections = document.querySelectorAll('.fade-in-section');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });