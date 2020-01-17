interface DiaryProduct {
  name: string
}

interface Command {
  execute: () => DiaryProduct
}

interface Executor {
  operation: () => DiaryProduct
}

export class MakeMilkCommand implements Command {
  // if the executor is complicated command/executor can be decoupled
  constructor(private executor: Executor) {
  }

  public execute() {
    return this.executor.operation();
  }
}

export class MakeButterCommand implements Command {
  // if the command is simple enough
  public execute() {
    return { name: 'butter' };
  }
}

export class MilkExecutor implements Executor {
  constructor(private cow: string) {
  }

  public operation() {
    return { name: `milk from ${this.cow}` };
  }
}

export class ButterFactory {
  constructor(private command: Command) {
  }

  public do() {
    return this.command.execute();
  }
}

export class MilkFactory {
  constructor(private command: Command) {
  }

  public do() {
    return this.command.execute();
  }
}
