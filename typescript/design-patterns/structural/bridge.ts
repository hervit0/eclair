export class CheeseAnalyzer {
    constructor(private cheeseDescriptor: CheeseDescriptor) {
    }

    public label(): string {
        return `From ${this.cheeseDescriptor.origin()}`
    }

    public flavour(): string {
        return this.cheeseDescriptor.age() > 10 ? 'Good' : this.cheeseDescriptor.smell()
    }
}

interface CheeseDescriptor {
    smell: () => string
    age: () => number
    origin: () => string
}

export class DefaultCheeseDescriptor implements CheeseDescriptor {
    public age(): number {
        return 42;
    }

    public origin(): string {
        return 'France';
    };

    public smell(): string {
        return 'For sure'
    };
}

