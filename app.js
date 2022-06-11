const NUMBERBUTTON = document.querySelectorAll('.calculator__keyboard li');
const BACKSPACEBUTTON = document.querySelector('.key-backspace');
const EQUALBUTTON = document.querySelector('.key-equal');

let keyNumber

NUMBERBUTTON.forEach((index, buttonNumber) => {
    
    const NRBUTTON = () => {
    keyNumber = index;
    let currentNumber = document.querySelector("key-" + keyNumber)
    currentNumber.classList.add('clickAnimation1');
    currentNumber.addEventListener('animationend', () => {
        currentNumber.classList.remove('clickAnimation1')
    })};

    NUMBERBUTTON.addEventListener('click', NRBUTTON )
});

BACKSPACEBUTTON.addEventListener('click', () => {

    BACKSPACEBUTTON.classList.add('clickAnimation2');
    BACKSPACEBUTTON.addEventListener('animationend', () => {
        BACKSPACEBUTTON.classList.remove('clickAnimation2')
    })
});

EQUALBUTTON.addEventListener('click', () => {

    EQUALBUTTON.classList.add('clickAnimation3');
    EQUALBUTTON.addEventListener('animationend', () => {
        EQUALBUTTON.classList.remove('clickAnimation3')
    })
});