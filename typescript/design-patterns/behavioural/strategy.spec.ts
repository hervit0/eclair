import { BlueStrategy, RedStrategy, StrategyContext } from './strategy';

describe('Strategy', () => {
  it('Runtime changed', () => {
    const redStrategy = new RedStrategy();
    const blueStrategy = new BlueStrategy();
    const context = new StrategyContext(redStrategy);

    expect(context.act('yo')).toEqual('Red > yo');
    context.strategy = blueStrategy;
    expect(context.act('hello')).toEqual('Blue > hello');
  });
});
