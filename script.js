const buttonH = document.getElementById('hoverButton');

buttonH.addEventListener('mouseenter', () => {
    buttonH.textContent = "Hey that tickles!";
});
buttonH.addEventListener('mouseleave', () => {
    buttonH.textContent = "I miss you come back!";
});



const buttonC = document.getElementById('clickButton');

buttonC.addEventListener('mousedown', () => {
    buttonC.textContent = "Ouch that's too hard!";
});
buttonC.addEventListener('mouseup', () => {
    buttonC.textContent = "That's better";
});

const messageK = document.getElementById('keyMessage');

document.addEventListener('keydown', function(event) {
    messageK.textContent = (`you have pressed the: ${event.key} key on your keyboard`);
});