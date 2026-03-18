

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-tag, .social-link');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add hover effects to skill tags
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.05)';
            tag.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.2)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1)';
            tag.style.boxShadow = 'none';
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 200;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if we're at the bottom of the page
    const isBottom = windowHeight + window.pageYOffset >= documentHeight - 50;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    // If at bottom, set contact as active
    if (isBottom) {
        current = 'contact';
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state and animations
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #1e293b !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style); 

document.addEventListener('DOMContentLoaded', () => {

    // Make interactive cards clickable
    const interactiveCards = document.querySelectorAll('.interactive-card');
    interactiveCards.forEach(card => {
        const url = card.getAttribute('data-url');
        if (url) {
            card.addEventListener('click', () => {
                window.open(url, '_blank');
            });
        }
    });

    // Generic carousel initializer
    function initCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return null;

        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextBtn = carousel.querySelector('.carousel-btn--next');
        const prevBtn = carousel.querySelector('.carousel-btn--prev');
        const indicatorsContainer = carousel.querySelector('.carousel-indicators');

        let currentIndex = 0;
        const totalSlides = slides.length;

        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('carousel-indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });

        const indicators = Array.from(indicatorsContainer.children);

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((ind, i) => ind.classList.toggle('active', i === currentIndex));
        }

        function goToSlide(index) { currentIndex = index; updateCarousel(); }
        function nextSlide() { currentIndex = (currentIndex + 1) % totalSlides; updateCarousel(); }
        function prevSlide() { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateCarousel(); }

        nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });
        prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
        slides.forEach(slide => slide.addEventListener('click', (e) => e.stopPropagation()));
        indicators.forEach(ind => ind.addEventListener('click', (e) => e.stopPropagation()));

        return { slides, totalSlides };
    }

    // Carousel functionality
    initCarousel('culturaAppCarousel');
    initCarousel('mulmaCarousel');

    // Shared modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');

    let modalSlides = [];
    let modalCurrentIndex = 0;

    function openModal(slides, index) {
        modalSlides = slides;
        modalCurrentIndex = index;
        modalImg.src = modalSlides[modalCurrentIndex].src;
        modal.classList.add('open');
    }

    function updateModalImage() {
        modalImg.src = modalSlides[modalCurrentIndex].src;
    }

    // Attach modal open to all carousel images
    ['culturaAppCarousel', 'mulmaCarousel'].forEach(id => {
        const carousel = document.getElementById(id);
        if (!carousel) return;
        const slides = Array.from(carousel.querySelectorAll('.app-screenshot'));
        slides.forEach((img, index) => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(slides, index);
            });
        });
    });

    if (modalNextBtn) {
        modalNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modalCurrentIndex = (modalCurrentIndex + 1) % modalSlides.length;
            updateModalImage();
        });
    }

    if (modalPrevBtn) {
        modalPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modalCurrentIndex = (modalCurrentIndex - 1 + modalSlides.length) % modalSlides.length;
            updateModalImage();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('open')) {
            if (e.key === 'ArrowRight') {
                modalCurrentIndex = (modalCurrentIndex + 1) % modalSlides.length;
                updateModalImage();
            } else if (e.key === 'ArrowLeft') {
                modalCurrentIndex = (modalCurrentIndex - 1 + modalSlides.length) % modalSlides.length;
                updateModalImage();
            } else if (e.key === 'Escape') {
                modal.classList.remove('open');
            }
        }
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => modal.classList.remove('open'));
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) modal.classList.remove('open');
    });

    const emailLink = document.getElementById('email-link');
    const copyMessage = document.getElementById('copy-message');
    if (emailLink) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault();
            const email = 'xico.reasonzx@gmail.com';
            navigator.clipboard.writeText(email).then(function() {
                copyMessage.classList.add('show');
                setTimeout(() => {
                    copyMessage.classList.remove('show');
                }, 1500);
            });
        });
    }
});