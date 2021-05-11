let result = 0;
while (true) {
    let input1 = +prompt("Enter first number");
    if (input1 == "") {
        alert("Enter a valid number");
        break;
    }
    let input2 = +prompt("Enter second number");
    if (input2 == "" || input2 < 0) {
        alert("Enter a valid number or a posetive number");
        break;
    }
    else {
        let result = Math.pow(input1, input2);
        alert("Result is : " + result);
    }
    break;
}