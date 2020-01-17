interface WithMemento {
  save: () => CheeseMemento
  restore: (memento: CheeseMemento) => void
}

export class CheeseMemento {
  readonly sealedCheese: CheeseState;

  constructor(cheese: CheeseState) {
    this.sealedCheese = cheese;
  }
}

export class CheeseState implements WithMemento {
  constructor(public smellLevel: number) {
  }

  public save() {
    // Otherwise it's mutating the object inside the whole history
    const snapshot = Object.assign({}, this);
    return new CheeseMemento(snapshot);
  }

  public restore(cheeseMemento: CheeseMemento) {
    this.smellLevel = cheeseMemento.sealedCheese.smellLevel;
  }

  public age() {
    this.smellLevel = this.smellLevel + 10;
  }

  public superAge() {
    this.smellLevel = this.smellLevel + 100;
  }
}

export class CheeseCaretaker {
  private cheeseStateHistory: CheeseMemento[];

  constructor(public cheeseState: CheeseState) {
    this.cheeseStateHistory = [];
  }

  public ageCheese() {
    // Saving current state before alterating it
    this.snapshot();
    this.cheeseState.age();
  };

  public superAgeCheese() {
    this.snapshot();
    this.cheeseState.superAge();
  }

  public undo() {
    const memento = this.cheeseStateHistory.pop();
    if (memento) {
      this.cheeseState.restore(memento);
    }
  }

  private snapshot() {
    const memento = this.cheeseState.save();
    // Eventually here we can TTL the history, limit the size or deleguate to a dedicated class
    this.cheeseStateHistory.push(memento);
  }
}
