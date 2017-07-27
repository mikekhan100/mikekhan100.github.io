function whole() {


var prize = 0;

// If button is clicked, calculate whether the answer is correct and print it out

function times1() { 
var timesBy1 = document.getElementById("input1").value;
var answer1 = document.getElementById("answer1");
  if (timesBy1 == 10) {
    answer1.textContent = "Correct!";
    answer1.style.color = "#00e030";
    prize++;
  }
  else {
    answer1.textContent = "Please try again";
    answer1.style.color = "#f40430";
  }
}
times1();
  
function times2() {
var timesBy2 = document.getElementById("input2").value;
var answer2 = document.getElementById("answer2");
  if (timesBy2 == 20) {
    answer2.textContent = "Correct!";
    answer2.style.color = "#00e030";
    prize++;
  }
  else {
    answer2.textContent = "Please try again";
    answer2.style.color = "#f40430";
  }
}
times2();
  
function times3() { 
var timesBy3 = document.getElementById("input3").value;
var answer3 = document.getElementById("answer3");
  if (timesBy3 == 30) {
    answer3.textContent = "Correct!";
    answer3.style.color = "#00e030";
    prize++;
  }
  else {
    answer3.textContent = "Please try again";
    answer3.style.color = "#f40430";
  }
}
times3();
  
function times4() { 
var timesBy4 = document.getElementById("input4").value;
var answer4 = document.getElementById("answer4");
  if (timesBy4 == 40) {
    answer4.textContent = "Correct!";
    answer4.style.color = "#00e030";
    prize++;
  }
  else {
    answer4.textContent = "Please try again";
    answer4.style.color = "#f40430";
  }
}
times4();
  
function times5() { 
var timesBy5 = document.getElementById("input5").value;
var answer5 = document.getElementById("answer5");
  if (timesBy5 == 50) {
    answer5.textContent = "Correct!";
    answer5.style.color = "#00e030";
    prize++;
  }
  else {
    answer5.textContent = "Please try again";
    answer5.style.color = "#f40430";
  }
}
times5();
  
function times6() { 
var timesBy6 = document.getElementById("input6").value;
var answer6 = document.getElementById("answer6");
  if (timesBy6 == 60) {
    answer6.textContent = "Correct!";
    answer6.style.color = "#00e030";
    prize++;
  }
  else {
    answer6.textContent = "Please try again";
    answer6.style.color = "#f40430";
  }
}
times6();
  
function times7() { 
var timesBy7 = document.getElementById("input7").value;
var answer7 = document.getElementById("answer7");
  if (timesBy7 == 70) {
    answer7.textContent = "Correct!";
    answer7.style.color = "#00e030";
    prize++;
  }
  else {
    answer7.textContent = "Please try again";
    answer7.style.color = "#f40430";
  }
}
times7();
  
function times8() { 
var timesBy8 = document.getElementById("input8").value;
var answer8 = document.getElementById("answer8");
  if (timesBy8 == 80) {
    answer8.textContent = "Correct!";
    answer8.style.color = "#00e030";
    prize++;
  }
  else {
    answer8.textContent = "Please try again";
    answer8.style.color = "#f40430";
  }
}
times8();
  
function times9() { 
var timesBy9 = document.getElementById("input9").value;
var answer9 = document.getElementById("answer9");
  if (timesBy9 == 90) {
    answer9.textContent = "Correct!";
    answer9.style.color = "#00e030";
    prize++;
  }
  else {
    answer9.textContent = "Please try again";
    answer9.style.color = "#f40430";
  }
}
times9();
  
function times10() { 
var timesBy10 = document.getElementById("input10").value;
var answer10 = document.getElementById("answer10");
  if (timesBy10 == 100) {
    answer10.textContent = "Correct!";
    answer10.style.color = "#00e030";
    prize++;
  }
  else {
    answer10.textContent = "Please try again";
    answer10.style.color = "#f40430";
  }
}
times10();
  
function times11() { 
var timesBy11 = document.getElementById("input11").value;
var answer11 = document.getElementById("answer11");
  if (timesBy11 == 110) {
    answer11.textContent = "Correct!";
    answer11.style.color = "#00e030";
    prize++;
  }
  else {
    answer11.textContent = "Please try again";
    answer11.style.color = "#f40430";
  }
}
times11();
  
function times12() { 
var timesBy12 = document.getElementById("input12").value;
var answer12 = document.getElementById("answer12");
  if (timesBy12 == 120) {
    answer12.textContent = "Correct!";
    answer12.style.color = "#00e030";
    prize++;
  }
  else {
    answer12.textContent = "Please try again";
    answer12.style.color = "#f40430";
  }
}
times12();

// Show image when all 12 answers are correct
  if (prize === 12) {
    var result = document.getElementById("image");
    var photo = document.createElement("img");
    photo.src = 'https://mikekhan100.github.io/Images/Mary and Mummy at Harbour Park.jpg';
    result.appendChild(photo);
    var text = document.getElementById("message");
    text.textContent = "Well done Mary!!!";
    text.style.color = "#f90000";
    text.style.fontSize = "xx-large";
  }

  
} // Global function closing brace
