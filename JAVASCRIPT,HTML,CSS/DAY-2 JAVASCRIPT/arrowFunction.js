const outer = ()=> {
    return 1;
}
// const outer = ()=> 2;
const result = outer();
console.log(result);

const user = {
    name: "Ram",
    eat: ()=> console.log(this)
}
user.eat();

//change context temporarily
// user.eat.call({ name: 'John' });
// user.eat();
// user.eat.call({ name: 'Bob' });
// user.eat();

// change context permanently
// user.eat = user.eat.bind({ name: 'Rahim' });
// // user.eat = user.eat.bind({ name: 'Rahim123' });
// // user.eat.call({name:'John'})
// user.eat();



    // function foo(){
//     console.log(this);
// }
// foo();
// const a = 1;

// const foo = function(){//function expression

// }