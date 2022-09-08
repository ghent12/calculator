const container = document.getElementById('container');
      container.classList.add('container')
const resultDisplay = container.appendChild(document.createElement('div'));
      resultDisplay.classList.add('display', 'result-display');
const workingDisplay = container.appendChild(document.createElement('div'));
      workingDisplay.classList.add('display', 'working-display');
const allButtonContainer = container.appendChild(document.createElement('div'));
      allButtonContainer.classList.add('container', 'all-button-container');
const numberPad = allButtonContainer.appendChild(document.createElement('div'));
      numberPad.classList.add('container', 'number-pad');
const button0 = numberPad.appendChild(document.createElement('button'));
      button0.classList.add('btn', 'number-btn', 'btn0');
      button0.textContent = "0";
      button0.id = "zero";
const buttonDecimal = numberPad.appendChild(document.createElement('button'));
      buttonDecimal.classList.add('btn', 'number-btn', 'decimal');
      buttonDecimal.textContent = ".";
      buttonDecimal.id = "decimal";
const button1 = numberPad.appendChild(document.createElement('button'));
      button1.classList.add('btn', 'number-btn', 'btn1');
      button1.textContent = "1";
      button1.id = "one";
const button2 = numberPad.appendChild(document.createElement('button'));
      button2.classList.add('btn', 'number-btn', 'btn2');
      button2.textContent = "2";
      button2.id = "two";
const button3 = numberPad.appendChild(document.createElement('button'));
      button3.classList.add('btn', 'number-btn', 'btn3');
      button3.textContent = "3";
      button3.id = "three";
const button4 = numberPad.appendChild(document.createElement('button'));
      button4.classList.add('btn', 'number-btn', 'btn4');
      button4.textContent = "4";
      button4.id = "four";
const button5 = numberPad.appendChild(document.createElement('button'));
      button5.classList.add('btn', 'number-btn', 'btn5');
      button5.textContent = "5";
      button5.id = "five";
const button6 = numberPad.appendChild(document.createElement('button'));
      button6.classList.add('btn', 'number-btn', 'btn6');
      button6.textContent = "6";
      button6.id = "six";
const button7 = numberPad.appendChild(document.createElement('button'));
      button7.classList.add('btn', 'number-btn', 'btn7');
      button7.textContent = "7";
      button7.id = "seven";
const button8 = numberPad.appendChild(document.createElement('button'));
      button8.classList.add('btn', 'number-btn', 'btn8');
      button8.textContent = "8";
      button8.id = "eight";
const button9 = numberPad.appendChild(document.createElement('button'));
      button9.classList.add('btn', 'number-btn', 'btn9');
      button9.textContent = "9";
      button9.id = "nine";
const buttonClear = numberPad.appendChild(document.createElement('button'));
      buttonClear.classList.add('btn', 'operator-btn', 'clear');
      buttonClear.textContent = "C";
      buttonClear.id = "clear";
const buttonDivide = numberPad.appendChild(document.createElement('button'));
      buttonDivide.classList.add('btn', 'operator-btn', 'divide');
      buttonDivide.textContent = "/";
      buttonDivide.id = "divide";
const buttonMultiply = numberPad.appendChild(document.createElement('button'));
      buttonMultiply.classList.add('btn', 'operator-btn', 'multiply');
      buttonMultiply.textContent = "*";
      buttonMultiply.id = "multiply";
const buttonAdd = numberPad.appendChild(document.createElement('button'));
      buttonAdd.classList.add('btn', 'operator-btn', 'add');
      buttonAdd.textContent = "+";
      buttonAdd.id = "add";
const buttonSubtract = numberPad.appendChild(document.createElement('button'));
      buttonSubtract.classList.add('btn', 'operator-btn', 'subtract');
      buttonSubtract.textContent = "-";
      buttonSubtract.id = "subtract";
