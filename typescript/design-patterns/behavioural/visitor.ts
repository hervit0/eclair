interface CheeseVisitor {
  // Adding/removing an element causes interface change, that's g-r-e-a-t
  visitRed: (redCheese: RedCheese) => string
  visitBlue: (blueCheese: BlueCheese) => string
}

interface VisitableCheese {
  accept: (visitor: CheeseVisitor) => void
}

export class DefaultCheeseVisitor implements CheeseVisitor {
  public visitRed(redCheese: RedCheese) {
    return `Audited: ${redCheese.redLogic()}`;
  }

  public visitBlue(blueCheese: BlueCheese) {
    return `Audited: ${blueCheese.blueLogic()}`;
  }
}

export class RedCheese implements VisitableCheese {
  public redLogic() {
    return 'Red Cheese';
  }

  // Needs to be an interface as function argument to get the maximum flexibility
  public accept(visitor: CheeseVisitor) {
    return visitor.visitRed(this);
  }
}

export class BlueCheese implements VisitableCheese {
  public blueLogic() {
    return 'Hello';
  }

  public accept(visitor: CheeseVisitor) {
    return visitor.visitBlue(this);
  }
}
