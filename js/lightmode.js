const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// default to light mode
body.classList.add('light-mode');
modeToggle.textContent = 'dark🌑';

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        modeToggle.textContent = 'dark🌑';
    } else {
        modeToggle.textContent = 'light☀️';
    }
});