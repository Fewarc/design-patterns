import { ShapeFactory } from "../../src/creational/factory/shapes-factory";

it("uses factory to create a square", () => {
  const square = ShapeFactory.getShape("SQUARE");

  expect(square?.drawShape()).toBe("SQUARE");
});

it("uses factory to create a circle", () => {
  const square = ShapeFactory.getShape("CIRCLE");

  expect(square?.drawShape()).toBe("CIRCLE");
});

it("uses factory to create a triangle", () => {
  const square = ShapeFactory.getShape("TRIANGLE");

  expect(square?.drawShape()).toBe("TRIANGLE");
});
