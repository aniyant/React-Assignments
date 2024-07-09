// index.ts
// Numeric Types
let age = 25;
let phoneNumber = 75740092;
// String Type
let fullName = "John Doe";
// Boolean Type
let isStudent = true;
// Array Types
let numbers = [1, 2, 3, 4, 5];
let strings = ["apple", "banana", "cherry"];
let booleanArray = [true, false, true];
// Tuple Type
let person = ["Alice", 30, false];
// Enum Type
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let currentDirection = Direction.North;
// Any Type
let randomValue = "Hello";
randomValue = 42;
randomValue = true;
randomValue = ["Hello", "sdf"];
randomValue = { "sdf": 2 };
// Void Type
function logMessage(message) {
    console.log(message);
}
// Null and Undefined Types
let nullableValue = null;
let undefinedValue = undefined;
// index.ts
// Function Declarations
// Function that adds two numbers
function addNumbers(a, b) {
    return a + b;
}
// Function that greets a person
function greet(name) {
    return `Hello, ${name}!`;
}
// Function that returns nothing (void)
function logMessage2(message) {
    console.log(message);
}
// Create a person object using the interface
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true
};
// Create an object using the type alias
const personWithAddress = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
// Testing
// Test numeric addition function
const sum = addNumbers(10, 20);
console.log("Sum:", sum); // Output: Sum: 30
// Test greeting function
const greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!
// Log a message using void function
logMessage("This is a test message.");
// Access object properties
console.log(`${personWithAddress.firstName} lives in ${personWithAddress.address.city}.`); // Output: Alice lives in Anytown.
//# sourceMappingURL=index.js.map