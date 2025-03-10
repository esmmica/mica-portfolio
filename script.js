// Smooth scroll for navbar links
document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Typing effect for the "About Me" title
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.section-title .gradient-text');
    const text = title.textContent;
    title.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
}); 
