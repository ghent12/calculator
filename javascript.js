const container = document.getElementById('container');
      container.classList.add('container')
const resultDisplay = container.appendChild(document.createElement('div'));
      resultDisplay.classList.add('display', 'result-display');
const workingDisplay = container.appendChild(document.createElement('div'));
      workingDisplay.classList.add('display', 'working-display');
const allButtonContainer = container.appendChild(document.createElement('div'));
      allButtonContainer.classList.add('container', 'all-button-container');
const innerTopContainer = allButtonContainer.appendChild(document.createElement('div'));
      innerTopContainer.classList.add('container', 'inner-top-container');
const innerBottomContainer = allButtonContainer.appendChild(document.createElement('div'));
      innerBottomContainer.classList.add('container', 'inner-bottom-container');
const rightOperators = innerBottomContainer.appendChild(document.createElement('div'));
      rightOperators.classList.add('container', 'right-operators');
const numberPad = innerBottomContainer.appendChild(document.createElement('div'));
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
const buttonClear = innerTopContainer.appendChild(document.createElement('button'));
      buttonClear.classList.add('btn', 'operator-btn', 'clear');
      buttonClear.textContent = "C";
      buttonClear.id = "clear";
const buttonDivide = innerTopContainer.appendChild(document.createElement('button'));
      buttonDivide.classList.add('btn', 'operator-btn', 'divide');
      buttonDivide.textContent = "/";
      buttonDivide.id = "divide";
const buttonMultiply = innerTopContainer.appendChild(document.createElement('button'));
      buttonMultiply.classList.add('btn', 'operator-btn', 'multiply');
      buttonMultiply.textContent = "*";
      buttonMultiply.id = "multiply";
const buttonAdd = rightOperators.appendChild(document.createElement('button'));
      buttonAdd.classList.add('btn', 'operator-btn', 'add');
      buttonAdd.textContent = "+";
      buttonAdd.id = "add";
const buttonSubtract = innerTopContainer.appendChild(document.createElement('button'));
      buttonSubtract.classList.add('btn', 'operator-btn', 'subtract');
      buttonSubtract.textContent = "-";
      buttonSubtract.id = "subtract";
const buttonEquals = rightOperators.appendChild(document.createElement('button'));
      buttonEquals.classList.add('btn', 'operator-btn', 'equals');
      buttonEquals.textContent = "=";
      buttonEquals.id = "equals";

const buttons = document.querySelectorAll('button')

let displayText = '';

buttons.forEach(button => button.addEventListener('click', buttonPress))

function buttonPress(e) {
  console.log(e);
  switch (e.target.id) {
    case 'zero':
      workingDisplay.textContent += '0';
      break;
    case 'one':
      workingDisplay.textContent += '1';
      break;
    case 'two':
      workingDisplay.textContent += '2';
      break;
    case 'three':
      workingDisplay.textContent += '3';
      break;
    case 'four':
      workingDisplay.textContent += '4';
      break;
    case 'five':
      workingDisplay.textContent += '5';
      break;
    case 'six':
      workingDisplay.textContent += '6';
      break;
    case 'seven':
      workingDisplay.textContent += '7';
      break;
    case 'eight':
      workingDisplay.textContent += '8';
      break;
    case 'nine':
      workingDisplay.textContent += '9';
      break;
    case 'decimal':
      workingDecimal();
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
  //resultDisplay.textContent = whatKey
  if (e.key === 'Tab' || e.key === 'NumLock' || e.key === 'Backspace') {
    return;
  }
  if (whatKey < 10) {
    workingDisplay.textContent += whatKey;
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
        workingDecimal();
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

function workingAdd() {
  operate();
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('+')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' + ';
  }
}

function workingSubtract() {
  operate();
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('-')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' - ';
  }  
}

function workingMultiply() {
  operate();
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('-')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' * ';
  }  
}

function workingDivide() {
  operate();
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('-')) {
    // do nothing
  } else {
    workingDisplay.textContent += ' / ';
  }  
}

function workingDecimal() {
  displayText = workingDisplay.textContent.split(' ');
  if (displayText[displayText.length - 1].includes('.')) {
    // do nothing
  } else {
    workingDisplay.textContent += '.';
  }
}

function clear() {
  workingDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function operate() {
  let values
    , result
    , toTruncate;

  displayText = workingDisplay.textContent
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
    workingDisplay.textContent = result;
  } else if (displayText.includes(' / ')) {
    values = displayText.split(' / ');
    result = Number(values[0]) / Number(values[1])
    toTruncate = result.toString();
    if (toTruncate.includes('.')) {
      if (toTruncate.split('.')[1].length > 8) {
        result = result.toFixed(8);
      }
    }
    resultDisplay.textContent = result;
    workingDisplay.textContent = result;
  } else {
    return;
  }
    //case 'none': // recently cleared or fresh start      
}

document.body.addEventListener('keydown', keyPress)

