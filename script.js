document.addEventListener('DOMContentLoaded', () => {
    const easy = document.getElementById('easy');
    const toggleImg = document.getElementById('toggleNavImg');

    if (toggleImg) {
        toggleImg.addEventListener('click', () => {
            console.log('Image cliquée !');
            nav.classList.toggle('active');
        });
    }
});
