
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.text-right');

let currentInput='0';
let perviousInput='';
let operator='';
let shouldResentScreen=false;

function updateDisplay(){
    display.textContent=currentInput;
}

function clearCalculator(){
    currentInput='0';
    perviousInput='';
    operator='';
    shouldResentScreen=false;
    updateDisplay();
}


function inputNumber(number){
    if(currentInput==='0' || shouldResentScreen){
        currentInput=number;
        shouldResentScreen=false;
}
else{
    currentInput=currentInput+number;
}
updateDisplay();

}

function inputDecimal() {
    if (!currentInput.includes('.')) {
      currentInput += '.';
      updateDisplay();
    }
  }
 
  function inputOperator(op) {
    if (operator !== '') calculate(); // Calculate if there's an operator already
    operator = op;
    previousInput = currentInput;
    shouldResetScreen = true;
  }
  
  
  function calculate() {
    let result;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
  
    if (isNaN(previous) || isNaN(current)) return;
  
    switch (operator) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '/':
        result = previous / current;
        break;
      default:
        return;
    }
  
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
  }
  
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.textContent;
  
      if (value >= '0' && value <= '9') {
        inputNumber(value);
      } else if (value === '.') {
        inputDecimal();
      } else if (value === 'C') {
        clearCalculator();
      } else if (value === '=') {
        calculate();
      } else {
        inputOperator(value);
      }
    });
  });
  

  updateDisplay();

