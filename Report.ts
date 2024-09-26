import { Payroll } from "./Payroll";

export abstract class Report {
  protected payroll: Payroll;

  constructor(payroll: Payroll) {
    this.payroll = payroll;
  }

  generateReport(): string {
    return `${this.getHeader()}\n${this.getContent()}`;
  }

  private getHeader(): string {
    const date = new Date();
    return `Report generated on: ${date.toLocaleString()}`;
  }

  protected abstract getContent(): string;
}

export class SalaryReport extends Report {
  protected getContent(): string {
    return `Total Payroll: ${this.payroll.calculateTotalPayroll()}`;
  }
}

export class HoursReport extends Report {
  protected getContent(): string {
    return `Total Hours Worked: ${this.payroll.calculateTotalHours()}`;
  }
}
