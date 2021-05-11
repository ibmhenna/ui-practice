function doNothing(){
    return 23;
}

function checkAge(age) {
//   return age >= 18 ? true : confirm('Do you have permission from your parents?');//ternary operation
  return (age > 18) || confirm('Have permission from your parents?');  
}

let age = prompt('How old are you?', 18);
let decision = checkAge(age);
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
