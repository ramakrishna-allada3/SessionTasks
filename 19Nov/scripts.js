let sum = (a, b) => a+b;

let mul = (a, b) => a*b; 

function calculate(a, b, callback) {
    console.log(callback(a, b));
}

calculate(3, 4, sum);
calculate(3, 4, mul);