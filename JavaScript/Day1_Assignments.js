// QUESTION 1
// Type Coercion in JavaScript
// Means the implicit conversion of one data type to another data type
// It happens internally with the help of the javascript to avoid the errors 
// 
    let a=5; 
    let b="Sai";
    console.log(a+b); //Upon '+' it concatenate the number 5 with string "Sai" and coverts, retruns a string "5Sai"

    let c="5";
    let d=true;
    console.log(c+d);  //here converts the d boolean to string as "true" retruns a string "5true"
    console.log(c-d); //5-1->4

    let e=null;
    let f=10;
    let g="Good";
    console.log(e+f+g);   // "10Good"
    console.log(e*(f-g));   //NaN
    console.log(typeof(e*(f-g))); //Number
    console.log(typeof(e+f+g)); //  String
    console.log(f*g); //NaN


// QUESTION 2
//2. Create variables using both let and const. 
// Store values of different data types and print each value along with its type using the typeof operator.
let h=1;
h=5;  //we can reassign in a let , but we should NOT add the let keyword again
console.log(h);
console.log(typeof(h));

let i="SAI RAM";
i="SRI RAM"
console.log(i);
console.log(typeof(i));

let j=null;
console.log(j);
console.log(typeof(j));
let y;
console.log(y);
console.log(typeof(y));

//CONST 
const k=1;
console.log(k);
console.log(typeof(k));

const m="HARI";
// m="RAM"; // cannot reassign in a constant
console.log(m);
console.log(typeof(m));

//QUESTION 3. Write examples for both pre-increment (++a) and post-increment (a++). 
//Explain the difference between them.

//Pre Increment -> Increment the value and print the incremented value after icnrementing 
//Post Increment -> First print the value and then increment the value

// Increment Operator

let r=10;
console.log(r++);  // r=r+1 first returns the value before increment-> returns ,prints 10 first and then increment as 11
console.log(r);  //11
console.log(r++); //11
console.log(r);   //12
console.log(++r);  // Pre Increment -> r=r+1 ->13
console.log(r); //13


// Decrement Operator

 r=10;
console.log(r--);  //post decrement -> r=r-1 first returns the value before decrement -10
console.log(r);  //9
console.log(r--); //9
console.log(r); //8
console.log(--r);  // 7
console.log(r);  //7


