const button = document.getElementById('clickButton');

button.addEventListener('mouseenter', () => {
    button.textContent = "Hey that tickles!";
});

button.addEventListener('mouseleave', () => {
    button.textContent = "I miss you come back!";
});