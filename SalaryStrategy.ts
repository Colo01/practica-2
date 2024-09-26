export interface SalaryStrategy {
  calculateSalary(): number;
  registerHours(hours: number): void;
}

export class HourlySalaryStrategy implements SalaryStrategy {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(hourlyRate: number, hoursWorked: number) {
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  registerHours(hours: number): void {
    this.hoursWorked += hours;
  }
}

export class MonthlySalaryStrategy implements SalaryStrategy {
  private monthlySalary: number;

  constructor(monthlySalary: number) {
    this.monthlySalary = monthlySalary;
  }

  calculateSalary(): number {
    return this.monthlySalary;
  }

  //simplemente hago una interfaz vacia sino no me tomaba el metodo
  registerHours(hours: number): void {}
}
