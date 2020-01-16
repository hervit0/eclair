export class BuilderDirector {
    constructor(private builder: Builder) {
    }

    public makeFrenchCheese() {
        this.builder.generateLabel("France");
        this.builder.generateSafetyInfo(50);
    }

    public makePortugueseCheese() {
        this.builder.generateLabel("Portugal");
        this.builder.generateSafetyInfo(0);
    }

    public makeTastelessCheese(origin: string) {
        this.builder.generateLabel(origin);
        this.builder.generateSafetyInfo(-10);
    }
}

interface Builder {
    reset: () => void
    generateLabel: (origin: string) => void
    generateSafetyInfo: (riskLevel: number) => void
}

export class CheeseBuilder implements Builder {
    public label?: string;
    public safetyInfo?: string;

    public cheese(): CheeseBuilder {
        return this
    }

    public reset(): void {
        this.label = undefined;
        this.safetyInfo = undefined;
    }

    public generateLabel(origin: string): void {
        this.label = `From ${origin}`
    };

    public generateSafetyInfo(riskLevel: number): void {
        this.safetyInfo = riskLevel > 10 ? "High Risk" : "Low Risk"
    };
}
