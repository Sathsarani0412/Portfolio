// Fade-In Effect for Banner Text
window.addEventListener('DOMContentLoaded', function() {
    const bannerText = document.querySelector('.banner-text');
    bannerText.style.opacity = 0;
    setTimeout(() => {
        bannerText.style.opacity = 1;
    }, 1000);
});
