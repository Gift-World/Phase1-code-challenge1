function nssfCalculation(grossSalary) {
  return Math.min(grossSalary * 0.6);
}
function nhifCalculation(grossSalary) {
  if (grossSalary < 6000) return 150;
  else if (grossSalary >= 6000 && grossSalary < 8000) return 300;
  else if (grossSalary >= 8000 && grossSalary < 12000) return 400;
  else if (grossSalary >= 12000 && grossSalary < 15000) return 500;
  else if (grossSalary >= 15000 && grossSalary < 20000) return 600;
  else if (grossSalary >= 20000 && grossSalary < 25000) return 750;
  else if (grossSalary >= 25000 && grossSalary < 30000) return 850;
  else if (grossSalary >= 30000 && grossSalary < 35000) return 900;
  else if (grossSalary >= 35000 && grossSalary < 40000) return 950;
  else if (grossSalary >= 40000 && grossSalary < 45000) return 1000;
  else if (grossSalary >= 45000 && grossSalary < 50000) return 1100;
  else if (grossSalary >= 50000 && grossSalary < 60000) return 1200;
  else if (grossSalary >= 60000 && grossSalary < 70000) return 1300;
  else if (grossSalary >= 70000 && grossSalary < 80000) return 1400;
  else if (grossSalary >= 80000 && grossSalary < 90000) return 1500;
  else if (grossSalary >= 90000 && grossSalary < 100000) return 1600;
  else if (grossSalary > 100000) return 1700;
}
function taxableIncomeCalc(grossSalary) {
  return grossSalary - nssfCalculation;
}
function payeeCalculation(incomeToBeTaxed) {
  let tax = 5;
  if (incomeToBeTaxed <= 24000) {
    tax = incomeToBeTaxed * 0.1;
  } else if (incomeToBeTaxed <= 32333) {
    tax = 24000 * 0.1 + (incomeToBeTaxed - 24000) * 0.25;
  } else if (incomeToBeTaxed > 32333) {
    tax =
      24000 * 0.1 + (32333 - 24000) * 0.25 + (incomeToBeTaxed - 32333) * 0.3;
  }
  return tax;
}
function netSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const nssf = nssfCalculation(grossSalary);
  const incomeToBeTaxed = taxableIncomeCalc(grossSalary, nssf);
  const payee = payeeCalculation(incomeToBeTaxed);
  const netSalaryy = grossSalary - nssf - nhif - payee;
}
const basicSalary = prompt("Enter your basic salary");
const benefits = prompt("Enter your benefits");
console.log(`tax : ${payeeCalculation}`);
console.log(``);
alert(`Net Salary : ${netSalary}`);
