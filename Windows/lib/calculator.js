'use strict';

window.calculator = window.calculator || {};

let currentDisplay = '';
let currentValue = '';
let previousValue = '';
let currentOperation = null;
let shouldResetDisplay = false;
let memoryValue = 0;  


let display = null;


function reset() {
    memoryValue = 0;
    currentDisplay = '0'; 
    currentValue = '';
    previousValue = '';
    currentOperation = null;
    shouldResetDisplay = false;
    if (display) {
        display.innerText = '0';
    }
}

function updateDisplay() {
    display.innerText = currentDisplay || '0';
}

function appendNumber(number) {
    if (currentDisplay === '0' || shouldResetDisplay) {
        currentDisplay = '';
        shouldResetDisplay = false;
    }
    currentDisplay += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentDisplay === '') return;
    
    if (currentOperation !== null) calculate();
    
    currentOperation = operation;
    previousValue = currentDisplay;
    currentDisplay = '';
    updateDisplay();
}

function calculate() {
    if (currentOperation === null || shouldResetDisplay) return;
    if (currentDisplay === '') currentDisplay = previousValue;
    
    let computation;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentDisplay);
    
    if (isNaN(prev)) return;
    
    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case 'x':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentDisplay = computation.toString();
    currentOperation = null;
    shouldResetDisplay = true;
    updateDisplay();
}

function clearAll() {
    currentDisplay = '0';  
    previousValue = '';
    currentOperation = null;
    updateDisplay();
}

function addDecimal() {
    if (shouldResetDisplay) {
        currentDisplay = '0';
        shouldResetDisplay = false;
    }
    if (currentDisplay.includes('.')) return;
    if (currentDisplay === '') currentDisplay = '0';
    currentDisplay += '.';
    updateDisplay();
}

function percentage() {
    if (currentDisplay === '') return;
    const value = parseFloat(currentDisplay);
    currentDisplay = (value / 100).toString();
    updateDisplay();
}

function squareRoot() {
    if (currentDisplay === '') return;
    const value = parseFloat(currentDisplay);
    currentDisplay = Math.sqrt(value).toString();
    updateDisplay();
}

function changeSign() {
    if (currentDisplay === '') return;
    const value = parseFloat(currentDisplay);
    currentDisplay = (-value).toString();
    updateDisplay();
}


function memoryRecall() {
    currentDisplay = memoryValue.toString();
    shouldResetDisplay = true; 
    updateDisplay();
}

function memoryPlus() {
    if (currentDisplay === '') return;
    const value = parseFloat(currentDisplay) || 0; 
    memoryValue += value;
    shouldResetDisplay = true; 
}

function memoryMinus() {
    if (currentDisplay === '') return;
    const value = parseFloat(currentDisplay) || 0;  
    memoryValue -= value;
    shouldResetDisplay = true; 
}
function initCalculator() {
	reset();
	display = document.getElementById('result');




    document.getElementById('zero')?.addEventListener('click', () => appendNumber('0'));
    document.getElementById('one')?.addEventListener('click', () => appendNumber('1'));
    document.getElementById('two')?.addEventListener('click', () => appendNumber('2'));
    document.getElementById('three')?.addEventListener('click', () => appendNumber('3'));
    document.getElementById('four')?.addEventListener('click', () => appendNumber('4'));
    document.getElementById('five')?.addEventListener('click', () => appendNumber('5'));
    document.getElementById('six')?.addEventListener('click', () => appendNumber('6'));
    document.getElementById('seven')?.addEventListener('click', () => appendNumber('7'));
    document.getElementById('eight')?.addEventListener('click', () => appendNumber('8'));
    document.getElementById('nine')?.addEventListener('click', () => appendNumber('9'));
    document.getElementById('decimalPoint')?.addEventListener('click', addDecimal);

    document.getElementById('plus')?.addEventListener('click', () => setOperation('+'));
    document.getElementById('minus')?.addEventListener('click', () => setOperation('-'));
    document.getElementById('multiply')?.addEventListener('click', () => setOperation('x'));
    document.getElementById('division')?.addEventListener('click', () => setOperation('÷'));

    document.getElementById('equal')?.addEventListener('click', calculate);
    document.getElementById('onoffclear')?.addEventListener('click', clearAll);
    document.getElementById('percent')?.addEventListener('click', percentage);
    document.getElementById('squareRoot')?.addEventListener('click', squareRoot);
    document.getElementById('changeSign')?.addEventListener('click', changeSign);

    document.getElementById('memoryRecall')?.addEventListener('click', memoryRecall);
    document.getElementById('memoryPlus')?.addEventListener('click', memoryPlus);
    document.getElementById('memoryMinus')?.addEventListener('click', memoryMinus);
}


window.calculator.init = function() {
	document.addEventListener('DOMContentLoaded', initCalculator);
	initCalculator();

};

initCalculator();
// window.calculator = window.calculator || {};

// (function() {
// 	var getIntById = function(id) {
// 		return parseInt(document.getElementById(id).value, 10);
// 	};

// 	var calculate = function() {
// 		var sum = getIntById('x') + getIntById('y');
// 		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
// 	};

// 	window.calculator.init = function() {
// 		document.getElementById('add').addEventListener('click', calculate);
// 	};

// })();