import { CheeseFactory } from './factory';

describe('Factory', () => {
  it('generateLabel is calling createProduct', () => {
    const cheeseFactory = new CheeseFactory();

    expect(cheeseFactory.generateLabel('Bel')).toEqual('Cheese by Bel');
  });
});
