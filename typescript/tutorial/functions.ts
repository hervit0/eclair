namespace Functions {
    // Strongly type function
    type AdditionFunction = (x: number, y: number) => number

    let myAdditionFunction: AdditionFunction;
    // the return type of the function is omitted - contextual typing
    myAdditionFunction = function (x, y) {
        // IT'S A TRAP
        return x - y;
    };

    // Optional and default parameters
    function wow(myOpt?: string, myDefault = "myDefault") {
        if (myOpt) {
            return myOpt + " " + myDefault;
        }
        return myDefault;
    }

    // Splat op
    function lol(x: number, ...ys: number[]): number {
        return x + ys.reduce((acc, ite) => acc + ite)
    }

    // -- Execute
    export function main() {
        console.log(myAdditionFunction(12, 32));

        console.log(wow());
        console.log(wow("hey"));
        console.log(wow("yellow", "submarine"));

        console.log(lol(1, 2, 3, 4, 5, 5, 6))
    }
}

// npx ts-node tutorial/functions.ts
Functions.main();
