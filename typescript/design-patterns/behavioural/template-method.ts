abstract class CheeseCrust {
  constructor(public name: string, public code: number) {
  }

  public label() {
    return `${this.name} - ${this.smell()} - ${this.producer()}`;
  }

  public smell(): string {
    return this.code > 10 ? 'Wow' : 'Ok';
  }

  abstract producer(): string
}

export class PortugueseCrust extends CheeseCrust {
  constructor(public name: string, public code: number) {
    super(name, code);
  }

  public producer(): string {
    return 'Porto';
  }
}

export class FrenchCrust extends CheeseCrust {
  constructor(public name: string, public code: number) {
    super(name, code);
  }

  public smell(): string {
    return 'Bien';
  }

  public producer(): string {
    return 'Paris';
  }
}
