// tsc --target ES6 shape.ts && node shape
interface Area {
    area(): number;
}

abstract class Shape implements Area {
    constructor() { }

    public get sides(): number { return 0 }
    public set sides(value: number) {}

    protected abstract name: string
    protected abstract getArea(): number;

    area = () => {
        return this.getArea();
    }

    toString() {
        return `Name: ${this.name}\tArea: ${this.area()}`;
    }
}

class Rectangle extends Shape {
    constructor(
        private width: number,
        private length: number
    ) {
        super()
    }

    protected name = "rectangle"

    getArea(): number {
        const area: number = this.width * this.length;
        return area;
    }

    public static bark() : string {
        return "WOOF"
    }
}

class Square extends Rectangle {
    constructor(
        private side: number
    ) {
        super(side, side)
    }
    protected name = "square"
}

class Circle extends Shape {
    constructor(
        private radius: number,
    ) {
        super();
    }

    protected name = "circle"
    getArea(): number {
        const area: number = Math.PI * this.radius ** 2
        return area;
    }
}

// class Pentagone implements Shape {

// }

const rectangle: Shape = new Rectangle(1, 2);
console.log(rectangle.toString());
console.log(rectangle.sides);
// rectangle.sides = 42
// console.log(rectangle.sides);
console.log(Rectangle.bark());

const circle: Shape = new Circle(1);
console.log(circle.toString());

const square: Shape = new Square(3);
console.log(square.toString());
