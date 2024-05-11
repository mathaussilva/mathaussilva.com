function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Data Scientist", "AI Enthusiast", "LLMs", "Automation"];
    let index = 0;
    const carouselText = document.getElementById("carousel-text");

    function updateText() {
        carouselText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(updateText, 2000); // Match the animation duration
});