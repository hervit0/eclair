import { anyNumber, anyString, instance, mock, verify, when } from 'ts-mockito';
import { DefaultCheeseMaker, GoatMilkProvider, SafePasteurizationExecutor } from './facade';

describe('Facade', () => {
  it('DefaultCheeseMaker - testing result', () => {
    const milkProvider = mock(GoatMilkProvider);
    when(milkProvider.getMilk(anyString())).thenReturn('mock milk');
    const pasteurizationExecutor = mock(SafePasteurizationExecutor);
    when(pasteurizationExecutor.pasteurize(anyNumber())).thenReturn('mock pasteur');

    const cheeseMaker = new DefaultCheeseMaker(instance(milkProvider), instance(pasteurizationExecutor));

    const cheese = cheeseMaker.makeCheddar('does not matter', 1);

    expect(cheese).toEqual('cheese-mock milk-mock pasteur');
  });

  it('DefaultCheeseMaker - testing calls', () => {
    const country = 'Portugal';
    const smell = 21;

    const milkProvider = mock(GoatMilkProvider);
    const pasteurizationExecutor = mock(SafePasteurizationExecutor);
    const cheeseMaker = new DefaultCheeseMaker(instance(milkProvider), instance(pasteurizationExecutor));

    const cheese = cheeseMaker.makeCheddar(country, smell);

    verify(milkProvider.getMilk(country)).once();
    verify(pasteurizationExecutor.pasteurize(smell)).once();
  });
});
