function greet(name)                            // greet(user)
{
    console.log(`The name is ${name}`);
}

//callback function
function processuser(username)  //username=greet   
{
const user="Sandy";
username(user);                  //username()=greet()  =>username(user)=>greet(user)
}

processuser(greet);


//////////////
function sayHello()
{
    console.log("Hello Buddy");
}
function execute(imp)  //Callback Function           imp=sayHello // 
{

    console.log("This is a imp callback function")
    imp();                                              // imp=sayHello // imp()=sayHello();
}      

execute(sayHello);

/////

function output(result)              //output(value)   =>output(6)  
{
    console.log(`The Output is ${result}`);
}
function calcualtor(a,b,cal)             //Callback function //cal=output
{
    const value =a*b;                         //a*b =>6 => value=6
    cal(value)                             //output(value)   =>output(6)  
}

calcualtor(2,3,output);



// function output(result)
// {
//     console.log(`The final output is ${result}`);
// }
//                   //5 2     
// function calcualtor(a,b,res)  //(5,2,output)  =>> res=output
// {
// const value=a*b;
// res(value);                   // res(value) => output(value) => output(result)
// }


// calcualtor(5,2,output)



//NAMED FUCNTION CALLBACK

function calcualtor1(a,b,result)  //in the result function is saved : result=function fname(output)
{
   const value=a+b;
   result(value);          //
}

calcualtor1(5,2,function fname(output)        
{
 console.log(`The final result is ${output}`);
})


//Callback using the anonymous fucntion


function output(name,callback)
{
    console.log(`THE NAME IS ${name}`);
    callback();
}

output("SANJU", function()
{
console.log("This is a  anonymous callback fucntion")
});