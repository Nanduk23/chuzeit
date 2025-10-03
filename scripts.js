// filepath: c:\Users\Nandu\Desktop\Projects\HeshaGlobal\main.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('heroCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.nav-indicator');
    let currentSlide = 0;

    function showSlide(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        items[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }, parseInt(carousel.dataset.interval));
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});



// Button redirects
function scrollToTargetHomeSec() {
    const HeaderContainerID = document.getElementById('HeaderContainerID');
    HeaderContainerID.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
}

function scrollToTargetServicesSec() {
    const ServicesSectionID = document.getElementById('ServicesSectionID');
    ServicesSectionID.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
}

function scrollToTargetExperitesSec() {
    const ExpertiesSectionID = document.getElementById('ExpertiesSectionID');
    ExpertiesSectionID.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
}

function scrollToTargetWhyUsSec() {
    const ChooseUSSectionID = document.getElementById('ChooseUSSectionID');
    ChooseUSSectionID.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
}

function scrollToTargetContactSec() {
    const SiteFooterID = document.getElementById('SiteFooterID');
    SiteFooterID.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
}

