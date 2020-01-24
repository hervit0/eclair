import { CachedMascarponeManager, ExpensiveMascarponeManager } from './proxy';

describe('Proxy', () => {
  it('CachedMascarponeManager', () => {
    const expensiveMascarponeManager = new ExpensiveMascarponeManager();
    const cachedMascarponeManager = new CachedMascarponeManager(expensiveMascarponeManager);

    const cheese = cachedMascarponeManager.getCheese(1);
    const { level } = cachedMascarponeManager.getCheese(1);

    expect(level).toEqual(cheese.level);
  });
});
