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



const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const nameInput = document.getElementById('name');
const displayName = document.getElementById('display-name');

saveButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    saveName();
});
clearButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    clearName();
});



function updateDisplay(){ 
const savedName = localStorage.getItem('nameInput'); 

    const greet = timeGreet();
        if (savedName) {
            nameInput.value = savedName; 
            displayName.textContent = greet + savedName ; 
        } else {
            displayName.textContent = 'All Empty Here!';
        } 
    }
function saveName (){ 
    if (nameInput) {
        localStorage.setItem('nameInput', nameInput.value); 
        updateDisplay();
        }
    }
function clearName(){ 
    localStorage.removeItem('nameInput'); 
    updateDisplay();
    }
function timeGreet() { 
    const time = new Date().getHours();
    if (time >= 5 && time <=10 ) { 
        return 'Submitted, Good Morning! Seize the Day and Make it Amazing,  '; 
    }
    
    else if (time >= 11 && time <= 17 ) { 
        return 'Submitted, Good Afternoon! Keep up the Great Work, '; 
    }
    
    else if (time >= 18 && time <= 22){ 
        return 'Submitted, Good Evening! Time to Unwind and Relax, ';
    }
    
    else {
        return 'Submitted, Hey it is late! You Should be Sleeping and Recharging for Tomorrow! '; 
        }
    }
    
    updateDisplay();



    const inputField = document.getElementById('focusBlur');
    const messageF = document.getElementById('focusMessage');

    function handleFocus() {
        document.getElementById('focusBlur').style.background = 'violet';
        messageF.textContent = "You Found Me!";
    }

    function handleBlur() {
        document.getElementById('focusBlur').style.background = 'purple';
        messageF.textContent = "I'm lost!";
    }



    const messageB = document.getElementById('btnMessage');
    const buttons = document.getElementById('buttons');

    buttons.addEventListener('click', (event) =>{
        if (event.target.tagName === 'BUTTON') {
            alert('You have Selected Level: ' + event.target.textContent);
            messageB.textContent = "You have Passed: " + event.target.textContent;
        }
    });


    