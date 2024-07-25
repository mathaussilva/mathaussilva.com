function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = "Contact Form Submission";

    var link = "mailto:hello@mathaussilva.com"
             + "?cc=" + encodeURIComponent(email)
             + "&subject=" + encodeURIComponent(subject)
             + "&body=" + encodeURIComponent(message);
    
    window.location.href = link;
}


document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Data Scientist", "AI Enthusiast", "Machine Learning", "Data Manager", "Data Analyst", "Growth Analyst"];
    let index = 0;
    const carouselText = document.getElementById("carousel-text");

    function updateText() {
        carouselText.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(updateText, 2000); // Match the animation duration
});