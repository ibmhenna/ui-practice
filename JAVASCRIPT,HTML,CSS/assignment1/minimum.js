let minimum = 0;
while (true) {
    let input1 = +prompt("Enter first number");
    if (input1 == "") {
        alert("Enter a valid number");
        break;
    }
    let input2 = +prompt("Enter second number");
    if (input2 == "") {
        alert("Enter a valid number");
        break;
    }
    if (input1 < input2) {
        alert('Minimum of ' + input1 + ' and ' + input2 + ' is ' + input1);
    }
    else {
        alert('Minimum of ' + input1 + ' and ' + input2 + ' is ' + input2);
    }
    break;
}
