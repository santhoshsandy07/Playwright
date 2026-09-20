// Arithmetic Operators
//  +,-,*,%,/

let a=2;
let b=5;
let c=a+b;
console.log(c);

//Assignment Operators

// +=, -=, *= , /= , %=

let d=5;
let e=10;
d+=e;  // d=d+e =>5+10
console.log(d);

//Relational Operators > < >= <= == != (HUMAN CHECK THE VALUE ALONE)

let f=100;
let g=200;
console.log(f>g);
console.log(f>=g);
console.log(f!=g);

// STRICTLY COMPARISON OPERATORS CHECKS THE VALUE AND DATA TYPE 

let Z="10";
let X=10;

console.log(Z==X);  //true
console.log(Z!=X);  //false

console.log("-------------------");

console.log(Z===X); //false
console.log(Z!==X); //true

//Logical Operators // 

// OR ||  AND &&  ! NOT (Reverse the output)

let v=23;
let n =40;

console.log(v>n || n>v);  // T  F -> T
console.log(v>n && n>v);  // T  F -> F
console.log(!(v>n && n>v));
console.log(!(v>n || n>v));


// Increment Operator

let r=10;
console.log(r++);  //post increment -> r=r+1 first returns the value before increment
console.log(r);
console.log(r++);
console.log(r);
console.log(++r);  // Pre Increment -> r=r+1 
console.log(r);


// Decrement Operator

 r=10;
console.log(r--);  //post increment -> r=r+1 first returns the value before increment
console.log(r);
console.log(r--);
console.log(r);
console.log(--r);  // Pre Increment -> r=r+1 
console.log(r);

//DIFFERENCE BTW INCREMENT AND ASSIGNEMNT OPERATOR

let l=10;
l+=5;  //l=l+5;
console.log(l); // Assignment operators always increment based on the value specified
l=l++;
console.log(l);
console.log(l++);
//l=++l;  // Increment operators always increment by 1 
console.log(l); 