const buttonEquals = numberPad.appendChild(document.createElement('button'));
      buttonEquals.classList.add('btn', 'operator-btn', 'equals');
      buttonEquals.textContent = "=";
      buttonEquals.id = "equals";

const buttons = document.querySelectorAll('button')

let displayText = ''
  , isResult = true;

buttons.forEach(button => button.addEventListener('click', buttonPress))
buttons.forEach(button => button.addEventListener('focus', () => {workingDisplay.focus();}))

function resultOrNot(n) {
  if (isResult && (n !== ".")) {
    workingDisplay.textContent = n;
  } else if (isResult && n === ".") {
    workingDisplay.textContent = "0.";
  } else if ((isResult == false) && (n !== ".")) {
    workingDisplay.textContent += n;
  }
}

function buttonPress(e) {
  switch (e.target.id) {
    case 'zero':
      resultOrNot(0);
      isResult = false;
      break;
    case 'one':
      resultOrNot(1);
      isResult = false;
      break;
    case 'two':
      resultOrNot(2);
      isResult = false;
      break;
    case 'three':
      resultOrNot(3);
      isResult = false;
      break;
    case 'four':
      resultOrNot(4);
      isResult = false;
      break;
    case 'five':
      resultOrNot(5);
      isResult = false;
      break;
    case 'six':
      resultOrNot(6);
      isResult = false;
      break;
    case 'seven':
      resultOrNot(7);
      isResult = false;
      break;
    case 'eight':
      resultOrNot(8);
      isResult = false;
      break;
    case 'nine':
      resultOrNot(9);
      isResult = false;
      break;
    case 'decimal':
      resultOrNot('.')
      workingDecimal();
      isResult = false;
      break;
    case 'clear':
      clear();
      break;
    case 'divide':
      workingDivide();
      break;
    case 'multiply':
      workingMultiply();
      break;
    case 'add':
      workingAdd();
      break;
    case 'subtract':
      workingSubtract();
      break;
    case 'equals':
      operate();
      break;
  }
}

function keyPress(e) {
  const whatKey = e.keyCode % 48;
  if (e.key === 'Tab' || e.key === 'NumLock' || e.key === 'Backspace') {
    return;
  }
  if (whatKey < 10) {
    resultOrNot(whatKey);
    isResult = false;
  } else {
    switch (whatKey) {
      case 10:
        workingMultiply();
        break;
      case 11:
        workingAdd();
        break;
      case 13:
        if (e.key === '-') {
          workingSubtract();
        } else if (e.key === 'Enter') {
          operate();
        }
        break;
      case 14:
        resultOrNot('.')
        workingDecimal();
        isResult = false;
        break;
      case 15:
        workingDivide();
        break;
      case 19:
        clear();
        break;
      case 43:
        operate();
        break;
      case 45:
        workingSubtract();
        break;
      case 46:
        workingDecimal();
        break;
    }
    /* run an operator command. 
    10 is *
    11 is +
    13 is - or keypad Enter
    14 is .
    15 is /
    19 is c
    43 is =
    45 is -
    46 is also .
    */
  }
}

function isNumeric(x) {
  return !isNaN(parseFloat(x)) && isFinite(x);
}

function switchOperator() {
  let displayLength = workingDisplay.textContent.length;
  if (displayLength > 2) {
    displayText = workingDisplay.textContent[displayLength - 2];
  }
  if (displayText === '-' || displayText === '+' || displayText === '/' || displayText === '*') {
    workingDisplay.textContent = workingDisplay.textContent.substring(0, displayLength - 2);
  }
}

function workingAdd() {
  switchOperator();
  operate();
  if (resultDisplay.textContent.includes('divide by 0')) {
    workingDisplay.textContent += '0';
  }
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('+')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' + ';
    isResult = false;
  }
}

function workingSubtract() {
  switchOperator();
  operate();
  if (resultDisplay.textContent.includes('divide by 0')) {
    workingDisplay.textContent += '0';
  }
  displayText = workingDisplay.textContent.split(' ');
    workingDisplay.textContent += ' - ';
    isResult = false;
}

