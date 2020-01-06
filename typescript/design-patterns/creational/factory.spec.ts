import { CheeseFactory, WineFactory } from './factory';

describe('Factory', () => {
  it('generateLabel is calling createProduct', () => {
    const cheeseFactory = new CheeseFactory();

    expect(cheeseFactory.generateLabel('Bel')).toEqual('Cheese by Bel');
  });

  it('generateLabel is calling createProduct', () => {
    const wineFactory = new WineFactory();

    expect(wineFactory.generateLabel('Rhone')).toEqual('Wine by Rhone');
  });
});
