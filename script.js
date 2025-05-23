document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.image-carousel');
    const images = document.querySelectorAll('.image-carousel img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Function to update the "active" image based on scroll position
    const updateActiveImage = () => {
        const carouselRect = carousel.getBoundingClientRect();
        let closestImage = null;
        let minDistance = Infinity;

        images.forEach(image => {
            const imageRect = image.getBoundingClientRect();
            // Calculate distance of image center from carousel center
            const distance = Math.abs((imageRect.left + imageRect.right) / 2 - (carouselRect.left + carouselRect.right) / 2);

            if (distance < minDistance) {
                minDistance = distance;
                closestImage = image;
            }
        });

        images.forEach(image => {
            image.classList.remove('active');
        });

        if (closestImage) {
            closestImage.classList.add('active');
        }
    };

    // Initial update when the page loads
    updateActiveImage();

    // Event listener for scrolling
    carousel.addEventListener('scroll', () => {
        // Debounce the scroll event for better performance
        clearTimeout(carousel.scrollTimeout);
        carousel.scrollTimeout = setTimeout(updateActiveImage, 100);
    });

    // Navigation with arrows
    leftArrow.addEventListener('click', () => {
        const scrollAmount = carousel.offsetWidth * 0.7; // Scroll by 70% of carousel width
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        const scrollAmount = carousel.offsetWidth * 0.7; // Scroll by 70% of carousel width
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
// menu
// Get the necessary elements
const openMenuBtn = document.querySelector('nav .fa-solid.fa-bars');
const closeMenuBtn = document.querySelector('nav ul .fa-solid.fa-circle-xmark');
const mobileMenu = document.querySelector('nav ul');

// Add event listener for the menu bars icon to open the menu
openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

// Add event listener for the 'x' icon to close the menu
closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});