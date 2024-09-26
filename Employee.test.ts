import { EmployeeFactory } from "./EmployeeFactory";
import { Payroll } from "./Payroll";
import { SalaryReport, HoursReport } from "./Report";

describe("Employee Tests", () => {
  test("HourlyEmployee calculates salary correctly", () => {
    const emp = EmployeeFactory.createHourlyEmployee("Alice", 20);
    emp.registerHours(160);
    expect(emp.calculateSalary()).toBe(3200);
  });

  test("MonthlyEmployee calculates salary correctly", () => {
    const emp = EmployeeFactory.createMonthlyEmployee("Bob", 3000);
    expect(emp.calculateSalary()).toBe(3000);
  });
});
