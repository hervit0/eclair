interface CheesePrototype {
    milk: string
    index: number
    clone: () => CheesePrototype
}

export class Cheedar implements CheesePrototype {
    constructor(public milk: string, public index: number) {
    }

    public clone(): Cheedar {
        return new Cheedar(this.milk, this.index)
    }
}

export class Brie implements CheesePrototype {
    public label: string;

    constructor(public milk: string, public index: number) {
        this.label = `${milk} - ${index}`
    }

    public clone(): Brie {
        return new Brie(this.milk, this.index)
    }
}
