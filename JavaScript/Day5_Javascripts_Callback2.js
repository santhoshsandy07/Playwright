const test = require("node:test");

function greet()
{
    console.log("Hello buddy");
}

greet();

// Parametrized Function

function greet1(user)
{
    console.log(`Hello buddy ${user}`);
}

greet1("Ram");

// Call Back Function - With Parameters

function greet1(user)            //greet1(user) =>greet1(username)=>greet1("Sandy")
{
    console.log(`Hello buddy ${user}`);
}

function processuser(res1)        // processuser(res) =processuser(greet1) =>res =greet1
{
    const username="Sandy";
    res1(username);               // res(username) =>greet1(username) =>greet1("Sandy")
}
processuser(greet1);

// Call Back Function - Without Parameters

function animal()            
{
    console.log(`This is a Animal`);
}

function dog(test)                 //dog is a callback function  dog(test)= dog(animal) =>test = animal
{
    console.log(`This is a Dog`);
    test();                        //test = animal => test()= animal()

}
dog(animal);

// Call Back Function - With Parameters - Calculations

//Normal Multiply function with parameters
function cal(a,b)
{
    console.log(`This is a good calcualtion`);
    ret = a*b;
    console.log(`This is a good calcualtion ${ret}`);
}

cal(1,5);

//Callback functions : Multiply function with parameters

function display(test)               //display(test) => display(mul)=>display(10)
{
    console.log(`This is a good calcualtion ${test}`);
}

function calculation(a,b,result)  //calculation(a,b,result) =>calculation(2,5,display) : result =display
{
    const mul = a*b;             //10
    result(mul);                 // result =display =>  result(mul) => display(mul) =>display(10)
}

calculation(2,5,display);

////Callback using the anonymous fucntion

function output(name,callback)        //output(name,callback) =>"SANJU", function => callback
{
    console.log(`THE NAME IS ${name}`);
    callback();                      //function => callback =>callback()  =>function()
}

output("SANJU", function()
{
console.log("This is a  anonymous callback fucntion")
});

//Callback using the Arrow fucntion

function output1(name,callback1)            //  output1(name,callback) =output1("Raga",()) // callback= arrow function
{
    console.log(`Name is ${name}`); 
    callback1();         //Name is Raga 
}
output1("Raga",()=>
{
    console.log("This is a arrow call back function");
})


