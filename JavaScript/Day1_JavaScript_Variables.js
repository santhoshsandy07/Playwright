console.log("Hello");
console.log("Om Sai Ram");
console.log("Playwright Session");

//JavaScript_Variables.js

// Types of Vaiables LET 

let a=10;
console.log("Value of a before redecalration is " + a);

//redeclaration not allowed again giving let we can remove let and we can run the code it work
//let a=15; which is wrong with let again
//console.log("Value of a After redecalration" + a); 

//redeclaration allowed again without giving let we can remove let and we can run the code it work
a=12;
console.log("Value of a After redecalration is " + a); 


// Types of Vaiables CONST 
const bun=15;
console.log("Value of a before redecalration is " + bun);

//redeclaration IS NOT allowed again IN Const 
// const bun=25;
//bun=45;
console.log("Value of a after redecalration is " + bun);



//DataType//
let batchname="July Batch";
let batchnumber=121;

console.log(batchname,batchnumber);

//undefined
let c;
console.log(c);
console.log(typeof(c));

//null
let d=null;
console.log(d);
console.log(typeof(d));

// Array
//let arr=[a,1,'nice',"awesome",numer] //Number is not define it will give an error
let arr=[a,1,'nice',"awesome"] 
console.log(arr);
console.log(typeof(arr));

// Object

let detail={
batch_Number  : "1",
batchID : "12",
batchName :"JulyBatch"

}
console.log(detail.batchID);
console.log(detail.batchName);
console.log(detail.batchNumber);
console.log(typeof(detail));