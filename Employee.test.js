const { HourlyEmployee, MonthlyEmployee } = require("./Employee");
const Payroll = require("./Payroll");
const { SalaryReport, HoursReport } = require("./Report");

describe("Employee Tests", () => {
  test("HourlyEmployee calculates salary correctly", () => {
    const emp = new HourlyEmployee("Alice", 20);
    emp.registerHours(160);
    expect(emp.calculateSalary()).toBe(3200);
  });

  test("MonthlyEmployee calculates salary correctly", () => {
    const emp = new MonthlyEmployee("Bob", 3000);
    expect(emp.calculateSalary()).toBe(3000);
  });

  test("Payroll calculates total payroll correctly", () => {
    const payroll = new Payroll();
    const emp1 = new HourlyEmployee("Alice", 20);
    emp1.registerHours(160);

    const emp2 = new MonthlyEmployee("Bob", 3000);

    payroll.addEmployee(emp1);
    payroll.addEmployee(emp2);

    expect(payroll.calculateTotalPayroll()).toBe(6200);
  });

  test("Payroll calculates total hours correctly", () => {
    const payroll = new Payroll();
    const emp1 = new HourlyEmployee("Alice", 20);
    emp1.registerHours(160);

    const emp2 = new MonthlyEmployee("Bob", 3000);

    payroll.addEmployee(emp1);
    payroll.addEmployee(emp2);

    expect(payroll.calculateTotalHours()).toBe(160);
  });

  test("SalaryReport generates correct report", () => {
    const payroll = new Payroll();
    const emp1 = new HourlyEmployee("Alice", 20);
    emp1.registerHours(160);

    const emp2 = new MonthlyEmployee("Bob", 3000);

    payroll.addEmployee(emp1);
    payroll.addEmployee(emp2);

    const report = new SalaryReport(payroll);
    const generatedReport = report.generateReport();
    expect(generatedReport).toContain("Total Payroll: 6200");
  });

  test("HoursReport generates correct report", () => {
    const payroll = new Payroll();
    const emp1 = new HourlyEmployee("Alice", 20);
    emp1.registerHours(160);

    const emp2 = new MonthlyEmployee("Bob", 3000);

    payroll.addEmployee(emp1);
    payroll.addEmployee(emp2);

    const report = new HoursReport(payroll);
    const generatedReport = report.generateReport();
    expect(generatedReport).toContain("Total Hours Worked: 160");
  });
});
//run the test
