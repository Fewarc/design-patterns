import {
  TurkeyAdapter,
  WildTurkey,
} from "../../src/structural/adapter/turkey-adapter";

it("creates turkey behaving like a duck", () => {
  const wildTurkey = new WildTurkey();
  const turkeyAdapter = new TurkeyAdapter(wildTurkey);

  expect(turkeyAdapter.fly()).toBe("Short flying");
  expect(turkeyAdapter.quack()).toBe("Gurgle");
});
