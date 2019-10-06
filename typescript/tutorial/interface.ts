namespace Interfaces {
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: "black" });

  //  Readonly attributes
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p1: Point = { x: 10, y: 20 };
  // p1.x = 5; // error!

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  // ro[0] = 12; // error!
  // ro.push(5); // error!
  // ro.length = 100; // error!
  // a = ro; // error!


  // Index signature
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }
  interface StringArray {
    [index: number]: string;
  }

  let myArray: StringArray;
  myArray = ["Bob", "Fred"];

  let myStr: string = myArray[0];

  // Function type
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  // This is a lambda, it's complying to the interface only because of the signature
  mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }

  // Class types... With explicit implementations
  interface TiktokInterface {
    currentTime: Date;
    setTime(d: Date): void;

  }

  class Tiktok implements TiktokInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }
    isItAllowed() {
      "extra methods ofc";
    }

    constructor(h: number, m: number) { }
  }
  const c = new Tiktok(1, 2);
  c.isItAllowed();

  // Different way to build
  interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
  }
  interface ClockInterface {
    tick(): void;
  }

  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("tick tock");
    }
  }
  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);

  // Simple and beautiful way:
  interface AnotherOneClockConstructor {
    new(hour: number, minute: number): AnotherOneClockInterface;
  }

  interface AnotherOneClockInterface {
    tick(): void;
  }

  const AnotherDigitalClock: AnotherOneClockConstructor = class AnotherOneClock implements AnotherOneClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
    }
  }
  const t = new AnotherDigitalClock(1, 2)

  // Extending interface
  interface Shape2 {
    color: string;
  }
  interface AnotherOne {
    djKhaled: string
  }

  interface Square2 extends Shape2, AnotherOne {
    sideLength: number;
  }

  let s = {} as Square2;
  s.color = "blue";
  s.djKhaled = "lol";
  s.sideLength = 10;


  // Hybrid interface
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  let ct = getCounter();
  ct(10);
  ct.reset();
  ct.interval = 5.0;
}
