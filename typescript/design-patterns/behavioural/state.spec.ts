import { Baby, Being } from './state';

describe('State', () => {
  it('Being', () => {
    const baby = new Baby(0);
    const being = new Being(baby);

    expect(being.speak()).toEqual('baby');

    being.getOlder(5);
    expect(being.speak()).toEqual('baby');

    being.getOlder(6);
    expect(being.speak()).toEqual('teenager');
  });
});
