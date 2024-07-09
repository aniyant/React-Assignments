// index.ts

// Numeric Types
let age: number = 25;
let phoneNumber: number = 75740092;

// String Type
let fullName: string = "John Doe";

// Boolean Type
let isStudent: boolean = true;

// Array Types
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];
let booleanArray: boolean[] = [true, false, true];

// Tuple Type
let person: [string, number,boolean] = ["Alice", 30,false];

// Enum Type
enum Direction {
    North,
    East,
    South,
    West
}
let currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";
randomValue = 42; 
randomValue = true; 
randomValue = ["Hello", "sdf"]
randomValue = {"sdf":2}

// Void Type
function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined Types
let nullableValue: null = null;
let undefinedValue: undefined = undefined;

// index.ts

// Function Declarations

// Function that adds two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Function that greets a person
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Function that returns nothing (void)
function logMessage2(message: string): void {
    console.log(message);
}

// Object Types

// Define an interface for a person object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
}

// Create a person object using the interface
const person2: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isStudent: true
};

// Define a type alias for a complex data structure
type Address = {
    street: string;
    city: string;
    country: string;
};

// Define a type alias for a person with an address
type PersonWithAddress = {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
};

// Create an object using the type alias
const personWithAddress: PersonWithAddress = {
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
const sum: number = addNumbers(10, 20);
console.log("Sum:", sum); // Output: Sum: 30

// Test greeting function
const greeting: string = greet("Alice");
console.log(greeting); // Output: Hello, Alice!

// Log a message using void function
logMessage("This is a test message.");

// Access object properties
console.log(`${personWithAddress.firstName} lives in ${personWithAddress.address.city}.`); // Output: Alice lives in Anytown.
