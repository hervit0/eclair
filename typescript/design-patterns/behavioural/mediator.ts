interface CheeseMediator {
  notify: (sender: MandatedCheese, request: Request) => string
}

interface MandatedCheese {
  cheeseMediator: CheeseMediator
  operation: (taste: string) => void
}

interface Request {
  taste: string
  origin: string
}

export class FrenchMandatedCheese implements MandatedCheese {
  constructor(public cheeseMediator: CheeseMediator) {
  }

  public operation(taste: string) {
    return this.cheeseMediator.notify(this, { taste, origin: 'France' });
  }

  public action(request: Request) {
    return `Ici - ${request.taste} - emitted by ${request.origin}`;
  }
}

export class PortugueseMandatedCheese implements MandatedCheese {
  constructor(public cheeseMediator: CheeseMediator) {
  }

  public operation(taste: string) {
    return this.cheeseMediator.notify(this, { taste, origin: 'Portugal' });
  }

  public acao(request: Request) {
    return `Aqui - ${request.taste} - emitted by ${request.origin}`;
  }
}

export class FrancoPortugueseCheeseMediator implements CheeseMediator {
  public frenchMandatedCheese?: FrenchMandatedCheese;
  public portugueseMandatedCheese?: PortugueseMandatedCheese;

  // Circular dependencies problem
  public setup(frenchMandatedCheese: FrenchMandatedCheese, portugueseMandatedCheese: PortugueseMandatedCheese) {
    this.frenchMandatedCheese = frenchMandatedCheese;
    this.portugueseMandatedCheese = portugueseMandatedCheese;
  }

  public notify(sender: MandatedCheese, request: Request) {
    if (sender instanceof FrenchMandatedCheese) {
      return this.portugueseMandatedCheese!.acao(request);
    } else if (sender instanceof PortugueseMandatedCheese) {
      return this.frenchMandatedCheese!.action(request);
    } else {
      return 'Out of jurisdiction';
    }
  }
}
