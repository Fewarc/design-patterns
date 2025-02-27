import { Database } from "../src/creational/singleton/database-singleton";

it("creates singleton database", () => {
  const db = Database.getInstance("DB 1");

  expect(db.dbMessage).toBe("DB 1");

  const db2 = Database.getInstance();

  expect(db2.dbMessage).toBe("DB 1");
});
