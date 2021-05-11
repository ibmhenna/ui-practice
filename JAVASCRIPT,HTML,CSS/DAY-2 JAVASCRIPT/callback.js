let numbers = [1,4,5,-1,7,10];
function addAll(previous, current){
    return previous + current;
}
let result = numbers.reduce(addAll);
console.log(result);




// function ask(question, yesCallbackFunction, noCallbackFunction) {
//     if (confirm(question)) yesCallbackFunction()
//     else noCallbackFunction();
// }

// function showOk() {
//     alert("You agreed.");
// }

// function showCancel() {
//     alert("You canceled the execution.");
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);