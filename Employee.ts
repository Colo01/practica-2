import { SalaryStrategy } from "./SalaryStrategy";
export class Employee {
  private name: string;
  private salaryStrategy: SalaryStrategy;

  constructor(name: string, salaryStrategy: SalaryStrategy) {
    this.name = name;
    this.salaryStrategy = salaryStrategy;
  }

  calculateSalary(): number {
    return this.salaryStrategy.calculateSalary();
  }

  registerHours(hours: number): void {
    this.salaryStrategy.registerHours(hours);
  }

  changeSalaryStrategy(salaryStrategy: SalaryStrategy): void {
    this.salaryStrategy = salaryStrategy;
  }
}
