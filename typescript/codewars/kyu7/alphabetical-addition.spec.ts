import {addLetters} from "./alphabetical-addition";

interface Case {
    inputs: string[]
    expectation: string
}

xdescribe("Fixed tests", () => {
    const tests: Case[] = [
        {inputs: ['a', 'b', 'c'], expectation: 'f'},
        {inputs: ['z'], expectation: 'z'},
        {inputs: ['a', 'b'], expectation: 'c'},
        {inputs: ['c'], expectation: 'c'},
        {inputs: ['z', 'a'], expectation: 'a'},
        {inputs: ['y', 'c', 'b'], expectation: 'd'},
        {inputs: [], expectation: 'z'}
    ];

    it("Tests", () => {
        for (let testCase of tests) {
            expect(addLetters(...testCase.inputs)).toEqual(testCase.expectation);
        }
    })
});
