// classes
class User{
    constructor(name, ...skills){
        this.name = name;
        this.age;
        this.skills=skills;
    }
    eat(){
        console.log(this.name+' is eating');
        console.log(`${this.name} is eating`) //string interpolation
    }
    work(desiredskill){
        this.skills.forEach(skill=>{
            if (skill == desiredskill){
                console.log(`${this.name} is working on ${desiredskill}`)
            }
        })
        console.log(this.skills[1]);
    }
}
const u1 = new User('Ram', 'java', 'spring', 'mysql');
console.log(u1.name);
u1.age=20;
console.log(u1.age);
u1.eat();
u1.work('java');


// //ES5
// var x = function(x,y){
//     return x*y;

// }

// //ES6
// constresult = (x,y) => x*y;
// console.log(result(1,2));

// const t= result;
// console.log(result(2,3));


