interface FlyingBird {
  fly(): string;
}

interface Duck extends FlyingBird {
  quack(): string;
}

interface Turkey extends FlyingBird {
  gurgle(): string;
}

export class WildDuck implements Duck {
  quack(): string {
    return "Quack";
  }

  fly(): string {
    return "Flying";
  }
}

export class WildTurkey implements Turkey {
  gurgle(): string {
    return "Gurgle";
  }

  fly(): string {
    return "Short flying";
  }
}

export class TurkeyAdapter implements Duck {
  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  private turkey: Turkey;

  quack(): string {
    return this.turkey.gurgle();
  }
  fly(): string {
    return this.turkey.fly();
  }
}
