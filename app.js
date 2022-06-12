const NUMBERBUTTON = document.querySelectorAll('.calculator__keyboard li button');
const BACKSPACEBUTTON = document.querySelector('.key--backspace');
const EQUALBUTTON = document.querySelector('.key--equal');
const PLUSBUTTON = document.querySelector('.key--plus');
const MINUSBUTTON = document.querySelector('.key--minus');
const DOTBUTTON = document.querySelector('.key--dot');
const NEGATIVEBUTTON = document.querySelector('.key--negative');
const MULTIBUTTON = document.querySelector('.key--multi');
const DIVISIONBUTTON = document.querySelector('.key--division');
const PERCENTBUTTON = document.querySelector('.key--percent');
const SQUEREBUTTON = document.querySelector('.key--squere');
const CANCELBUTTON = document.querySelector('.key--cancel');
const CANCELERRORBUTTON = document.querySelector('.key--cancelError');

let addAnimationOne = (event) => {
    event.target.classList.add('clickAnimationOne');
    event.target.addEventListener('animationend', () => {
        event.target.classList.remove('clickAnimationOne')
    })
};

let addAnimationTwo = (event) => {
    event.target.classList.add('clickAnimationTwo');
    event.target.addEventListener('animationend', () => {
        event.target.classList.remove('clickAnimationTwo')
    })
};

let addAnimationThree = (event) => {
    event.target.classList.add('clickAnimationThree');
    event.target.addEventListener('animationend', () => {
        event.target.classList.remove('clickAnimationThree')
    })
};

let addAnimationFour = (event) => { 
    event.target.classList.add('clickAnimationFour');
    event.target.addEventListener('animationend', () => {
        event.target.classList.remove('clickAnimationFour')
    })
};



NUMBERBUTTON.forEach((buttonNumber, index) => {

    const NRBUTTON = () => {
        if (index < 10) {
            let currentNumber = document.querySelector(".key--" + index);
            currentNumber.classList.add('clickAnimationOne');
            currentNumber.addEventListener('animationend', () => {
                currentNumber.classList.remove('clickAnimationOne')
            })
        }
    };

    buttonNumber.addEventListener('click', NRBUTTON)
});


PLUSBUTTON.addEventListener('click', addAnimationOne);
MINUSBUTTON.addEventListener('click', addAnimationOne);
NEGATIVEBUTTON.addEventListener('click', addAnimationOne);
DOTBUTTON.addEventListener('click', addAnimationOne);
BACKSPACEBUTTON.addEventListener('click', addAnimationTwo);
EQUALBUTTON.addEventListener('click', addAnimationThree);
MULTIBUTTON.addEventListener('click', addAnimationFour);
DIVISIONBUTTON.addEventListener('click', addAnimationFour);
SQUEREBUTTON.addEventListener('click', addAnimationFour);
PERCENTBUTTON.addEventListener('click', addAnimationFour);
CANCELBUTTON.addEventListener('click', addAnimationFour);
CANCELERRORBUTTON.addEventListener('click', addAnimationFour);



