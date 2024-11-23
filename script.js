const buttonH = document.getElementById('hoverButton');

buttonH.addEventListener('mouseenter', () => {
    buttonH.textContent = "Hey that tickles!";
});
buttonH.addEventListener('mouseleave', () => {
    buttonH.textContent = "I miss you come back!";
});

const buttonC = document.getElementById('clickButton');

buttonC.addEventListener('mousedown', () => {
    buttonC.textContent = "Ouch that's to hard!";
});
buttonC.addEventListener('mouseup', () => {
    buttonC.textContent = "That's better";
});

