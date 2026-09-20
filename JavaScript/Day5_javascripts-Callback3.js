// // Calculation using named Callback functions

const { rejects } = require("node:assert");
const { promises, resolve } = require("node:dns");

// // function output(result)
// // {
// //     console.log(`The final result is ${result}`)
// // }

// // function calcualtion(a,b,res)
// // {
// //     const mul=a*b;
// //     res(mul);
// // }

// // calcualtion(10,40,output);


// // Calculation using Named Callback functions

// function calcualtion1(a,b,res) //calcualtion1(a,b,res) =calcualtion1(10,40,function output(result)  
//  // a=10,b=40, res= output(result)
// {
//     const mul=a*b;  //mul=400
//     res(mul);         //res(mul)=output(result)=output(mul)
// } 

// calcualtion1(10,40,function output(result)  //calcualtion1(10,40,function output(result)   
// {
// console.log(`The final result is ${result}`)
// });


// // Calculation using Ananomouse Callback functions

// function calcualtion2(a,b,res1) //calcualtion1(a,b,res)=calcualtion1(150,10,function(result) 

// // res = ano func(result)
// {
//     const mod=a%b;
//     res1(mod);       //res(mod)=ano func(result)=> ano func(mod)
// }

// calcualtion2(120,100,function(result1)        //
// {
//     console.log(`The Calculation is ${result1}`);  
// })


// //// Calculation using Arrow Callback functions

// function calcualtion2(a,b,res2) //calcualtion1(a,b,res)=calcualtion1(150,10,function(result) 

// // res = ano func(result)
// {
//     const div=a/b;
//     res2(div);       //res(mod)=ano func(result)=> ano func(mod)
// }

// calcualtion2(1500,10,(result2)=>        //
// {
//     console.log(`The Calculation for arrow callback function is ${result2}`);  
// })


// //Calculation using Named Callback functions with multiple parameters

// // function calcualtion1(a,b,nam,res3) //calcualtion1(a,b,res) =calcualtion1(10,40,"jai",function output(name,result)   
// //  // a=10,b=40, res= output(name,result)
// // {

// //     const mul=a*b;    //mul=400
// //     res3(nam,mul);         //res(mul)=output(name,result)=output(name,mul)
// // } 

// // calcualtion1(10,40,"Jai",function output(name,result)  //calcualtion1(10,40,"jai",function output(name,result)   
// // {
// // console.log(`The final result is ${name} and the result is ${result}`);
// // });



// function square(number) {
//     console.log(`Square =${number*number}`);
// }


// function calculate(test) {               //test=square
//     const num=5;
//     test(num);  //test(num) => square(num)
// }


// calculate(square);


//----------------------------//


// function discount(val, val1) {                  //amount(netamt, gst) => discount(1000,250)
//     let val2 = val + val1;
//     console.log(`The Netamount before discount is ${val2}`)
//     console.log(`The Gst is ${val1}`)
//     console.log(`The Discount is ${val * 0.1}`)
//     console.log(`The Netamount After discount is ${val2 - (val * 0.1)}`)
// }

// function logic(amount, netamt, gst)   //logic(amount,netamt,gst) =logic(discount,1000,250) 
// {
//     amount(netamt, gst);             //amount = discount : netamt =1000 : gst=250 =>discount(1000,250)
// }

// logic(discount, 1000, 250);



// callback using named function 

// function discount(val, val1, test1) {                  //discount(1000,250,function logic(res)
//     let val2 = val + val1;
//     console.log(`The Netamount before discount is ${val2}`)
//     console.log(`The Gst is ${val1}`)
//     console.log(`The Discount is ${val * 0.1}`)
//     let val3 = val2 - (val * 0.1);
//     test1(val3);
// }

// discount(5000, 200, function logic(res)  //discount(1000,250,function logic(res)
// {
//     console.log(`This is a call back function and netamt after disclount is  ${res}`);


// })

//callback using anonomous function 
// function discount(val, val1, test1) {                  //discount(1000,250,function logic(res)
//     let val2 = val + val1;
//     console.log(`The Netamount before discount is ${val2}`)
//     console.log(`The Gst is ${val1}`)
//     console.log(`The Discount is ${val * 0.1}`)
//     let val3 = val2 - (val * 0.1);
//     test1(val3);
// }

