interface IterableCheeses {
  provideAlphabeticalCheeseIterator: () => CheeseIterator
  provideOrderedCheeseIterator: () => CheeseIterator
  provideOrderedCheeseIterator2: () => CheeseIterator
}

interface CheeseIterator {
  getNext: () => Cheese | undefined
  hasMore: boolean
}

interface Cheese {
  name: string
}

// CheddarCheeses is acting like a wrapper to provide iterators on a simple array of Cheese
export class CheddarCheeses implements IterableCheeses {
  constructor(private cheeses: Cheese[]) {
  }

  public provideAlphabeticalCheeseIterator(): CheeseIterator {
    return new AlphabeticalCheeseIterator(this.cheeses);
  };

  public provideOrderedCheeseIterator(): CheeseIterator {
    return new OrderedCheeseIterator(this.cheeses);
  };

  public provideOrderedCheeseIterator2(): CheeseIterator {
    return new OrderedCheeseIteratorMark2(this.cheeses);
  };
}

class AlphabeticalCheeseIterator implements CheeseIterator {
  private currentCheeseIndex: number;
  private cheeses: Cheese[];
  public hasMore: boolean;

  constructor(cheeses: Cheese[]) {
    this.cheeses = cheeses.concat().sort((a, b) => a.name.localeCompare(b.name));
    this.currentCheeseIndex = 0;
    this.hasMore = cheeses.length > 0;
  }

  // Index base, cheeses array is never mutated
  public getNext() {
    const currentCheese = this.cheeses[this.currentCheeseIndex];
    if (this.cheeses[this.currentCheeseIndex]) {
      this.currentCheeseIndex = this.currentCheeseIndex + 1;
      this.hasMore = this.currentCheeseIndex < this.cheeses.length;
    }
    return currentCheese;
  };
}

class OrderedCheeseIterator implements CheeseIterator {
  private currentCheeseIndex: number;
  public hasMore: boolean;

  constructor(private cheeses: Cheese[]) {
    this.currentCheeseIndex = 0;
    this.hasMore = cheeses.length > 0;
  }

  // Index base, cheeses array is never mutated
  public getNext() {
    const currentCheese = this.cheeses[this.currentCheeseIndex];
    if (this.cheeses[this.currentCheeseIndex]) {
      this.currentCheeseIndex = this.currentCheeseIndex + 1;
      this.hasMore = this.currentCheeseIndex < this.cheeses.length;
    }
    return currentCheese;
  };
}

class OrderedCheeseIteratorMark2 implements CheeseIterator {
  public hasMore: boolean;

  constructor(private cheeses: Cheese[]) {
    this.hasMore = cheeses.length > 0;
  }

  // shift() mutating this.cheeses
  public getNext() {
    const currentCheese = this.cheeses.shift();
    this.hasMore = this.cheeses.length > 0;
    return currentCheese;
  };
}
