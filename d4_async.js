//* callbacks: when a function is passed as an argument (used for higher order functions).

/// set timeout staggers things and controls time in ms. - is a callback.

const func1 = () => {
    setTimeout(() => {
        console.log("this is func1 - 1 second has passed.")
    }, 1000);
}
const func2 = () => {
    setTimeout(() => {
        console.log("this is func2 - 3 seconds have passed.")
    }, 3000);
}
func2() // called first but also has been executed and then waits 5 seconds. - it has been completed.
func1() // during the wait, this function is called. - still uses one thread.

//if a function is running slowly and needs to finish, you could delay other functions (by miliseconda). eg delay the showing of a post that been sent...

const func1b = () => {
    setTimeout(() => {
        console.log("this is func1b - 1 second has passed since func2b was executed.")
    }, 1000);
}
const func2b = (callback) => { // callback is just the name based indicator of what it is, but the variable name can be anything..
    setTimeout(() => {
        console.log("this is func2b - 3 seconds have passed.")
    callback(); //if you use a callback function, then it will wait however long before executing the function even if the wait for that function is shorter since the function is inside another function that has a longer delay...
    }, 3000);
}

func2b(func1b);

//* Promises - 
/// resolve - things went ok
/// reject - something went wrong.

//*async function using await.
// Async - defines function as asynchronous.
// await - waits for the code to finish processing.
/// uses promises and waits for state to be returned (either resolve or reject), as opposed to using them as a callback without async

async function init(){

}
init();

//* try, catch - can join together with async and promises to tell if something works or doesnt.
