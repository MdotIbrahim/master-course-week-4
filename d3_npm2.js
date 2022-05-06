const addUp = (num1) => {
    return (num2) => { 
        return num1 + num2;
    };
}

const subtract = (num1) => {
    return (num2) => { 
        return num1 - num2;
    };
}

const multiply = (num1) => {
    return (num2) => { 
        return num1 * num2;
    };
}

array = ["keys" , "crash" , "twins"]

class myClass {

}
module.exports = {
    addUp,
    subtract,
    multiply,
    developer: "John",
    array,
    myClass,
}