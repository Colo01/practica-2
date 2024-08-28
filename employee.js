class Employee {
  calculateSalary() {
    throw new Error("Method not implemented.");
  }

  registerHours(hours) {
    throw new Error("Method not implemented.");
  }
}

class HourlyEmployee extends Employee {
  constructor(name, hourlyRate) {
    super();
    this.name = name;
    this.hourlyRate = hourlyRate;
    this.hoursWorked = 0;
  }

  registerHours(hours) {
    this.hoursWorked += hours;
  }

  calculateSalary() {
    return this.hourlyRate * this.hoursWorked;
  }
}

class MonthlyEmployee extends Employee {
  constructor(name, monthlySalary) {
    super();
    this.name = name;
    this.monthlySalary = monthlySalary;
  }

  registerHours(hours) {
    // Optional: handle hours for monthly employees if needed
  }

  calculateSalary() {
    return this.monthlySalary;
  }
}

module.exports = { Employee, HourlyEmployee, MonthlyEmployee };
