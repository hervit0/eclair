export class StrategyContext {
  constructor(public strategy: Strategy) {
  }

  public act(request: string) {
    return this.strategy.deliver(request);
  }
}

interface Strategy {
  deliver: (request: string) => string
}

export class RedStrategy implements Strategy {
  public deliver(request: string): string {
    return `Red > ${request}`;
  }
}

export class BlueStrategy implements Strategy {
  public deliver(request: string): string {
    return `Blue > ${request}`;
  }
}
