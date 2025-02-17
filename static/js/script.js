const buttons = document.querySelectorAll('.navigation-option');
console.log(buttons);
for (const button of buttons) {
    button.addEventListener('click', () => {
        window.location.href = button.getAttribute('href') || '/';
    });
}
