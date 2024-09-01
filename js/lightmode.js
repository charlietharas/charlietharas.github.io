const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        modeToggle.textContent = 'dark🌑';
    } else {
        modeToggle.textContent = 'light☀️';
    }
});