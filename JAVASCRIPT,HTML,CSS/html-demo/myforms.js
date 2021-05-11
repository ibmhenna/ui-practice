function validationName(){
    let x = document.forms["myform"]["firstName"].value;
    if (x == ""){
        alert("First name should be filled");
        return false;
    }
    else{console.log(event);}
    
}

let action2 = function (){
    console.log('action2');
}