interface MilkProvider {
  getMilk: (country: string) => string
}

export class GoatMilkProvider implements MilkProvider {
  public getMilk(country: string) {
    return `${country}-goat`;
  }
}

interface PasteurizationExecutor {
  pasteurize: (smell: number) => string
}

export class SafePasteurizationExecutor implements PasteurizationExecutor {
  public pasteurize(smell: number) {
    return smell > 10 ? 'wow' : 'all-good';
  }

}

interface CheeseMaker {
  milkProvider: MilkProvider
  pasteurizationExecutor: PasteurizationExecutor
}

export class DefaultCheeseMaker implements CheeseMaker {
  constructor(
    public milkProvider: MilkProvider,
    public pasteurizationExecutor: PasteurizationExecutor
  ) {
  }

  public makeCheddar(country: string, smell: number) {
    const milk = this.milkProvider.getMilk(country);
    const pasteurize = this.pasteurizationExecutor.pasteurize(smell);
    return `cheese-${milk}-${pasteurize}`;
  }
}
