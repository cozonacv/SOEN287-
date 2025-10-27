// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    // Header scroll effect
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Set minimum date for booking
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
        
        // Update summary when date changes
        dateInput.addEventListener('change', function() {
            const summaryDate = document.getElementById('summaryDate');
            if (summaryDate) {
                summaryDate.textContent = this.value || 'Select a date';
            }
        });
    }
    
    // Update summary when time slot changes
    const timeSlot = document.getElementById('timeSlot');
    if (timeSlot) {
        timeSlot.addEventListener('change', function() {
            const summaryTime = document.getElementById('summaryTime');
            if (summaryTime) {
                summaryTime.textContent = this.value || 'Select a time slot';
            }
        });
    }
});
