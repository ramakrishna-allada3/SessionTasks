var number = 0;
window.onload = (event) => {
    number = Math.floor(Math.random()*100);
    console.log(number);
};

function check() {
    console.log("Button click");
    var inputNumber = document.getElementById("input-num").value;
    console.log(inputNumber);
    if (inputNumber === number) {
        alert("Your guess is correct!!");
        location.reload;
    }
    else if (inputNumber > number) {
        alert("Sorry!! Try a smaller number");
    }
    else if (inputNumber < number) {
        alert("Sorry!! Try a larger number");
    }
    else {
        alert("Please enter a number");
    }
}