interface Mascarpone {
  id: number
  level: string
}

interface CheeseManager {
  getCheese: (id: number) => Mascarpone
}

export class CachedMascarponeManager implements CheeseManager {
  private cache: Map<number, Mascarpone>;

  constructor(private manager: CheeseManager) {
    this.cache = new Map<number, Mascarpone>();
  }

  public getCheese(id: number): Mascarpone {
    const maybeMascarpone = this.cache.get(id);
    return maybeMascarpone ? maybeMascarpone : this.manager.getCheese(id);
  }
}

export class ExpensiveMascarponeManager implements CheeseManager {
  public getCheese(id: number): Mascarpone {
    return {
      id,
      level: Date.now().toString()
    };
  }
}
