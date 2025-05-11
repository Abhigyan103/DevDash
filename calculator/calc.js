const mathInput = document.getElementById('mathExp');
const result = document.getElementById('result');

// function calculate(inputText) {
//   let ans = 0;
//   // Calculate answer
//   return ans;
// }

function calculate() {
  let expression = document.getElementById('expression').value;
  let result = evaluateExpression(expression);
  document.getElementById('result').innerText = 'Result: ' + result;
}

function evaluateExpression(expression) {
  let stack = [];
  let num = '';
  for (let char of expression) {
    if (char >= '0' && char <= '9') {
      num += char;
    } else if (num) {
      stack.push(parseInt(num));
      num = '';
      if (char === '+' || char === '-' || char === '*' || char === '/') {
        stack.push(char);
      }
    } else if (char === '+' || char === '-' || char === '*' || char === '/') {
      stack.push(char);
    }
  }
  if (num) stack.push(parseInt(num));

  while (stack.length > 1) {
    let num1 = stack.shift();
    let operator = stack.shift();
    let num2 = stack.shift();
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    stack.unshift(result);
  }
  return stack;
}

result.innerHTML = calculate(mathInput.value.trim()).toString();

// Write some code to make the answer appear in the result div as soon as the user types and use the calculate function
