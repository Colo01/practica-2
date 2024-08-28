class Payroll {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateTotalPayroll() {
    return this.employees.reduce((total, employee) => {
      return total + employee.calculateSalary();
    }, 0);
  }

  calculateTotalHours() {
    return this.employees.reduce((total, employee) => {
      return total + (employee.hoursWorked || 0);
    }, 0);
  }
}

module.exports = Payroll;
