
class Employee
{
private bankbalance:number=50000;

getbalance():number
{
    return this.bankbalance;

}

setbalance(newbalance:number)
{
    this.bankbalance=newbalance;

}
}
let employee=new Employee();
employee.getbalance();
console.log(`The balance is ${employee.getbalance()}`);
employee.setbalance(70000);
console.log(`The balance is ${employee.getbalance()}`);