import {BuilderDirector, CheeseBuilder} from "./builder";

describe('Builder', () => {
    it('build first recipe', () => {
        const cheeseBuilder = new CheeseBuilder();
        const director = new BuilderDirector(cheeseBuilder);

        director.makeFrenchCheese();
        const {label, safetyInfo} = cheeseBuilder.cheese();

        expect(label).toEqual('From France');
        expect(safetyInfo).toEqual('High Risk');
    });

    it('build second recipe', () => {
        const cheeseBuilder = new CheeseBuilder();
        const director = new BuilderDirector(cheeseBuilder);

        director.makePortugueseCheese();
        const {label, safetyInfo} = cheeseBuilder.cheese();

        expect(label).toEqual('From Portugal');
        expect(safetyInfo).toEqual('Low Risk');
    });
});
