import {Chedar, DualBox, MaxiBox} from "./composite";

describe('Composite', () => {
    it('Simple Chedar', () => {
        const chedar = new Chedar(true);

        const smell = chedar.releaseSmell();

        expect(smell).toEqual(10);
    });

    it('Dual Chedar box', () => {
        const smellyChedar = new Chedar(true);
        const okChedar = new Chedar(false);
        const firstBox = new DualBox(smellyChedar, smellyChedar);
        const box = new DualBox(okChedar, firstBox);

        const smell = box.releaseSmell();

        expect(smell).toEqual(21);
    });

    it('Maxi Chedar box', () => {
        const smellyChedar = new Chedar(true);
        const okChedar = new Chedar(false);
        const firstBox = new MaxiBox([smellyChedar, smellyChedar, smellyChedar]);
        const box = new MaxiBox([okChedar, firstBox, firstBox, okChedar]);

        const smell = box.releaseSmell();

        expect(smell).toEqual(62);
    });
});
