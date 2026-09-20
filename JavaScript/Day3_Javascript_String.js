//String 

const { reverse } = require("node:dns");

let name1 = "santhosh"; //reversed
let name2 = name1.toUpperCase();
console.log(name2);


let str="hellow";
let reversestr="";

for (let i=str.length-1;i>=0 ;i--)   // 6-1=>5 ;5>=0
{
    reversestr=reversestr+str;

}