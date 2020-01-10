interface ChedarBox {
    releaseSmell: () => number
}

export class Chedar implements ChedarBox {
    constructor(private isMature: boolean) {
    }

    public releaseSmell(): number {
        return this.isMature ? 10 : 1
    }
}

export class DualBox implements ChedarBox {
    // Binary tree
    constructor(private left: ChedarBox, private right: ChedarBox) {
    }

    public releaseSmell(): number {
        return this.left.releaseSmell() + this.right.releaseSmell()
    }
}

export class MaxiBox implements ChedarBox {
    constructor(private boxes: ChedarBox[]) {
    }

    public releaseSmell(): number {
        return this.boxes.reduce((smell, box) => smell + box.releaseSmell(), 0)
    }
}
