"use strict";
// index.ts
// Base class representing a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// Subclass representing a student
class Student extends Person {
    constructor(name, age, studentId, course, semester) {
        super(name, age);
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }
    display() {
        super.display();
        console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
}
// Subclass representing a staff member
class Staff extends Person {
    constructor(name, age, staffId, department, position) {
        super(name, age);
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }
    display() {
        super.display();
        console.log(`Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`);
    }
}
// Testing the classes
const student1 = new Student("Alice", 20, "S123", "Computer Science", 3);
const staff1 = new Staff("Dr. Smith", 45, "T456", "Engineering", "Professor");
student1.display();
console.log();
staff1.display();
