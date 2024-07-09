declare let age: number;
declare let phoneNumber: number;
declare let fullName: string;
declare let isStudent: boolean;
declare let numbers: number[];
declare let strings: string[];
declare let booleanArray: boolean[];
declare let person: [string, number, boolean];
declare enum Direction {
    North = 0,
    East = 1,
    South = 2,
    West = 3
}
declare let currentDirection: Direction;
declare let randomValue: any;
declare function logMessage(message: string): void;
declare let nullableValue: null;
declare let undefinedValue: undefined;
declare function addNumbers(a: number, b: number): number;
declare function greet(name: string): string;
declare function logMessage2(message: string): void;
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
}
declare const person2: Person;
type Address = {
    street: string;
    city: string;
    country: string;
};
type PersonWithAddress = {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
};
declare const personWithAddress: PersonWithAddress;
declare const sum: number;
declare const greeting: string;
