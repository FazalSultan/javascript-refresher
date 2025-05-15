const age = 14;
// console.log(age)


/*
`we can not re-intialize a value to const Variable
age  = 29;
console.log(age)
`

*/


{
    const insideScope =12;
    // console.log(insideScope)
}
/*
    we can't access it because we declare and intailze indie a block scope.

    Note: var, let and const we can't acces it if we declare it insie the curly bracket
 */
// console.log(insideScope)


let marks = 80;
// let marks =56;
// console.log(marks)



var x = 10;
var x = 20; // No error
// console.log(x); // 20


if (true) {
    var y = 30; // Declared inside a block
}
console.log(y); // 30 (Accessible outside the block)



// Usage of var within function

// var currentVote = 10;

function totalVore(){
    var currentVote = 14;
    // console.log(currentVote) // 14 ----------------------->> due to local scope
}

totalVore();
// console.log(currentVote) // 10


//String literel

// let fistName ='Fazal';
// let lastName ='Sultan';
// console.log(`this is my ${fistName} and ${lastName}`)

const obj = {
    name : 'Faza' ,
    rollno: '45',
    addName: '2023',
    IsTrue: false
};

console.log(obj)
var obj1 ={...obj , IsTrue : true} ;
console.log(obj1)


// const{name: f , rollno: r} = obj;
// console.log(f ,r)

