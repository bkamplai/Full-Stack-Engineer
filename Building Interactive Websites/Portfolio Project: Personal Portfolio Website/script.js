// Add a lightbox feature for project images
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', event => {
        const image = event.target.closest('img'); // Check if the click is on an image

        if (image) {
            event.preventDefault(); // Prevent navigation
            event.stopPropagation(); // Stop event bubbling

            // Create lightbox container
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);

            // Add the clicked image to the lightbox
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            lightbox.appendChild(img);

            // Remove the lightbox on click
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        }
    });
});

// Light vs Dark Theme based on time
const applyTheme = () => {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 18) {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }
};

applyTheme();

// Update theme every hour
setInterval(applyTheme, 3600000);

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img.lazy');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // console.log('Loading image:', img.dataset.src);
                img.src = img.dataset.src; // Load the real image
                img.onload = () => img.classList.remove('lazy'); // Remove lazy class on load
                observer.unobserve(img); // Stop observing this image
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Load when 10% of the image is visible
    });

    lazyImages.forEach(img => observer.observe(img));

});

