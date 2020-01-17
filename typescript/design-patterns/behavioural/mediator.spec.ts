import { FrancoPortugueseCheeseMediator, FrenchMandatedCheese, PortugueseMandatedCheese } from './mediator';

describe('Mediator', () => {
  it('notify', () => {
    const mediator = new FrancoPortugueseCheeseMediator();
    const portugueseMandatedCheese = new PortugueseMandatedCheese(mediator);
    const frenchMandatedCheese = new FrenchMandatedCheese(mediator);
    mediator.setup(frenchMandatedCheese, portugueseMandatedCheese);

    const not1 = portugueseMandatedCheese.operation('delicioso');
    const not2 = frenchMandatedCheese.operation('delicieux');

    expect(not1).toEqual('Ici - delicioso - emitted by Portugal');
    expect(not2).toEqual('Aqui - delicieux - emitted by France');
  });
});
