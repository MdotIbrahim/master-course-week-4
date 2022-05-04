// starter
let str = "Sand";
let num = 74;
let bool = true;
let arr = [num, "Great" , "Key", "Twins"];

arr.push(str);
for (let x = 0; x <arr.length; x++) {
    console.log(arr[x]);
}

balance = 500;
const pinMachineFunction = (withdraw) => {
    if (balance >= withdraw){
        balance +- withdraw;
        return `Thanks for withdrawing £${withdraw}. Current balance £${balance}.`;
    }else{
        return `Your request has been declined. Current balance £${balance} is not enough to get the £${withdraw} wanted.`;
    }
}
console.log(pinMachineFunction(500));

// Classes

// objects must have data and methods that work togther otherwise they are greatly limited. eg calc with only numbers or calc with only functions. eg2. behaviors require states when looking at animal.

let rosie = {
    _name: "Rosie", //underscore is telling dev not to use the data with it directly.
    _hopping: false,
    _thirst: 50, // these are states...
    get name() { // obscure a function using get. means only the output matters...eg. name() is essentialy "Rosie"/ binds the value so no longer need () when calling the function / better for security.
        return this._name;
    },
    get hopping() {
        return this._hopping;
    },
    thirst() {
        return this._thirst;
    }
}

//shouldnt access data within objects from outside...so use a function inside the object which can be called.
console.log(rosie);
console.log(rosie.name);
// console.log(rosie.name()); // doesnt work when using get
console.log(rosie.thirst());

//above example is only one bunny...doesnt help making 10 bunnies which a class can help with...

class Bunny {
    constructor(name) { //constructor is a method that differentiates object and class syntax - everytime is called, new object is made...the parameters are what makes each object potentially unique from each other
        this._name = name;
        this._hopping = false;
        this._thirst = 50;
    }
    get name() { 
        return this._name;
    }
    get hopping() {
        return this._hopping;
    }
    get thirst() {
        return this._thirst;
    }
}       
//create a class which is a template - stored in memory 
// every object made from the class is called an instance (of that class) and they inherit all methods and properties from the class.

const rosie2 = new Bunny("Rosie"); // new keyword initialises the instance of bunny class.
console.log(Bunny);
console.log(rosie2);
console.log(rosie2.name);

const timmy = new Bunny("Timmy");
console.log(timmy.name);

//activity 1a

console.log("\n...ACTIVITY 1...\n")

class Cars {
    constructor(carRegistration) {
        this._carRegistration = carRegistration;
        this._hoursParked = 0;
        this._costPerHour = 1.5
    }
    get totalCostOfParking(){
        if (this._hoursParked != 0){
            return `Pay £${this._hoursParked * this._costPerHour} for ${this._hoursParked} hours of parking for the car with registration ${this._carRegistration}.\n`;
    }   }
    addHoursParked(hours) {
        this._hoursParked += hours;
    }
    get carRegistration() {
        return this._carRegistration
    }
    get hoursParked() {
        return this._hoursParked
    }
    get costPerHour() {
        return this._costPerHour
    }
    changeCarRegistration(newReg) {
        this._carRegistration = newReg
        return `Your vehicle registration has been changed to ${this._carRegistration}. Please make sure it is correct otherwise a bill will be sent to your address.\n`
    }
}

const honda = new Cars("TE22ST1") //creating new object from cars class

console.log(honda.changeCarRegistration("NE72SWY"))
console.log(honda._carRegistration)

honda.addHoursParked(5)
console.log(honda.totalCostOfParking)

// teacher code example

class Cars3 {
    constructor(reg, arrival) {
        this._reg = reg;
        this._arrival = arrival;
        this._departure;
        this._totalCost;
        this._amountPaid = 0;
        this._costPerHour = 1.5;
        this._hasPaid = false;
    }
    departure(time) {
        this._departure = time;
        this._totalCost = (this._departure - this._arrival) * this._costPerHour;
    }
    payParking(payment) {
        if (this._amountPaid < this._totalCost) {
            this._amountPaid = this._amountPaid + payment;
            if (this._amountPaid >= this._totalCost) {
                this._hasPaid = true;
            }
        }
    }
    exit() {
        if (this._hasPaid) {
            console.log("Thanks for visiting");
        }
    }
}

