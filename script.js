var btn = document.querySelector('.humberger svg');
var nav = document.querySelector('.navbar nav');
btn.addEventListener('click', () => {
    nav.classList.toggle('slide');
})