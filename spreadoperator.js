` Spread operator: 
Syntax ; {... obj/arr}


Use Case:
    -   When we concating ana  array or string.
    -   Copy array/Object or arr/Obj elements
    -   passing mutlipe parameter to a func.
    `

var courseName = ['Data Structure', 'Algorithms'];
// let description = `My course name Is ${...courseName}`;  ------------->> We can't used it directly here



//Copyed only array elements not the entire array.
var courseArray = ['Programming', 'Theory of Automa', ...courseName];

var courseArray = ['Programming', 'Theory of Automa', [...courseName]];
// console.log(courseArray)


var testScore = [12, 34, 4, 8];
var result = [43, 20, 7, 45];

// result = result.concat(testScore);

result = [43, 20, 7, 45, ...testScore];
// console.log(result)

let newobj = { ...scores, ...obj }
// console.log(newobj)

function sumArrayElement(val) {
    return val;
}
var elements = [1, 3, 5, 5]
// console.log( sumArrayElement(...elements))


function sumArrayElement(...newArray) {
    return newArray;
}

// console.log( sumArrayElement(1, 3, 5, 5))

const obj = {
    carName: 'BMW',
    carModel: 2024,
    carEngine: '2700CC',
    carSpeed: ' 260Km/h'
};

const objCopy = obj;
objCopy.carEngine = '3500CC';

// console.log(obj)

function calculateAverage({ ...score }) {
    let objValue = Object.values(score)
    let avg = objValue.reduce((acc, val) => acc + val, 0)
    console.log(avg / objValue.length)
}
const scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
// calculateAverage(scores);





