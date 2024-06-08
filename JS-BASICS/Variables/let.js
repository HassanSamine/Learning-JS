//LET Characteristics:

//1.Block Scoped:

//Variables declared with let are limited in scope
//to the block, statement, or expression in which
//they are defined, unlike var which is function-scoped.

function exampleFunction() {
    let age = 30;
    if (true) {
        let age = 25; // Different variable from the one declared above
    }
    console.log(age); // Outputs: 30 (accessible only within the block)
}
exampleFunction();

console.log(age); // Error: age is not defined (not accessible outside the block)

//2.Hoisting but no Initialization:

//let variables are hoisted to the top of their block, 
//but they are not initialized until the actual declaration
//is encountered.Accessing the variable before its declaration results in a ReferenceError.

console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 30;

//3.No Re-declaration:
//attempting to re-declare a variable with let in the
//same scope will result in a SyntaxError.

//let age = 30;
//let age = 25; // SyntaxError: Identifier 'age' has already been declared
