import { BundleFactory, FrenchCompany, PortugueseCompany } from './abstract-factory';

describe('AbstractFactory', () => {
  it('using first concrete implementation', () => {
    const factory = new PortugueseCompany();
    const bundleFactory = new BundleFactory(factory);

    const bundle = bundleFactory.createChrismasBundle();

    expect(bundle.cheese).toEqual({ 'brand': 'Queijo - Christmas', 'timeToEat': 2008 });
    expect(bundle.wine).toEqual({ 'brand': 'Port wine - Christmas' });
  });

  it('using second concrete implementation', () => {
    const factory = new FrenchCompany();
    const bundleFactory = new BundleFactory(factory);

    const bundle = bundleFactory.createChrismasBundle();

    expect(bundle.cheese).toEqual({ 'brand': 'Fromage - Christmas', 'timeToEat': 2002 });
    expect(bundle.wine).toEqual({ 'brand': 'Saint Emilion - Christmas' });
  });
});
