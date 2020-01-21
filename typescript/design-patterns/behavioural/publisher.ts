interface CheeseRequest {
  id: number
}

interface CheeseContext {
  data: string
}

interface CheeseSubscriber {
  id: string
  update: (context: CheeseContext) => void
}

export class CheeseHolderNothingToDoWithPattern {
  constructor(public data: string[]) {
  }
}

export class CheddarSubscriber implements CheeseSubscriber {
  constructor(public id: string, private holder: CheeseHolderNothingToDoWithPattern) {
  }

  public update(context: CheeseContext) {
    const message = `Cheddar ${this.id}: ${context.data}`;
    this.holder.data.push(message);
  }
}

export class BrieSubscriber implements CheeseSubscriber {
  constructor(public id: string, private holder: CheeseHolderNothingToDoWithPattern) {
  }

  public update(context: CheeseContext) {
    const message = `Brie ${this.id}: ${context.data}`;
    this.holder.data.push(message);
  }
}

export class CheesePublisher {
  constructor(private subscribers: CheeseSubscriber[]) {
  }

  public subscribe(subscriber: CheeseSubscriber) {
    this.subscribers.push(subscriber);
  }

  public unsubscribe(subscriberId: string) {
    this.subscribers = this.subscribers.filter(({ id }) => id !== subscriberId);
  }

  public notifySubscribers(request: CheeseRequest) {
    const context = CheesePublisher.createContext(request);
    this.subscribers.forEach((subscriber) => subscriber.update(context));
  }

  private static createContext(request: CheeseRequest): CheeseContext {
    return { data: `Request id: ${request.id}` };
  }
}
