import { PizzaBuilder } from "../src/creational/builder/pizza-builder";

it("should build large burrata salami pizza", () => {
  const pizzaBuilder = new PizzaBuilder();
  const largeBurrataSalamiPizza = pizzaBuilder
    .setSize("large")
    .setCheese("burrata")
    .setTopping("salami")
    .build();

  expect(largeBurrataSalamiPizza.size).toBe("large");
  expect(largeBurrataSalamiPizza.cheese).toBe("burrata");
  expect(largeBurrataSalamiPizza.topping).toBe("salami");
});

it("should build small yellow cheese mushrooms pizza", () => {
  const pizzaBuilder = new PizzaBuilder();
  const largeBurrataSalamiPizza = pizzaBuilder
    .setSize("small")
    .setCheese("yellow cheese")
    .setTopping("mushrooms")
    .build();

  expect(largeBurrataSalamiPizza.size).toBe("small");
  expect(largeBurrataSalamiPizza.cheese).toBe("yellow cheese");
  expect(largeBurrataSalamiPizza.topping).toBe("mushrooms");
});

it("should build medium (default) mozarella ham pizza", () => {
  const pizzaBuilder = new PizzaBuilder();
  const largeBurrataSalamiPizza = pizzaBuilder
    .setCheese("mozarella")
    .setTopping("ham")
    .build();

  expect(largeBurrataSalamiPizza.size).toBe("medium");
  expect(largeBurrataSalamiPizza.cheese).toBe("mozarella");
  expect(largeBurrataSalamiPizza.topping).toBe("ham");
});
