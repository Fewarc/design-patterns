const SHAPES = ["SQUARE", "CIRCLE", "TRIANGLE"] as const;

type DrawnShape = (typeof SHAPES)[number];

interface Shape {
  drawShape(): DrawnShape;
}

class Square implements Shape {
  drawShape(): DrawnShape {
    return "SQUARE";
  }
}

class Circle implements Shape {
  drawShape(): DrawnShape {
    return "CIRCLE";
  }
}

class Triangle implements Shape {
  drawShape(): DrawnShape {
    return "TRIANGLE";
  }
}

export class ShapeFactory {
  public static getShape(shape: DrawnShape) {
    switch (shape) {
      case "CIRCLE":
        return new Circle();

      case "SQUARE":
        return new Square();

      case "TRIANGLE":
        return new Triangle();

      default:
        break;
    }
  }
}
