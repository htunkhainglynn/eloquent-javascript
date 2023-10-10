### NOTES

- A fragment of code that produces a value is called an expression.

- Expressions produce values, and they can be used within statements to compute and manipulate those values. Statements, on the other hand, control the execution flow and perform actions within a program. Understanding the difference between expressions and statements is essential for writing effective and structured code.

```
// Variable declaration statement
let age;

// Conditional statement (if-else)
if (age >= 18) {  // age >= 18 is expression
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// Loop statement (for)
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}

// Function declaration statement
function greet(name) {
    console.log("Hello, " + name + "!");
}

```