import { CheeseCaretaker, CheeseState } from './memento';

describe('Memento', () => {
  it('testing history', () => {
    const cheese = new CheeseState(42);
    const cheeseCaretaker = new CheeseCaretaker(cheese);

    cheeseCaretaker.ageCheese();
    cheeseCaretaker.superAgeCheese();
    cheeseCaretaker.ageCheese();
    cheeseCaretaker.undo();
    cheeseCaretaker.undo();

    expect(cheeseCaretaker.cheeseState.smellLevel).toEqual(52);
  });
});