function workingMultiply() {
  switchOperator();
  operate();
  if (resultDisplay.textContent.includes('divide by 0')) {
    workingDisplay.textContent += '0';
  }
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('*')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' * ';
    isResult = false;
  }  
}

function workingDivide() {
  switchOperator();
  operate();
  if (resultDisplay.textContent.includes('divide by 0')) {
    workingDisplay.textContent += '0';
  }
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('/')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' / ';
    isResult = false;
  }  
}

function workingDecimal() {
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('.')) {
    // do nothing
  } else {
    console.log(displayText)
    if (displayText[displayText.length - 1] === "") {
      workingDisplay.textContent += '0';
    }
    workingDisplay.textContent += '.';
    isResult = false;
  }
}

function clear() {
  workingDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function removeExcessZeroes() {
  let decimals
    , resultantDecimals
    , keepSlicing = true;
  if (workingDisplay.textContent.includes('.')) {
    displayText = workingDisplay.textContent.split('.');
    decimals = displayText[1].split(''); // Show only after decimal
    resultantDecimals = decimals;
    for (let i = decimals.length - 1; i >= 0; --i) { 
      // However long the decimals are, start at the end and work your way back
      if (keepSlicing) {
        if (decimals[i] != 0) {
          keepSlicing = false;
        } else if ((decimals[i] == 0)) {
          resultantDecimals.splice(i, 1);
        }
      } 
    }
    workingDisplay.textContent = displayText[0].toString() + '.' + resultantDecimals.join('');
    resultDisplay.textContent = displayText[0].toString() + '.' + resultantDecimals.join('');
  } else {
    return;
  }
}

function operate() {
  let values
    , result
    , toTruncate;

  displayText = workingDisplay.textContent

  if (displayText === "") {
    workingDisplay.textContent = "0";
    return;
  }

  if (displayText.includes(' + ')) {
    values = displayText.split(' + ');
    result = Number(values[0]) + Number(values[1])
    toTruncate = result.toString();
    if (toTruncate.includes('.')) {
      if (toTruncate.split('.')[1].length > 8) {
        result = result.toFixed(8);
      }
    }
    resultDisplay.textContent = result;
    isResult = true;
    workingDisplay.textContent = result;
  } else if (displayText.includes(' - ')) {
    values = displayText.split(' - ');
    result = Number(values[0]) - Number(values[1])
    toTruncate = result.toString();
    if (toTruncate.includes('.')) {
      if (toTruncate.split('.')[1].length > 8) {
        result = result.toFixed(8);
      }
    }
    resultDisplay.textContent = result;
    isResult = true;
    workingDisplay.textContent = result;
  } else if (displayText.includes(' * ')) {
    values = displayText.split(' * ');
    result = Number(values[0]) * Number(values[1])
    toTruncate = result.toString();
    if (toTruncate.includes('.')) {
      if (toTruncate.split('.')[1].length > 8) {
        result = result.toFixed(8);
      }
    }
    resultDisplay.textContent = result;
    isResult = true;
    workingDisplay.textContent = result;
  } else if (displayText.includes(' / ')) {
    values = displayText.split(' / ');
    if (Number(values[1]) === 0) {
      resultDisplay.textContent = "Can't divide by 0!"
      workingDisplay.textContent = "";
      isResult = true;
      return;
    }
    result = Number(values[0]) / Number(values[1]);
    console.group('division');
      console.log(Number(values[0]) + '/' + Number(values[1]));
      console.log('result is ' + result);
    console.groupEnd('division');
    toTruncate = result.toString();
    if (toTruncate.includes('.')) {
      if (toTruncate.split('.')[1].length > 8) {
        result = result.toFixed(8);
      }
    }
    resultDisplay.textContent = result;
    isResult = true;
    workingDisplay.textContent = result;
  } else {
    return;
  }
  removeExcessZeroes();
}

document.body.addEventListener('keydown', keyPress)

