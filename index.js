const { HourlyEmployee, MonthlyEmployee } = require("./Employee");
const Payroll = require("./Payroll");
const { SalaryReport, HoursReport } = require("./Report");

const payroll = new Payroll();

const emp1 = new HourlyEmployee("Alice", 20); // Alice gana $20 por hora
emp1.registerHours(160); // Alice trabaja 160 horas en el mes

const emp2 = new MonthlyEmployee("Bob", 3000); // Bob tiene un salario fijo de $3000 al mes

payroll.addEmployee(emp1);
payroll.addEmployee(emp2);

// Calcula y muestra el salario total de la nómina
const totalPayroll = payroll.calculateTotalPayroll();
console.log(`Total Payroll: $${totalPayroll}`);

// Calcula y muestra las horas trabajadas en total
const totalHours = payroll.calculateTotalHours();
console.log(`Total Hours Worked: ${totalHours} hours`);

// Genera y muestra el reporte de salarios
const salaryReport = new SalaryReport(payroll);
console.log("Salary Report:");
console.log(salaryReport.generateReport());

// Genera y muestra el reporte de horas trabajadas
const hoursReport = new HoursReport(payroll);
console.log("Hours Report:");
console.log(hoursReport.generateReport());
