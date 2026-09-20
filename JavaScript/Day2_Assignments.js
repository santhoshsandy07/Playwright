// QUESTION 1
// const readline = require("readline-sync");
// const i =readline.questionInt ("Please enter the number for even or odd : ");

// console.log(`The Value for the even or odd number calculation is : ${i}`);


//     if(i%2==0)
//     {
//         console.log(`The Number : ${i} is Even`);
//     }

//     else
//     {
//         console.log(`The Number : ${i} is odd`);
//     }

// // QUESTION 2
// const readline=require("readline-sync");
// const j=readline.questionInt("Please enter the Value A : ");
// const k=readline.questionInt("Please enter the Value B : ");
// const l=readline.questionInt("Please enter the Value C : ");

// if(j>k && j>l)
// {
//     console.log(`The Value of A is ${J} which Greater than B and C `);

// }
// else if(k>j && k>l)
// {
//     console.log(`The Value of B is ${k} which Greater than A and C `);
    
// }
// else
// {
//     console.log(`The Value of C is ${l} which Greater than A and B `);
// }

// QUESTION 3
// const readline=require("readline-sync");
// let number = readline.questionInt("Please enter a Valid Number");
// let sum=0;

// while(number>0)
// {
// let digit = (number%10);  //1234%10 =4  (1st)  // 123%10 =3 (2nd) //12%10= 2 (3rd) //1%10>1
// sum +=digit;// sum = sum +digit -> 0+4 -> 4 (1st) //  4+3 >7 (2nd) //7+2->9(3rd) //9+1>10

// number = Math.floor(number/10); //number /10 -? 1234/10 -> 123.4 -> Math.floor(123.4)-> Return whole number-123
// // 2nd 123/10 ->12.3 ->12 // 3rd 12/10->1.2->1   // 4th 1/10->0.1 ->0
// }

// console.log(`The Sum of all the digits of the number is ${sum}`);

//Question 4 COUNT
// const { reverse } = require("node:dns");
// const readline=require("readline-sync");
// let number = readline.questionInt("Please enter a Valid Number");
// let count=0;

// while(number>0)
// {
//     count++;
//     number=Math.floor(number/10);
// }
// console.log("Count of digits are "+ count);

//Question 5 Reverse 
// const readline=require("readline-sync");
// let number = readline.questionInt("Please enter a Valid Number");
// let Reverse=0;

// while(number>0)
// {
//     let digit=(number%10);

//     Reverse=Reverse*10+digit;

//     number=Math.floor(number/10);

// }
// console.log("The Reversed Number is "+ Reverse);

// Question 6 Palindrome
const readline=require("readline-sync");
let number = readline.questionInt("Please enter a Valid Number");
let original =number;
let reverse=0;

while(number>0)
{
    let digit = (number%10);
    reverse=reverse*10+digit;

    number=Math.floor(number/10);
}
if(original===reverse)
{
    console.log("The Number is Palindrome");
}
else
{
    console.log("The Number is NOT a Palindrome");
}


const readline = require("readline-sync");
