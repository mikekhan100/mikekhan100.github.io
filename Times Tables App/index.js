function whole() {


var prize = 0;

// If button is clicked, calculate whether the answer is correct and print it out

function times1() { 
var timesBy1 = document.getElementById("input1").value;
var answer1 = document.getElementById("answer1");
  if (timesBy1 == 2) {
    answer1.textContent = "Correct!";
    answer1.style.color = "#00db71";
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
  if (timesBy2 == 4) {
    answer2.textContent = "Correct!";
    prize++;
  }
  else {
    answer2.textContent = "Please try again";
  }
}
times2();
  
function times3() { 
var timesBy3 = document.getElementById("input3").value;
var answer3 = document.getElementById("answer3");
  if (timesBy3 == 6) {
    answer3.textContent = "Correct!";
    prize++;
  }
  else {
    answer3.textContent = "Please try again";
  }
}
times3();
  
function times4() { 
var timesBy4 = document.getElementById("input4").value;
var answer4 = document.getElementById("answer4");
  if (timesBy4 == 8) {
    answer4.textContent = "Correct!";
    prize++;
  }
  else {
    answer4.textContent = "Please try again";
  }
}
times4();
  
function times5() { 
var timesBy5 = document.getElementById("input5").value;
var answer5 = document.getElementById("answer5");
  if (timesBy5 == 10) {
    answer5.textContent = "Correct!";
    prize++;
  }
  else {
    answer5.textContent = "Please try again";
  }
}
times5();
  
function times6() { 
var timesBy6 = document.getElementById("input6").value;
var answer6 = document.getElementById("answer6");
  if (timesBy6 == 12) {
    answer6.textContent = "Correct!";
    prize++;
  }
  else {
    answer6.textContent = "Please try again";
  }
}
times6();
  
function times7() { 
var timesBy7 = document.getElementById("input7").value;
var answer7 = document.getElementById("answer7");
  if (timesBy7 == 14) {
    answer7.textContent = "Correct!";
    prize++;
  }
  else {
    answer7.textContent = "Please try again";
  }
}
times7();
  
function times8() { 
var timesBy8 = document.getElementById("input8").value;
var answer8 = document.getElementById("answer8");
  if (timesBy8 == 16) {
    answer8.textContent = "Correct!";
    prize++;
  }
  else {
    answer8.textContent = "Please try again";
  }
}
times8();
  
function times9() { 
var timesBy9 = document.getElementById("input9").value;
var answer9 = document.getElementById("answer9");
  if (timesBy9 == 18) {
    answer9.textContent = "Correct!";
    prize++;
  }
  else {
    answer9.textContent = "Please try again";
  }
}
times9();
  
function times10() { 
var timesBy10 = document.getElementById("input10").value;
var answer10 = document.getElementById("answer10");
  if (timesBy10 == 20) {
    answer10.textContent = "Correct!";
    prize++;
  }
  else {
    answer10.textContent = "Please try again";
  }
}
times10();
  
function times11() { 
var timesBy11 = document.getElementById("input11").value;
var answer11 = document.getElementById("answer11");
  if (timesBy11 == 22) {
    answer11.textContent = "Correct!";
    prize++;
  }
  else {
    answer11.textContent = "Please try again";
  }
}
times11();
  
function times12() { 
var timesBy12 = document.getElementById("input12").value;
var answer12 = document.getElementById("answer12");
  if (timesBy12 == 24) {
    answer12.textContent = "Correct!";
    prize++;
  }
  else {
    answer12.textContent = "Please try again";
  }
}
times12();

// Show image when all 12 answers are correct
  if (prize === 12) {
    var result = document.getElementById("image");
    var photo = document.createElement("img");
    photo.src = 'https://www.dropbox.com/s/hwnlpfv2r3cbkt2/2017-07-22%2018.35.07.jpg?dl=1';
    result.appendChild(photo);
  }

  
} // Global function closing brace


