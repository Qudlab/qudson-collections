function buyNow(watchName, price) {
    const phoneNumber = "2348168032686";  
    const message = `Hello, I'm interested in buying the ${watchName} . Is it available?`;
    const whatsappURL = `https://wa.me/2348168032686?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}

function navigateTo(page) {
    window.location.href = page;
}

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.style.display = "none"); // Hide all slides
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to first slide

    slides[slideIndex - 1].style.display = "block"; // Show current slide

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