// discount(5000, 200, function (res)  //discount(1000,250,function logic(res)
// {
//     console.log(`This is a call back function and netamt after disclount is  ${res}`);


// })


//callback using arrow function 
function discount(val, val1, test1) {                  //discount(1000,250,function logic(res)
    let val2 = val + val1;
    console.log(`The Netamount before discount is ${val2}`)
    console.log(`The Gst is ${val1}`)
    console.log(`The Discount is ${val * 0.1}`)
    let val3 = val2 - (val * 0.1);
    test1(val3);
}

discount(5000, 200, (res) =>  //discount(1000,250,function logic(res)
{
    console.log(`This is a call back function and netamt after disclount is  ${res}`);


})



//  CALLBACK FUNCTION  //

function login(username, password, test) {            //login("admin","admin123",test)  ==> test=dashboard
    if (username == "admin" && password == "admin123") {
        console.log(`Login Successful`);
    }
    else {
        console.log(`Login Failed`);
    }
    test();  //test()=dashboard()

}
function dashboard() {
    console.log(`Move to Dashboard`);
}

login("admin", "admin123", dashboard)


// Call Back function

// function logic(a,b,test)                    //logic(10,15,calcualtionmul) =>test=calcualtionmul
// {
//     console.log(`The Value of a is ${a}`);
//     console.log(`The Value of a is ${b}`);
//     const result=a*b;     //150
//     test(result);          //calcualtionmul(result) =>calcualtionmul(150)
// }

// function calcualtionmul(result)
// {
//     console.log(`The Calculation Logic is ${result}`)
// }

// logic(10,15,calcualtionmul)

//Arrow Function

function logic(a, b, test)                    //logic(10,15,calcualtionmul) =>test=calcualtionmul
{
    console.log(`The Value of a is ${a}`);
    console.log(`The Value of a is ${b}`);
    const result = a * b;      //150
    test(result);          //calcualtionmul(result) =>calcualtionmul(150)
}

logic(5, 10, (result) =>
    console.log(`The Calculation is ${result}`)
)


//Promise

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Recived");
        }, 2000);
    });
}
getData().then((result) => {
    console.log(result);
});

//Promise with Async Functions
function getData1(username) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (username === "Santhosh") {
                resolve("Name Matched");
            } else {
                reject("Name Not Matched");
            }

        }, 2000);
    });
}

async function test(username) {

    try {
        let result = await getData1(username);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

test("rahul");



//DAY 5 PRACTICE WITH CALLBACK USING ARROW FUNCTION

function login2(username, callback) {
    console.log(`The User name is ${username}`);
    callback();
}

login2("santhosh", () => {
    console.log("This is a arrow call back function")
})


//DAY 5 PRACTICE WITH CALLBACK USING ANNONOMOYOUS FUNCTION
function login2(username, callback) {
    console.log(`The User name is ${username}`);
    callback();
}

login2("santhosh", function () {
    console.log("This is a arrow call back function")
})

//DAY 5 PRACTICE WITH CALLBACK USING NAMED FUNCTION
function login2(username, callback) {
    console.log(`The User name is ${username}`);
    callback();
}

login2("santhosh", function ram() {
    console.log("This is a arrow call back function")
})


//DAY 5 PRACTICE WITH PROMISE TO RETURN TASK COMPLETED AFTER 2 SECONDS

function task1(status) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            
            if (status ==="Good") {
                console.log(`Task Completed`);
                resolve("Success");
            }
            
            else
            {
                    console.log(`Task NOT Completed`);
                    rejects("Failed");
            }
            
        }, 2000);
    })
}

async function completionstatus(status) {


    try {
        let result1 = await task1(status);
        console.log(result1);
    }
    catch(error) {
        console.log(error);
    }
}

completionstatus("Good");


// If Player is Messi "Goal for sure" after 2 seconds
function player(playername)
{
    return new Promise((resolve,reject)=>
    {
     setTimeout(() => {
        if(playername="Messi")
        {
            console.log("FOOTBALL BUDDY")
            resolve("Awesome its God of Football")
        }
        else
        {
            reject("No player not matched")
        }

     }, 2000);

    })
}

async function football(playername) {
    try
    {
       let plr=await player(playername);
       console.log("FOOTBALL LORD BUDDY")
       console.log(plr);
    }
    catch(error)
    {
        console.log(error);
    }
    
}

football("Messi")