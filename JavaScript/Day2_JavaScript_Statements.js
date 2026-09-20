//Conditional Statements

//If Statements
let a=200;
let b=100;
if(a>b)
{
    console.log("A is greater");
}

//If Else Statements
let c=20;
let d=100;
if(c>d)
{
    console.log("A is greater");
}
else (c>d)
{
    console.log("b is greater");
}


//If Else if Statements

// Grade A= 90-100
// Grade B=80 -90
// Grade C= 70 -80; 

let marks =78;
if(marks >90)
{
    console.log("Grade is A");
}
else if (marks >80 && marks <90)
{
    console.log("Grade is B");
}
else if (marks >70 && marks <80)
{
    console.log("Grade is C");
}
else
    console.log("The student is failed");


//Type Cohersion

let g="Ram";
let h=10;
r=Number(g+h);
j=String(g+h)
console.log(r);
console.log(j);


// Truthy Falsy

// let k; //falsy
// let l=""; //falsy
// if (k>l) //falsy
// {
//     console.log("GOOD");
// }
// else 
//  console.log("BAD")

// let k; //falsy
// let l=""; //falsy
// if (k>l || l ) //falsy
// {
//     console.log("GOOD");
// }
// else 
//  console.log("BAD")

let k="SAI"+10; //truthy
let l=""; //falsy
if (k || l ) //truthy
{
    console.log("GOOD");
}
else 
 console.log("BAD")

//
let k="SAI"-10; //falsy
let l=""; //falsy
if (k || l ) //truthy
{
    console.log("GOOD");
}
else 
 console.log("BAD")
   