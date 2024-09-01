function showTooltip(id, content) {
    const tooltip = document.getElementById(id);
    tooltip.style.display = 'flex';
    tooltip.innerHTML = content;
}

function hideTooltip(id) {
    const tooltip = document.getElementById(id);
    tooltip.style.display = 'none';
}

const buttons = []
function addListener(buttonID, tooltipID, content) {
    const button = document.getElementById(buttonID);
    button.addEventListener('mouseover', () => showTooltip(tooltipID, content));
    button.addEventListener('mouseout', () => hideTooltip(tooltipID));
    buttons.push(button);
}