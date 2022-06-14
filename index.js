let salary = 500
console.log("The gross salary is" , salary , "EURO");
let employeePensionContribution = (500*5)/100
console.log("The pension contributions is" , employeePensionContribution , "EURO");
let taxableAmount = salary - employeePensionContribution
console.log("Taxable amount is:" , taxableAmount , "EURO")
if (taxableAmount <= 80) {
    let tax = (taxableAmount * 0 )/100
} 
else if(80 < taxableAmount <= 250){
    tax = ( taxableAmount *4) /100

}
else if (250 < taxableAmount <= 450) 
{
tax = (taxableAmount * 8) /100    
}
else if (taxableAmount > 450 ) {
    tax = (taxableAmount * 10) /100  
}
let takeHomePay = taxableAmount - tax

console.log("Your take-home pay for month after taxes is:" , takeHomePay , "EURO")
