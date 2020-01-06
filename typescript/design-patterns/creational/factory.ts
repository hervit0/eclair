interface Product {
  name: string
}

abstract class Factory {
  abstract createProduct: () => Product;

  public generateLabel(company: string): string {
    return `${this.createProduct().name} by ${company}`;
  }
}

export class CheeseFactory extends Factory {
  constructor() {
    super();
  }

  public createProduct = (): Product => ({
    name: 'Cheese'
  });
}

export class WineFactory extends Factory {
  constructor() {
    super();
  }

  public createProduct = (): Product => ({
    name: 'Wine'
  });
}
