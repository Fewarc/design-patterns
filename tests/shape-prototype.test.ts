import {
  Square,
  ShapesRegistry,
  Circle,
} from "../src/creational/prototype/shape-prototype";

it("pushes new prototype to registry", () => {
  const square = new Square();

  const shapesRegistry = new ShapesRegistry();

  shapesRegistry.push(square);

  expect(shapesRegistry.map.size).toBe(1);
});

it("pushes new prototype with desired fields to registry", () => {
  const square = new Square();
  square.X = 1;
  square.Y = 1;
  square.color = "red";
  square.width = 5;

  const shapesRegistry = new ShapesRegistry();

  shapesRegistry.push(square);

  expect(shapesRegistry.map.size).toBe(1);

  const squareFromRegistry = shapesRegistry.getById(0) as Square;

  expect(squareFromRegistry?.X).toBe(1);
  expect(squareFromRegistry?.Y).toBe(1);
  expect(squareFromRegistry?.color).toBe("red");
  expect(squareFromRegistry?.width).toBe(5);
});

it("clones object", () => {
  const circle = new Circle();
  circle.X = 2;
  circle.Y = 2;
  circle.color = "blue";
  circle.radius = 5;

  const circle2 = circle.clone();

  expect(circle2.X).toBe(2);
  expect(circle2.Y).toBe(2);
  expect(circle2.color).toBe("blue");
  expect(circle2.radius).toBe(5);
});

it("clones object fromn registry", () => {
  const circle = new Circle();
  circle.X = 2;
  circle.Y = 2;
  circle.color = "blue";
  circle.radius = 5;

  const shapesRegistry = new ShapesRegistry();
  shapesRegistry.push(circle);

  expect(shapesRegistry.map.size).toBe(1);

  const circle2 = shapesRegistry.getById(0)?.clone()! as Circle;

  expect(circle2.X).toBe(2);
  expect(circle2.Y).toBe(2);
  expect(circle2.color).toBe("blue");
  expect(circle2.radius).toBe(5);
});
