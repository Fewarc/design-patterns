import {
  LightningAdapter,
  LightningCharger,
} from "../../src/structural/adapter/charger-adapter";

it("charges usbc with lightning and adapter", () => {
  const lightning = new LightningCharger();
  const lightningAdapter = new LightningAdapter(lightning);

  expect(lightningAdapter.chargePhone()).toBe("Charging with lightning");
});
