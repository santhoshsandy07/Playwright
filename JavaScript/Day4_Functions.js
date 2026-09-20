//Day4_Functions.js

//Named Function
function fname()
{
    console.log("The Name is very good")
}
fname();

//Anno

let ann=function ()
{
    console.log("The Name is very good BUT ANNANOMOYS")
}
ann();

//arrow function

let arr1=()=>
{
    console.log("The Name is very good BUT ARROW FUNCTION")
}
arr1();

//--------------------------------------


//Named Function
function name(firstname)
{
    console.log(`The first name is of name function is ${firstname}`);
}
name("Santhosh");

//Anno

let ann1=function (lastname)
{
    console.log(`The Last name is of name function is ${lastname}`);
}
ann1("Ram");

//arrow function

let arr2=(middlename)=>
{
    console.log(`The Middlename from the ARROW FUNCTION is ${middlename}`);
}
arr2("Guru");


//Return Keyword 

function total(amt1,amt2,amt3)
{
    totalamt=amt1+amt2+amt3;
    console.log(`The Total amount of the Products is ${totalamt}`);
    return totalamt;
}
function gst(totalamt)
{
    gstamount=totalamt*0.08;
    console.log(`The GST amount of the Products is ${gstamount}`);
    return gstamount;
}
function overallamt(total,gst)
{
    overallamt=totalamt+gstamount;
    console.log(`The Overall amount of the Products is ${overallamt}`);
    return overallamt;

}

let totalamount=total(1000,200,500);
let GST=gst(totalamount);
overallamt(totalamount,GST);

