/**
 * This script adds a "fade-in on scroll" effect to elements.
 * It uses the Intersection Observer API for efficient detection of elements entering the viewport.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Animation Observer ---
    // This function adds a 'is-visible' class to elements when they enter the viewport.
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is intersecting (i.e., visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Once the animation is triggered, we don't need to observe it anymore
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger the animation when 10% of the element is visible
    });

    // Find all elements that should be animated on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Attach the observer to each animated element
    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });

});