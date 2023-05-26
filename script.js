// JavaScript code
var slideIndex = 0;
var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot');

// Function to show the current slide
function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].className += ' active';
}

// Function to move to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Attach click event listeners to the navigation dots
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    slideIndex = Array.prototype.indexOf.call(dots, this);
    showSlide();
  });
}

// Automatic slideshow
setInterval(nextSlide, 3000);

// Initial slide display
showSlide();
