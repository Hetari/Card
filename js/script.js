window.addEventListener('load', function () {
    const body = document.querySelector('body');
    const card = document.querySelector('.card');
    const footer = document.querySelector('footer');
    // Add 'loaded' class to body and card to trigger the animation
    body.classList.add('loaded');
    card.classList.add('loaded');
    footer.classList.add('loaded');
});

const icons = document.querySelectorAll('ul.icons li a i');
icons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
        this.classList.add('bx-tada');
    });
    /* mouseleave */
    icon.addEventListener('mouseout', function () {
        this.classList.remove('bx-tada');
    });
});
