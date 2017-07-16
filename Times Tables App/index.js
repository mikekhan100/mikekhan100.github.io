function calculate() {
    
   var currentValue = document.getElementById("multiple").value;
   var answer = document.getElementById("answerArea");
   
   if (currentValue === 2) {
        answer.textContent = "Correct";
   }
    
   else {
       answer.textContent = "Please try again";
   }
