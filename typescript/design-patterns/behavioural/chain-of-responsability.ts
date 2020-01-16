export interface CheeseRequest {
    maturity: number
}

interface CheeseHandler {
    next?: CheeseHandler
    setNext: (cheeseHandler: CheeseHandler) => void
    transformCheese: (cheeseRequest: CheeseRequest) => void
}

export class StrongCheeseHandler implements CheeseHandler {
    public next?: CheeseHandler;

    public setNext(cheeseHandler: CheeseHandler) {
        this.next = cheeseHandler;
    }

    // the pattern does not force to render a state, all handlers get the chance to process the original request
    public transformCheese(cheeseRequest: CheeseRequest) {
        console.log(`Hit by strong cheese: ${cheeseRequest.maturity}`);
        if (this.next) {
            this.next.transformCheese(cheeseRequest)
        }
    }
}

export class SoftCheeseHandler implements CheeseHandler {
    public next?: CheeseHandler;

    public setNext(cheeseHandler: CheeseHandler) {
        this.next = cheeseHandler;
    }

    public transformCheese(cheeseRequest: CheeseRequest) {
        console.log(`Is that a cheese: ${cheeseRequest.maturity}`);
        if (this.next) {
            this.next.transformCheese(cheeseRequest)
        }
    }
}
