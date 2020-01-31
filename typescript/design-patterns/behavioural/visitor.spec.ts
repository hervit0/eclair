import { BlueCheese, DefaultCheeseVisitor, RedCheese } from './visitor';

describe('Visitor', () => {
  it('Runtime changed', () => {
    const red = new RedCheese();
    const blue = new BlueCheese();

    const visitor = new DefaultCheeseVisitor();

    expect(visitor.visitBlue(blue)).toEqual('Audited: Hello');
    expect(visitor.visitRed(red)).toEqual('Audited: Red Cheese');
  });
});
