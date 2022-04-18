function add(n0, n1) {
    return n0 + n1
}

console.log(add(50, 32));

function subtract(n0, n1) {
    return n0 - n1
}

console.log(subtract(50, 32));

function mutiply(n0, n1) {
    return n0 * n1
}
console.log(mutiply(50, 32));


function divide(n0, n1) {
    return n0 / n1
}

console.log(divide(50, 32));


let num1 = prompt("Enter the first number: ")
let op = prompt("select operator: ")
let num2 = prompt("eneter second number: ")

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (op == "+") {
    alert(`${num1} + ${num2} = ${add(num1, num2)}`);
}

else if (op == "-") {
    alert(`${num1} - ${num2} = ${subtract(num1, num2)}`);
}
else if (op == "*") {
    alert(`${num1} * ${num2} = ${mutiply(num1, num2)}`);
}

else if (op == "/") {
    alert(`${num1} / ${num2} = ${divide(num1, num2)}`);
}