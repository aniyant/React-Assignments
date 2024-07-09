// index.ts

// Base class representing a person
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Subclass representing a student
class Student extends Person {
    studentId: string;
    course: string;
    semester: number;

    constructor(name: string, age: number, studentId: string, course: string, semester: number) {
        super(name, age);
        this.studentId = studentId;
        this.course = course;
        this.semester = semester;
    }

    display(): void {
        super.display();
        console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
}

// Subclass representing a staff member
class Staff extends Person {
    staffId: string;
    department: string;
    position: string;

    constructor(name: string, age: number, staffId: string, department: string, position: string) {
        super(name, age);
        this.staffId = staffId;
        this.department = department;
        this.position = position;
    }

    display(): void {
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
