// what is JavaScript doing?
//why learn- helps visualise what is happening

// javascript engine is the computer program which executes JavaScript code - web browser has this engine built into it.

///1 execution content (e.g calling a function)
///2 memory/ variable environment (e.g declaring variables (global memory if outside function), , the parameter coming from a variable is local memory)
///3 thread of execution

//arrow functions syntactically similar to declaring arrays and objects and more versatile.

//! scope / Higher order functions.

// js first looks for variable in current context before moving outwards to global scope

/// cant move into something when outside the function scope, only move outside to global scope when inside function scope. Naturally can only move "backwards" when looking for variables as after is not declared yet.

// console.log(window) // in browser

// only use var if needed. e.g using variable outside a block scope of a for loop. Even then there would be other ways , e.g use global variable and change it.

// function without brackets is a function reference (whereas with brackets it is a function call (naturally))

const addUp = (num1) => {
    return (num2) => { // function with no name embeded in a function - makes the function anonymous - benefits: cybersecurity - makes MiTM attacks harder
        return num1 + num2;
    };
}

// expected output: 9
console.log(addUp(5)(4)); //call
// console.log(addUp); // reference


// HOF activities
//* activity 1

const helloFunc = () => {
    return () => {
        for (let i = 0; i < 5; i++) {
            console.log("Hello Code Nation")
        }
    }
    
}
helloFunc()()

//* activity 2 - use map and multiply items in array by 3

const numbersArray = [1, 2, 3, 4, 5]
const multiplyBy3 = (i) => {
    return i * 5
}
console.log(numbersArray.map(multiplyBy3))

//* activity 3

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
}
}

console.log(doMaths(5)(3, multiply));


// function declaration after call stillworking because of hoisting...doesnt work for variables but is understood (javascript knows the variable exists after but wont let you use it)
console.log(isEven(24)); // => true
console.log(isEven(11)); // => false

function isEven(num) {
    return num % 2 === 0;
}
