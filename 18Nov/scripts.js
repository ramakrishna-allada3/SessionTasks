
var a = 0;
var b = 0;

window.onload = (event) => {
    var num1 = document.getElementById("number1");
    var num2 = document.getElementById("number2");
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    num1.innerText = a;
    num2.innerText = b;
};

function checkAnswer() {
    var answer = document.getElementById("answer").value;
    if (a+b === parseInt(answer)) {
        alert("Answer is correct");
        location.reload(); 
    }
    else {
        alert("Your answer is incorrect. Please check and try again");
    }

}