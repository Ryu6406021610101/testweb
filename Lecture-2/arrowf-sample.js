// Arrow function with two arguments
const sum = (firstParm , secondParam) => {
    return firstParm + secondParam ;
};
console.log(sum(2,5)) ; // Prints : 7

//Arrow function with no arguments
const printHello = () => {
    console.log("hello") ;
};
printHello(); //Print : hello

//Arrow function with a single argument
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms. `) ;
};
checkWeight(25) ; // Print : Baggage weight : 25 kilogram

//Concise arrow functions
const multiply = (a,b) => a * b ;
console.log(multiply(2,30)) ; //Print : 60  