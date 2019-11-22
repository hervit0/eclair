export class Singleton {
    // Instance holder
    private static instance: Singleton;
    public uniqueNumber: number;

    constructor() {
        // A unique random number is generated during initialization
        this.uniqueNumber = this.randomNumber()
    }

    // Only public method to get the single instance - hide the constructor
    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    // Nothing to do with the pattern
    private randomNumber(): number {
        return Math.floor(Math.random() * Math.floor(10000))
    }
}
