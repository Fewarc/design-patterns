import { CrossPlatformApp } from "../../src/creational/abstract-factory/gui-abstract-factory";

it("creates windows cross platform app", () => {
  const windowsApp = new CrossPlatformApp("windows");

  expect(windowsApp.clickButton()).toBe("Clicked a windows button");
});

it("creates ios cross platform app", () => {
  const iosApp = new CrossPlatformApp("IOS");

  expect(iosApp.clickButton()).toBe("Clicked an ios button");
});
