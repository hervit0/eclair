interface Human {
  age: number
  getOlder: (extra: number) => void
  speak: string
  setBeing: (being: Being) => void
  being?: Being
}

export class Being {
  constructor(public human: Human) {
    human.setBeing(this);
  }

  public age() {
    return this.human.age;
  }

  public speak() {
    return this.human.speak;
  }

  public getOlder(extra: number) {
    this.human.getOlder(extra);
  }

  public setHuman(human: Human) {
    this.human = human;
    human.setBeing(this);
  }
}

export class Baby implements Human {
  public speak: string;
  public being?: Being;

  constructor(public age: number) {
    this.speak = 'baby';
  }

  public getOlder(extra: number) {
    this.age = this.age + extra;
    if (this.age > 10) {
      this.being!.setHuman(new Teenager(this.age));
    }
  }

  public setBeing(being: Being) {
    this.being = being;
  }
}

export class Teenager implements Human {
  public speak: string;
  public being?: Being;

  constructor(public age: number) {
    this.speak = 'teenager';
  }

  public getOlder(extra: number) {
    this.age = this.age + extra;
  }

  public setBeing(being: Being) {
    this.being = being;
  }
}
