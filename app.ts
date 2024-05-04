import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SeelerAccount } from './class/SeelerAccounts'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Kaynan', 10)
peopleAccount.deposit(300)
peopleAccount.withdraw(50)
console.log(peopleAccount)



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(25)
companyAccount.getLoan(5000)
console.log(companyAccount)


const seelerAccount: SeelerAccount = new SeelerAccount ('Renato', 15)
seelerAccount.deposit(25)
console.log(seelerAccount)

