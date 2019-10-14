namespace Generics {
    interface Lengthwise {
        length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    class BeeKeeper {
        // @ts-ignore
        hasMask: boolean;
    }

    class ZooKeeper {
        // @ts-ignore
        nametag: string;
    }

    class Animal {
        // @ts-ignore
        numLegs: number;
    }

    class Bee extends Animal {
        // @ts-ignore
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        // @ts-ignore
        keeper: ZooKeeper;
    }

    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }

    export function main() {
        loggingIdentity("32");

        const l = createInstance(Lion).keeper.nametag;
        const b = createInstance(Bee).keeper.hasMask;
    }
}

Generics.main();