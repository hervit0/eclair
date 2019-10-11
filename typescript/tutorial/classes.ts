namespace Classes {
    export class Greeter {
        greeting: string;

        constructor(message: string) {
            this.greeting = message;
        }

        greet() {
            return "Hello, " + this.greeting;
        }
    }

    export class Animal {
        move(distanceInMeters: number = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }

    export class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }

    class Animais {
        name: string;

        constructor(theName: string) {
            this.name = theName;
        }

        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    // Snake is a derived class of Animais
    class Snake extends Animais {
        // Can only be called inside the class
        private age: number;

        constructor(name: string, ageInput: number) {
            super(name);
            this.age = ageInput;
        }

        move(distanceInMeters = 5) {
            console.log("Slithering...");
            console.log(`This snake is ${this.age} y.o. btw`);
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animais {
        constructor(name: string) {
            super(name);
        }

        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    class Person {
        // Can be called/used by derived classes/collaborator but not by the outside
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    // Protected constructor - only deriving classes can instantiate Pessoa
    class Pessoa {
        protected name: string;

        protected constructor(theName: string) {
            this.name = theName;
        }
    }

    // Employee can extend Person
    class Empregado extends Pessoa {
        private department: string;
        readonly language: string = 'yo';

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    // Getter and Setter
    class Octopus {
        readonly numberOfLegs: number = 8;
        private _lol: string;

        constructor(readonly name: string, lol: string) {
            this._lol = lol;
        }

        get lol(): string {
            return this._lol;
        }

        set lol(newLol: string) {
            if (newLol == "lol") {
                console.log("Mh... I don't think so")
            } else {
                this._lol = newLol;
            }
        }
    }

    // Static properties - lol is a static property
    class Yo {
        static lol = {a: 123, b: 456};

        constructor(public wow: number) {
        }
    }

    abstract class Department {

        constructor(public name: string) {
        }

        printName(): void {
            console.log("Department name: " + this.name);
        }

        abstract printMeeting(): void; // must be implemented in derived classes
    }

    class AccountingDepartment extends Department {

        constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }

        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }

        generateReports(): void {
            console.log("Generating accounting reports...");
        }
    }

    // Using
    class Ola {
        // It is implicit that this is a public static method - see below to see how to change it with typeof
        static standardGreeting = "Hello, there";

        // @ts-ignore
        greeting: string;

        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Ola.standardGreeting;
            }
        }
    }

    // Class can be composed with interface
    class Point {
        // @ts-ignore
        x: number;
        // @ts-ignore
        y: number;
    }

    interface Point3d extends Point {
        z: number;
    }

    export function main() {
        const g = new Greeter("what's up");
        console.log(g.greet());

        const dog = new Dog();
        dog.bark();
        dog.move(10);
        dog.bark();

        let sam = new Snake("Sammy the Python", 12);
        let tom: Animal = new Horse("Tommy the Palomino");

        sam.move();
        tom.move(34);

        let howard = new Employee("Howard", "Sales");
        console.log(howard.getElevatorPitch());
        // console.log(howard.name); // error

        const empregado = new Empregado("John", "Fire");
        // const pessoa = new Pessoa("not possible lol");

        const o = new Octopus("Ursula", "few");
        o.lol;
        console.log(o);
        o.lol = "test";
        console.log(o);
        o.lol = "lol";
        console.log(o);

        console.log(Yo.lol);
        console.log('f');
        const y = new Yo(123);
        console.log(y.wow);

        let department: Department; // ok to create a reference to an abstract type
        // department = new Department(); // error: cannot create an instance of an abstract class
        department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
        department.printName();
        department.printMeeting();
        // department.generateReports(); // error: method doesn't exist on declared abstract type
        const ad = new AccountingDepartment();

        let greeter1: Ola;
        greeter1 = new Ola();
        console.log(greeter1.greet());

        Ola.standardGreeting = "ew changing static property, that is gross";
        const grossOla = new Ola();
        console.log(grossOla.greet());

        let greeterMaker: typeof Ola = Ola;
        greeterMaker.standardGreeting = "Hey there!";

        let greeter2: Ola = new greeterMaker();
        console.log(greeter2.greet());

        let point3d: Point3d = {x: 1, y: 2, z: 3};
        console.log(point3d);
    }
}

Classes.main();
