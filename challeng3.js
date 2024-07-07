const netSalary = function(monthlyBasicSalary, otherBenefits){
    let grossSalary = monthlyBasicSalary+otherBenefits
    let personalRelief =2400
    let nssf = Math.min(0.06*monthlyBasicSalary,2160)
    let pensionableSalary = grossSalary - nssf
    let payee =function(pensionableSalary){
        if(pensionableSalary<24000){
            return pensionableSalary*0.1
        }
        else if(pensionableSalary>24000 && pensionableSalary<=32333){
            return ((pensionableSalary- 24000)*0.25 +24000*0.1) - personalRelief
        }
        else if(pensionableSalary>32333 && pensionableSalary<=500000){
            return ((pensionableSalary- 32333)*0.3 + (32333-24000)*0.25 + 24000*0.1) - personalRelief
        }
        else if(pensionableSalary>500000 && grossSpensionableSalaryalary<=800000){
            return ((pensionableSalary- 500000)*0.325 + (500000-32333)*0.3 + (32333-24000)*0.25 + 24000*0.1) - personalRelief
        }

        else if(pensionableSalary>800000){
            return ((pensionableSalary- 800000)*0.35 + (800000-500000)*0.325 + (500000-32333)*0.3 + (32333-24000)*0.25 + 24000*0.1) - personalRelief
        }

    }

    let nhif =function(monthlyBasicSalary){
        if (monthlyBasicSalary<6000){
            return 150
        }
        else if (monthlyBasicSalary>=6000 && monthlyBasicSalary<8000){
            return 300
        }
        else if (monthlyBasicSalary>=8000 && monthlyBasicSalary<12000){
            return 400
        }
        else if (monthlyBasicSalary>=12000 && monthlyBasicSalary<15000){
            return 500
        }
        else if (monthlyBasicSalary>=15000 && monthlyBasicSalary<20000){
            return 600
        }
        else if (monthlyBasicSalary>=20000 && monthlyBasicSalary<25000){
            return 750
        }
        else if (monthlyBasicSalary>=25000 && monthlyBasicSalary<30000){
            return 850
        }
        else if (monthlyBasicSalary>=30000 && monthlyBasicSalary<35000){
            return 900
        }
        else if (monthlyBasicSalary>=35000 && monthlyBasicSalary<40000){
            return 950
        }
        else if (monthlyBasicSalary>=40000 && monthlyBasicSalary<45000){
            return 1000
        }
        else if (monthlyBasicSalary>=45000 && monthlyBasicSalary<50000){
            return 1000
        }
        else if (monthlyBasicSalary>=50000 && monthlyBasicSalary<60000){
            return 1200
        }
        else if (monthlyBasicSalary>=60000 && monthlyBasicSalary<70000){
            return 1300
        }
        else if (monthlyBasicSalary>=70000 && monthlyBasicSalary<80000){
            return 1400
        }
        else if (monthlyBasicSalary>=80000 && monthlyBasicSalary<90000){
            return 1500
        }
        else if (monthlyBasicSalary>=90000 && monthlyBasicSalary<100000){
            return 1600
        }
        else if(monthlyBasicSalary>=100000){
            return 1700
        }

    }

    let netSalary = (monthlyBasicSalary + otherBenefits - payee(pensionableSalary) - nhif(monthlyBasicSalary) - nssf)

    return `Your Net Salary is: K Shs ${netSalary}\n
    Your deductions are:\n
 Payee(net of personal relief of  KSH 2,400):K Shs ${payee(pensionableSalary)}.\n NHIF: K Shs ${nhif(monthlyBasicSalary)}.\n NSSF: K Shs ${nssf}`

}

console.log(netSalary(100000,0));