document.addEventListener("DOMContentLoaded", function() {
    const slideshows = document.querySelectorAll(".slideshow");

    slideshows.forEach(slideshow => {
        let images = slideshow.querySelectorAll("img");
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }, 3000); // Change the interval duration (in milliseconds) as needed
    });
});
