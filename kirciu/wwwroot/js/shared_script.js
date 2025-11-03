// Изменение цвета шапки при прокрутке
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-top');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});