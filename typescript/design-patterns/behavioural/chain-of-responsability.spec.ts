import {SoftCheeseHandler, StrongCheeseHandler} from "./chain-of-responsability";

describe('Chain Of Responsability', () => {
    it('using first concrete implementation', () => {
        const strongCheeseHandler = new StrongCheeseHandler();
        const softCheeseHandler = new SoftCheeseHandler();
        strongCheeseHandler.setNext(softCheeseHandler);

        const request = {maturity: 12};

        strongCheeseHandler.transformCheese(request);
    });
});
