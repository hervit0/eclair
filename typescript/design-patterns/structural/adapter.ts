export class DefaultCheeseLabelAdapter {
    constructor(private cheeseData: CheeseDataAccessorInterface) {
    }

    public getLabel(name: string): string {
        const cheese = this.cheeseData.getInfo(name);
        return `${cheese.name} - ${cheese.strength}`
    }
}

interface Cheesy {
    name: string
    strength: number
}

interface CheeseDataAccessorInterface {
    getInfo: (name: string) => Cheesy
}

export class DefaultCheeseDataAccessor implements CheeseDataAccessorInterface {
    public getInfo(name: string): Cheesy {
        return {name, strength: 12};
    }
}
