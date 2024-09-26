import { Employee } from "./Employee";
import { HourlySalaryStrategy, MonthlySalaryStrategy } from "./SalaryStrategy";

export class EmployeeFactory {
  static createHourlyEmployee(name: string, hourlyRate: number): Employee {
    return new Employee(name, new HourlySalaryStrategy(hourlyRate, 0));
  }

  static createMonthlyEmployee(name: string, monthlySalary: number): Employee {
    return new Employee(name, new MonthlySalaryStrategy(monthlySalary));
  }
}
