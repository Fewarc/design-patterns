import {
  ITDepartment,
  LegalDepartment,
} from "../../src/creational/factory-method/department-factory-method";

it("creates programmer via IT Department", () => {
  const itDepartment = new ITDepartment();
  const programmer = itDepartment.createEmployee();

  expect(programmer.work()).toBe("Writing code");
});

it("creates lawyer via legal department", () => {
  const legalDepartment = new LegalDepartment();
  const lawyer = legalDepartment.createEmployee();

  expect(lawyer.work()).toBe("Lawyering");
});
