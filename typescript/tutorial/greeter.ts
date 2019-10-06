// From: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
// Public key words on the constructor: macro to create queryable atts
// Student comply to Person as the fields from the interface are implemented

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// This struct is an implementation of Person interface
let userInterface = { firstName: "Jane", lastName: "User" };
// Invokes the only constructor of the Student class
let student = new Student("Jane", "M.", "User");

console.log(greeter(userInterface))
console.log(greeter(student))
console.log(student.fullName)

// document.body.textContent = greeter(user);
