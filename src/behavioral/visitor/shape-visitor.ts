interface Shape {
  accept(visitor: ShapeVisitor): void;
}

class Rectangle implements Shape {
  constructor(a: number, b: number) {
    this.width = a;
    this.height = b;
  }

  width: number;
  height: number;

  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}

class Circle implements Shape {
  constructor(r: number) {
    this.radius = r;
  }

  radius: number;

  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}

class Triangle implements Shape {
  constructor(a: number) {
    this.armLength = a;
  }

  armLength: number;

  accept(visitor: ShapeVisitor): void {
    visitor.visitTriangle(this);
  }
}

interface ShapeVisitor {
  visitRectangle(rectangle: Rectangle): void;
  visitCircle(circle: Circle): void;
  visitTriangle(triangle: Triangle): void;
}

class AreaShapeVisitor implements ShapeVisitor {
  visitRectangle(rectangle: Rectangle): void {
    console.log("Rectangle area: " + rectangle.height * rectangle.width);
  }

  visitCircle(circle: Circle): void {
    console.log("Circle area: " + Math.PI * circle.radius ** 2);
  }

  visitTriangle(triangle: Triangle): void {
    console.log(
      "Triangle area: " + (triangle.armLength ** 2 * Math.sqrt(3)) / 4
    );
  }
}

class RenderShapeVisitor implements ShapeVisitor {
  visitRectangle(rectangle: Rectangle): void {
    console.log(`🟦 (a: ${rectangle.height}, b: ${rectangle.width})`);
  }

  visitCircle(circle: Circle): void {
    console.log(`🔵 (r: ${circle.radius})`);
  }

  visitTriangle(triangle: Triangle): void {
    console.log(`🔺 (a: ${triangle.armLength})`);
  }
}

(function testVisitor() {
  const allShapes: Shape[] = [
    new Rectangle(5, 10),
    new Circle(3),
    new Triangle(6),
  ];

  const areaVisitor = new AreaShapeVisitor();
  const renderVisitor = new RenderShapeVisitor();

  allShapes.forEach((shape) => shape.accept(areaVisitor));
  allShapes.forEach((shape) => shape.accept(renderVisitor));
})();
