// let a = +prompt('a?', '');

// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
//     default:
//         alert('Enter a value between 0 and 4');
// }       

let userName = 'John';

function showMessage() {
    userName = "Bob"; //changed outer variable
    let message = 'Hello,' + userName;
    alert(message);
}
alert(userName); // John
showMessage();
alert(userName); //modified to Bob