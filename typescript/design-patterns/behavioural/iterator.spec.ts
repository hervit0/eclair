import { CheddarCheeses } from './iterator';

describe('Iterator', () => {
  const cheddars = [
    { name: 'Pilgrims Choice' },
    { name: 'Davidstow Cheddar' },
    { name: 'Dorset Drum' }
  ];

  it('Alphabetical iterator', () => {
    const cheddarCheeses = new CheddarCheeses(cheddars);
    const iterator = cheddarCheeses.provideAlphabeticalCheeseIterator();

    expect(iterator.getNext()!.name).toEqual('Davidstow Cheddar');
    expect(iterator.hasMore).toBeTruthy();
    expect(iterator.getNext()!.name).toEqual('Dorset Drum');
    expect(iterator.hasMore).toBeTruthy();
    expect(iterator.getNext()!.name).toEqual('Pilgrims Choice');
    expect(iterator.hasMore).toBeFalsy();
  });

  it('Ordered iterator', () => {
    const cheddarCheeses = new CheddarCheeses(cheddars);
    const iterator = cheddarCheeses.provideOrderedCheeseIterator();

    expect(iterator.getNext()!.name).toEqual('Pilgrims Choice');
    expect(iterator.hasMore).toBeTruthy();
    expect(iterator.getNext()!.name).toEqual('Davidstow Cheddar');
    expect(iterator.hasMore).toBeTruthy();
    expect(iterator.getNext()!.name).toEqual('Dorset Drum');
    expect(iterator.hasMore).toBeFalsy();
  });

  it('Ordered iterator', () => {
    const cheddarCheeses = new CheddarCheeses(cheddars);
    const iterator = cheddarCheeses.provideOrderedCheeseIterator2();

    expect(iterator.getNext()!.name).toEqual('Pilgrims Choice');
    expect(iterator.hasMore).toBeTruthy();
    expect(iterator.getNext()!.name).toEqual('Davidstow Cheddar');
    expect(iterator.hasMore).toBeTruthy();
    expect(iterator.getNext()!.name).toEqual('Dorset Drum');
    expect(iterator.hasMore).toBeFalsy();
  });
});
