// local modules - made by me
// core modules - built into node
// third-party modules - made by others in the node community

// seperate files using module.export and require()

const importedFile = require("./d3_npm2"); // import full file

const {multiply, subtract, array, myClass} = require("./d3_npm2"); // import specific objects

console.log(importedFile.addUp(7)(3)); // this way requires referencing file always
console.log(importedFile.developer)

console.log(multiply(7)(3)); // this way works without it

console.log(importedFile) // everything in the imported file is shown as an object

const os = require("os");
const fs = require("fs");

let userDetails = os.userInfo().username;

fs.appendFile("./oh-hi.txt", `hello ${userDetails}\n`, (err) => {
    if (err) {
        console.log("oops");
    }else {
        console.log(userDetails)
    }
})

// take away - work in a modular way (use different files)

// const _ = require("lodash") // need to install this library using npm install lodash