//String objects
let user = "Henna";
console.log(user);
console.log(user.length);
let user1=console.log(user.concat(' David'));
console.log(user);
console.log(user1);

//Custom objects
let a = 1;//no primitive, object
console.log(a);
console.log(a.toString());

let age = 12.2;//number
console.log(age);

//json object
let order ={
    item:"Laptop",
    price:34.7,
    address : {
        streetName:"ist main",
        city:'Bangalore',
        pin:5374784
    }
}

//arrays
// let numbers = [1,4,5,-1,7]
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
// }

// let numbers = [1,4,5,-1,7]
// numbers.forEach(function(element){
//     console.log(element);
// });

//sorting
// let numbers = [1,4,5,-1,7,10]
// numbers.sort();
// console.log(numbers);

// let numbers = [1,4,5,-1,7,10]
// numbers.sort(function(value1, value2){//callback functions
//     return value1-value2;
// });
// console.log(numbers);

//-------modify array---------------
// let numbers =[1,4,5,-1,7,10]
// numbers.push(34);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// let numbers =[1,4,5,-1,7,10]
// numbers.splice(1,3);
// console.log(numbers);

//-------loop--------------
// let sum = 0;
// while (true){
//     let value = +prompt("Enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// alert('Sum: ' + sum);


// function createOrders(){

// }

// //-----------using continue keyword-----------
// for (let i = 0; i < 10; i++) {
//     //if true,skip the remaining part of the body
//     if(i % 2 == 0)
//  //   continue;
//     alert(i);   
// }


