//VAR characteristics:

//1.Function Scoped:

//A variable declared with var is accessible
//throughout the function where it's declared.
//If it's declared outside any function, it becomes
//a global variable.

function exampleFunction() {
    var age = 30;
    if (true) {
        var age = 25; // Same variable as the one declared above
    }
    console.log(age); // Outputs: 25 (accessible throughout the function)
}
exampleFunction();

console.log(age); // Error: age is not defined (age is not accessible outside the function)

//2.Hoisting:

//Variables declared with var are moved to the top of
//their scope(function or global) during the compile
//phase and initialized with undefined.

console.log(age); // Outputs: undefined (due to hoisting)
var age = 30;

//Here, the JavaScript engine treats the code like this:

var age;
console.log(age); // Outputs: undefined
age = 30;

//3.Re-Declaration:

//A variable declared with var can be re-declared within
//the same scope without causing an error.

var age = 30;
var age = 25; // Re-declaring the same variable
console.log(age); // Outputs: 25
