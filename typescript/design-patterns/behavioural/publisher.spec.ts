import { BrieSubscriber, CheddarSubscriber, CheeseHolderNothingToDoWithPattern, CheesePublisher } from './publisher';

describe('Observer', () => {
  it('do it', () => {
    const holder = new CheeseHolderNothingToDoWithPattern([]);
    const cheddarSubscriber = new CheddarSubscriber('α', holder);
    const brieSubscriber = new BrieSubscriber('β', holder);

    const pub = new CheesePublisher([]);

    pub.subscribe(cheddarSubscriber);
    pub.notifySubscribers({ id: 1 });
    pub.subscribe(brieSubscriber);
    pub.notifySubscribers({ id: 2 });
    pub.unsubscribe('α');
    pub.notifySubscribers({ id: 3 });

    expect(holder.data).toEqual([
      'Cheddar α: Request id: 1',
      'Cheddar α: Request id: 2',
      'Brie β: Request id: 2',
      'Brie β: Request id: 3'
    ]);
  });
});
