import {Singleton} from "./singleton";

describe('Singleton', () => {
    describe('getInstance', () => {
        it('the instance is unique accross the lifecycle', () => {
            const singleton = Singleton.getInstance();
            const instance = Singleton.getInstance();

            expect(singleton.uniqueNumber).toEqual(instance.uniqueNumber)
        });
    });
});
