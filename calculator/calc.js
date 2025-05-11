const mathInput = document.getElementById("mathExp");
const result = document.getElementById("result");

function calculate(inputText) {
    let ans=0;
    // Calculate answer
    ans = eval(inputText);
    return ans;
}

// Write some code to make the answer appear in the result div as soon as the user types and use the calculate function
mathInput.addEventListener("input", () => {
    console.log("working")
    try {
      // Evaluate the math expression
      const evaluatedResult = eval(mathInput.value);
      result.textContent = evaluatedResult;
    } catch (error) {
      result.textContent = "Error: Invalid expression";
    }
  });