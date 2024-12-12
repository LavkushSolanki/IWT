let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const indicators = document.querySelectorAll(".carousel-indicators li");

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalItems - 1;
  } else if (index >= totalItems) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Update carousel position
  const newTransformValue = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${newTransformValue}%)`;

  // Update indicators
  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[currentIndex].classList.add("active");
}

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Automatically move to the next slide every 3 seconds
setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);

// Initialize the first slide
showSlide(currentIndex);
