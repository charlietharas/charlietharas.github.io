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

function getSystemThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function setLightMode() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    body.classList.add('light-mode');
    modeToggle.textContent = 'dark🌑';
    setCookie('mode', 'light', 7);
}

function setDarkMode() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    body.classList.remove('light-mode');
    modeToggle.textContent = 'light☀️';
    setCookie('mode', 'dark', 7);
}

function loadNav() {
    fetch('/template/nav.html')
        .then(response => response.text())
        .then(data => {
        document.querySelector('nav').innerHTML = data;

        const body = document.body;
        var mode = getCookie('mode');
        const modeToggle = document.getElementById('mode-toggle');
        
        if (!mode) {
            mode = getSystemThemePreference();
        }
        
        if (mode === 'dark') {
            setDarkMode();
        } else {
            setLightMode();
        }
    
        modeToggle.addEventListener('click', () => {  
            if (body.classList.contains('light-mode')) {
                setDarkMode();
            } else {
                setLightMode();
            }
        });

        body.style.visibility = 'visible';

    });
}

document.addEventListener('DOMContentLoaded', loadNav);
