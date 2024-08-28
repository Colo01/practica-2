class Report {
  generateReport() {
    throw new Error("Method not implemented.");
  }

  getHeader() {
    const date = new Date();
    return `Report generated on: ${date.toLocaleString()}`;
  }
}

class SalaryReport extends Report {
  constructor(payroll) {
    super();
    this.payroll = payroll;
  }

  generateReport() {
    return `${this.getHeader()}\nTotal Payroll: ${this.payroll.calculateTotalPayroll()}`;
  }
}

class HoursReport extends Report {
  constructor(payroll) {
    super();
    this.payroll = payroll;
  }

  generateReport() {
    return `${this.getHeader()}\nTotal Hours Worked: ${this.payroll.calculateTotalHours()}`;
  }
}

module.exports = { Report, SalaryReport, HoursReport };
