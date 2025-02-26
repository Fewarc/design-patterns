abstract class ShapePrototype {
  constructor(sourceShape?: ShapePrototype) {
    if (sourceShape) {
      this.X = sourceShape.X;
      this.Y = sourceShape.Y;
      this.color = sourceShape.color;
    }
  }

  public X?: number;
  public Y?: number;
  public color?: string;

  abstract clone(): ShapePrototype;
}

export class Square extends ShapePrototype {
  constructor(sourceSquare?: Square) {
    super(sourceSquare);
    this.width = sourceSquare?.width;
  }

  public width?: number;

  clone(): Square {
    return new Square(this);
  }
}

export class Circle extends ShapePrototype {
  constructor(sourceCircle?: Circle) {
    super(sourceCircle);
    this.radius = sourceCircle?.radius;
  }

  public radius?: number;

  clone(): Circle {
    return new Circle(this);
  }
}

interface Registry<T> {
  map: Map<number, T>;
  push(item: T): void;
  getById(id: number): T | undefined;
}

export class ShapesRegistry implements Registry<ShapePrototype> {
  map: Map<number, ShapePrototype> = new Map();

  push(shape: ShapePrototype) {
    this.map.set(this.map.size, shape);
  }

  getById(id: number) {
    return this.map.get(id);
  }
}
