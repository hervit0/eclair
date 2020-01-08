interface Wine {
  brand: string
}

interface Cheese {
  brand: string
  timeToEat: number
}

export class BundleFactory {
  constructor(private factory: AbstractFactory) {
  }

  public createChrismasBundle() {
    const cheese = this.factory.createCheese('Christmas', 12);
    const wine = this.factory.createWine('Christmas');
    return { cheese, wine };
  }
}

interface AbstractFactory {
  createWine: (brand: string) => Wine
  createCheese: (brand: string, age: number) => Cheese
}

export class PortugueseCompany implements AbstractFactory {
  public createCheese(brand: string, age: number): Cheese {
    return {
      brand: `Queijo - ${brand}`,
      timeToEat: 2020 - age
    };
  }

  public createWine(brand: string): Wine {
    return { brand: `Port wine - ${brand}` };
  }
}

export class FrenchCompany implements AbstractFactory {
  public createCheese(brand: string, age: number): Cheese {
    return {
      brand: `Fromage - ${brand}`,
      timeToEat: 1990 + age
    };
  }

  public createWine(brand: string): Wine {
    return { brand: `Saint Emilion - ${brand}` };
  }
}

