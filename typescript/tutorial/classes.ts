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

    export function main() {
        const g = new Greeter("what's up");
        console.log(g.greet());
    }
}

Classes.main();
