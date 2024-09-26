import { Employee } from "./Employee";

export class Payroll {
  private employees: Employee[];

  constructor() {
    this.employees = [];
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  calculateTotalPayroll(): number {
    return this.employees.reduce(
      (total, employee) => total + employee.calculateSalary(),
      0
    );
  }

  calculateTotalHours(): number {
    return this.employees.reduce((total, employee) => {
      return "hoursWorked" in employee
        ? total + (employee as any).hoursWorked
        : total;
    }, 0);
  }
}
