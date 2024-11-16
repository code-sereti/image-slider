const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const totalImages = images.length;

// Function to update the carousel position
function updateCarousel() {
  const offset = -currentIndex * 600; // Image width
  carouselImages.style.transform = `translateX(${offset}px)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

// Previous button functionality
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

// Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}, 3000); // Change image every 3 seconds