const AA1AAA = new Cars3("AA1AAA", 5);
console.log(AA1AAA);
AA1AAA.departure(10);
console.log(AA1AAA);
AA1AAA.payParking(2);
AA1AAA.payParking(2);
AA1AAA.payParking(2);
console.log(AA1AAA);

// ; - greek question mark

//Sub classes - inherits class and then can add more properites and methods.

class Animal {
    constructor(name) {
        this._name = name;
        this._thirst = 100;
    }
    get name() {
        return  this._name;
    }
    get thirst() {
        return this._thirst
    }
}

class BunnySubClass extends Animal {
    constructor(name, hopBool) {
        super(name); // super method is the bridge between constructors - without this, there would be no name parameter and therefore the name would be undefined.
        this._isHopping = hopBool;
    }
    startHopping() {
        this._isHopping = true;
    }
}
console.log(Animal);
console.log(BunnySubClass);
const animalObj = new Animal("Dra");
const bunnyObj = new BunnySubClass("Wil", false);

console.log(animalObj)
console.log(bunnyObj)

// activity 1b - Car Park

console.log("\n...ACTIVITY 1b...\n")

listOfPins = [1234, 4321, 5678]
class staff extends Cars3 {
    constructor(_reg, arrival, staffPin) {
        super(_reg, arrival);
        if (staffPin == 1234){
            this._staffPin = true;
        }else{
            this._staffPin = false;
        }
        this._staffCredit = 0;
    }
    staffPay() {
        if (this._staffPin){
            this._staffCredit += this._totalCost;
            this._hasPaid = true;
            return `Charged £${this._totalCost.toFixed(2)} which has been added to your staff credit total of £${this._staffCredit.toFixed(2)}.`
        }else{
            return `Enter staff pin first.`
        }
    }
    get staffCredits() {
        return `Your staff credit total is £${this._staffCredit.toFixed(2)}`
    }
}
const staffCar1 = new staff("KO51ROS", 12, 1234);
staffCar1.departure(17);
console.log(staffCar1.staffPay())
console.log(staffCar1.staffCredits)
console.log(staffCar1.exit())
// console.log(staffCar1)


const staffCarFake = new staff("SU89PAS", 12, 4321);
staffCarFake.departure(24);
console.log(staffCarFake.staffPay())
// console.log(staffCarFake)

// activity 2 - cyber pet
console.log("\n...ACTIVITY 2...\n")

class cyberAnimal {
    constructor(name) {
        this._name = name;
        this._thirst = 100;
        this._hunger = 100;
        this._play = false;
        this._emotion = "Bored";
    }
    get name() {
        return  this._name;
    }
    get thirst() {
        return this._thirst;
    }
    get hunger() {
        return  this._hunger;
    }
    get happy() {
        return this._happy;
    }
    feeding() {
        this._hunger += 25
    }
    giveDrinks() {
        this._thirst += 25
    }
    play() {
        this._play = true
        this._emotion = "Happy"
        this._hunger -= 25
        this._thirst -= 25
    }

}

class cyberBunny extends cyberAnimal {
    constructor(name, hopBool) {
        super(name);
        this._isHopping = hopBool;
    }
    startHopping() {
        this._isHopping = true;
    }
}
class cyberCat extends cyberAnimal {
    constructor(name, meowBool) {
        super(name);
        this._isMeowing = meowBool;
    }
    startMeow() {
        this._isMeowing = true;
    }
}
class cyberDog extends cyberAnimal {
    constructor(name, barkBool) {
        super(name);
        this._isBarking = barkBool;
    }
    startHopping() {
        this._isBarking = true;
    }
}

const milky = new cyberCat("Milky", false)

milky.play()
console.log(milky)

// // activity 3 - DOM
// console.log("\n...ACTIVITY 3...\n")



