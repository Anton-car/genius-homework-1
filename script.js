const mobileMenu = document.getElementById('mobileMenu');
const burgerBtn = document.querySelector('.burger-btn'); // переконайся, що клас вірний
const closeMenuBtn = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('.mobile-menu-nav a');

// Відкрити меню
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // блокуємо скрол сайту
});

// Закрити меню
const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = 'auto'; // повертаємо скрол
};

closeMenuBtn.addEventListener('click', closeMenu);

// Закриваємо меню при кліку на посилання (щоб перейти до секції)
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


// Синхронізація крапок з прокруткою карток процедур

const container = document.querySelector('.procedures-cards-container');
const dots = document.querySelectorAll('.dot');

container.addEventListener('scroll', () => {
    // Визначаємо ширину однієї картки (разом з gap)
    const cardWidth = container.offsetWidth; 
    // Обчислюємо індекс поточної картки
    const scrollLeft = container.scrollLeft;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    // Оновлюємо класи для крапок
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});

// Додатково: клік по крапці для прокрутки до слайда
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const cardWidth = container.offsetWidth;
        container.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    });
});