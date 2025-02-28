import {
  BasicNavigator,
  PedestrianRouteStrategy,
} from "../../src/behavioral/strategy/route-strategy";

it("builds vehicle route", () => {
  const navigator = new BasicNavigator();

  // vehicle is defualt
  const route = navigator.buildRoute(5, 10);

  expect(route).toBe("Vehicle from 5 to 10");
});

it("builds pedestrian route", () => {
  const navigator = new BasicNavigator();

  navigator.setStrategy(new PedestrianRouteStrategy());

  const route = navigator.buildRoute(5, 10);

  expect(route).toBe("Pedestrian from 5 to 10");
});
