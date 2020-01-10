import {CheeseAnalyzer, DefaultCheeseDescriptor} from "./bridge";

describe('Bridge', () => {
    it('CheeseAnalyzer bridges DefaultCheeseDescriptor', () => {
        const descriptor = new DefaultCheeseDescriptor();
        const analyzer = new CheeseAnalyzer(descriptor);

        const flavour = analyzer.flavour();
        const label = analyzer.label();

        expect(flavour).toEqual('Good');
        expect(label).toEqual('From France');
    });
});
