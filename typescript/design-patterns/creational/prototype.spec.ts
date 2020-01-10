import {Cheedar} from "./prototype";

describe('CheesePrototype', () => {
    it('clonability', () => {
        const cheedar = new Cheedar('goat', Math.random());

        const {index, milk} = cheedar.clone();

        expect(index).toEqual(cheedar.index);
        expect(milk).toEqual(cheedar.milk);
    });
});
