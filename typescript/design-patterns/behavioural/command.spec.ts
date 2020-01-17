import { ButterFactory, MakeButterCommand, MakeMilkCommand, MilkExecutor, MilkFactory } from './command';

describe('Command', () => {
  it('Butter invoker', () => {
    const makeButterCommand = new MakeButterCommand();
    const butterFactory = new ButterFactory(makeButterCommand);

    const milk = butterFactory.do();

    expect(milk).toEqual({ name: 'butter' });
  });

  it('Milk invoker', () => {
    const milkExecutor = new MilkExecutor('Angus cattle');
    const makeMilkCommand = new MakeMilkCommand(milkExecutor);
    const milkFactory = new MilkFactory(makeMilkCommand);

    const milk = milkFactory.do();

    expect(milk).toEqual({ name: 'milk from Angus cattle' });
  });
});
