let user ={
    name:'Ram',
    age:30
}

let users = [];
for (let index = 0; index < 10; index++){
    let user ={
        name:'Ram' + index,
        age:3* index
    }
    users.push(user);
}
console.log(users);

// users.sort(function(user1,user2){
//     return user2.age-user1.age});
// console.log(users);

function table(users){
    for(let i = 0; i<users.length; i++){
        result +="<tr>";
        for(let j =0; j<users[i].length;j++){
            result+= "<td>"+users[i][j]+"</td>";
        }
        result +="</tr>";
    }
    result+="</table>";
    return result
}