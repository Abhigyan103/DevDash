const mathInput = document.getElementById("mathExp");
const result = document.getElementById("result");
mathInput.addEventListener("input", () => {
    try {
      
      // Evaluate the math expression
      const evaluatedResult = eval(mathInput.value);
      result.textContent = evaluatedResult;
    } catch (error) {
      result.textContent = "Error: Invalid expression";
    }
  });

function eval(input) {
    let a = '';
    let o = '';
    let b = '';
    
    a+=input;
    let n=0;
    while(n!=a.length){
        if(a[n]==`+`||a[n]==`-`||a[n]==`*`||a[n]==`/`){
        }
    }
    return input;
}

// Write some code to make the answer appear in the result div as soon as the user types and use the calculate function