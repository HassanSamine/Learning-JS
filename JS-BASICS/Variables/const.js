//Const characteristics:

//1.Block-Scoped:

//Similar to let, const variables are accessible
//only within the block, statement, or expression
//in which they are defined.

function exampleFunction() {
    const age = 30;
    if (true) {
        const age = 25; // Different variable from the one declared above
    }
    console.log(age); // Outputs: 30 (accessible only within the block)
}
exampleFunction();

console.log(age); // Error: age is not defined (not accessible outside the block)

//2.Hoisting but no initialization:

//Like let, const variables are hoisted to the top
//of their block but are not initialized until the
//actual declaration is encountered.

console.log(age); // ReferenceError: Cannot access 'age' before initialization
const age = 30;

//No Re-Declaration:

//ttempting to re-declare a variable with const
// in the same scope will result in a SyntaxError.

//const age = 30;
//const age = 25; // SyntaxError: Identifier 'age' has already been declared
