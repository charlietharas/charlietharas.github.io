function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// default to light mode
body.classList.add('light-mode');
modeToggle.textContent = 'dark🌑';

document.addEventListener('DOMContentLoaded', () => {
    const mode = getCookie('mode');
    if (mode === 'light') {
        body.classList.add('light-mode');
        modeToggle.textContent = 'dark🌑';
    } else {
        body.classList.remove('light-mode');
        modeToggle.textContent = 'light☀️';
    }
});

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        modeToggle.textContent = 'dark🌑';
        setCookie('mode', 'light', 7); // Store 'light' mode for 7 days
    } else {
        modeToggle.textContent = 'light☀️';
        setCookie('mode', 'dark', 7); // Store 'dark' mode for 7 days
    }
});