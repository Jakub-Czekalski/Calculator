const NUMBERBUTTON = document.querySelectorAll('.calculator__keyboard li button');
const BACKSPACEBUTTON = document.querySelector('.key-backspace');
const EQUALBUTTON = document.querySelector('.key-equal');
const PLUSBUTTON = document.querySelector('.key-plus');
const MINUSBUTTON = document.querySelector('.key-minus');
const DOTBUTTON = document.querySelector('.key-dot');
const NEGATIVEBUTTON = document.querySelector('.key-negative');
const MULTIBUTTON = document.querySelector('.key-multi');
const DIVISIONBUTTON = document.querySelector('.key-division');
const PERCENTBUTTON = document.querySelector('.key-percent');
const SQUEREBUTTON = document.querySelector('.key-squere');
const CANCELBUTTON = document.querySelector('.key-clear', );
const CANCELERRORBUTTON = document.querySelector('.key-cancelError');
const CALCULATOR = document.querySelector('.calculator__main');

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

    const NRBUTTON = (event) => {
        if (index < 10) {
            let currentNumber = document.querySelector(".key-" + index);
            currentNumber.classList.add('clickAnimationOne');
            currentNumber.addEventListener('animationend', () => {
                currentNumber.classList.remove('clickAnimationOne')
            })
        }
        CALCULATOR.dataset.lastNumber = index;
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

// Calculator 


const SCREEN = CALCULATOR.querySelector('.claculator__screen');
const KEYS = CALCULATOR.querySelector('.calculator__keyboard');

KEYS.addEventListener('click', (event) => {
    if (!event.target.closest('button')) return;

    const KEY = event.target;
    const KEYVALUE = KEY.textContent;
    const DISPLAYVALUE = SCREEN.textContent;
    const {
        type
    } = KEY.dataset;
    const {
        previusKeyType
    } = CALCULATOR.dataset;
    const {
        key
    } = KEY.dataset;
    const {
        lastNumber
    } = CALCULATOR.dataset;


    // number key

    if (type === 'number') {
        if (DISPLAYVALUE === '0') {
            SCREEN.textContent = KEYVALUE
        } else if (previusKeyType === 'operator') {
            SCREEN.textContent = KEYVALUE
        } else {
            SCREEN.textContent = DISPLAYVALUE + KEYVALUE;
        }
        CALCULATOR.dataset.previusKeyType = type;
    };

    // operator key

    if (type === 'operator') {
        CALCULATOR.dataset.previusKeyType = type;

        CALCULATOR.dataset.firstNumber = DISPLAYVALUE;
        CALCULATOR.dataset.operator = key
    };

    // clear button

    if (type === 'clear') {
        SCREEN.textContent = '0';

        if (SCREEN.textContent === '0') {
            CALCULATOR.dataset.firstNumber = '0';
        }
    };

    // clear error button

    if (type === 'clear-error') {
        SCREEN.textContent = '0';
    }

    // equal solution

    if (type === 'equal') {
        const FIRSTNUMBER = parseInt(CALCULATOR.dataset.firstNumber);
        const OPERATOR = CALCULATOR.dataset.operator;
        const SECONDNUMBER = parseInt(DISPLAYVALUE);

        let result = '';

        if (OPERATOR === 'plus') {
            result = FIRSTNUMBER + SECONDNUMBER
        };
        if (OPERATOR === 'minus') {
            result = FIRSTNUMBER - SECONDNUMBER
        };
        if (OPERATOR === 'multi') {
            result = FIRSTNUMBER * SECONDNUMBER
        };
        if (OPERATOR === 'division') {
            result = FIRSTNUMBER / SECONDNUMBER
        };

        SCREEN.textContent = result;
        CALCULATOR.dataset.previusKeyType = type;
        console.log(FIRSTNUMBER, OPERATOR, SECONDNUMBER)
    };

    // backspace key

    if (type === 'backspace') {
        if (SCREEN.textContent.length > 1) {
            let lastNumber = SCREEN.textContent.slice(0, -1);
            SCREEN.textContent = lastNumber
        } else {
            SCREEN.textContent = 0;
        };

        if (previusKeyType === 'equal') {
            SCREEN.textContent = DISPLAYVALUE
        };
    };

});