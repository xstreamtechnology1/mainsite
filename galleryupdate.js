document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.fade');
    var currentSlide = 0;
  
    function nextSlide() {
      slides[currentSlide].classList.remove('fade-in');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('fade-in');
    }
  
    slides[currentSlide].classList.add('fade-in');
  
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });
  