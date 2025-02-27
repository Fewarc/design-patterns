import {
  DatabaseProxy,
  DatabaseService,
} from "../../src/structural/proxy/db-proxy";

it("creates and uses db with admin access", () => {
  const db = new DatabaseService("user1", "admin");
  const dbProxy = new DatabaseProxy(db);

  dbProxy.data = "DATA";

  expect(dbProxy.data).toBe("DATA");
});

it("creates and uses db with unauthorized access", () => {
  const db = new DatabaseService("user1");
  const dbProxy = new DatabaseProxy(db);

  dbProxy.data = "DATA";

  expect(dbProxy.data).toBe("Unauthorized");
});
