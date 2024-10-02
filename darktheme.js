const button = document.getElementById('theme-toggle');
const block = document.getElementById('color-block');
const square = document.getElementById('color-square');
let isDarkMode = false;

button.addEventListener('click', function() {
    if (isDarkMode) {
        document.body.style.backgroundColor = 'white';
        button.textContent = 'Темная тема';
        block.style.backgroundColor = 'black';
        block.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
        button.textContent = 'Светлая тема';
        block.style.backgroundColor = 'white';
        block.style.color = 'black';
    }
    isDarkMode = !isDarkMode;
});

const images = document.querySelectorAll('.gallery-image');

images.forEach(image => {
    image.addEventListener('click', function() {
        if (this.classList.contains('enlarged')) {
            this.classList.remove('enlarged');
        } else {
            images.forEach(img => img.classList.remove('enlarged')); 
            this.classList.add('enlarged');
        }
    });
});
