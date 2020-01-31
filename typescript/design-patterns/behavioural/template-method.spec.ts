import { FrenchCrust, PortugueseCrust } from './template-method';

describe('Template method', () => {
  it('Template method - no override', () => {
    const crust = new PortugueseCrust('Queijio', 15);

    const label = crust.label();

    expect(label).toEqual('Queijio - Wow - Porto');
  });

  it('Template method - no override', () => {
    const crust = new PortugueseCrust('Queijio', 0);

    const label = crust.label();

    expect(label).toEqual('Queijio - Ok - Porto');
  });

  it('Template method - override', () => {
    const crust = new FrenchCrust('Fromage', 15);

    const label = crust.label();

    expect(label).toEqual('Fromage - Bien - Paris');
  });

  it('Template method - override', () => {
    const crust = new FrenchCrust('Fromage', 0);

    const label = crust.label();

    expect(label).toEqual('Fromage - Bien - Paris');
  });
});
