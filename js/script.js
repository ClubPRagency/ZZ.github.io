// Мобильное меню
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Плавный скролл для якорей (дополнительно к CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // не даём форме перезагружать страницу

    const formData = new FormData(form);
    try {
        const response = await fetch('https://formspree.io/f/xkovkpdb', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert('Спасибо! Мы свяжемся с вами.');
            form.reset();
        } else {
            alert('Ошибка, попробуйте позже.');
        }
    } catch (error) {
        alert('Ошибка сети');
    }
});