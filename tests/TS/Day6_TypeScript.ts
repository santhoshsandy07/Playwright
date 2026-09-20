let num:number=5;
console.log(num);

let a:string="ram";
a=4;
a="RAJ";
console.log(a);

//ARRAY
let arr:number[]=[1,2,3,4];
console.log(arr);
let arr1:string[]=["ram","rita",2];
console.log(arr1);
let arr2:any[]=["ram","rita",2];
console.log(arr2);

//OBJECT
let obj : {name:string ,age:number,employeestatus:boolean}={
    name :"ram",
    age : 21,
    employeestatus :true
}
console.log(obj);

//ANY
let b:any="ram";
b=4;
b="RAJ";
b=5;

//console.log(b.touppercase());  // Using any will cause this issue upon uppercase

//unknown - Much safer than using than the any data type  :checks the data type first

let c:unknown="rajubhai";
if(typeof(c)==="string")
{

console.log(c.toUpperCase());
}

//Union  -> Basically this or that - we need to define the allowed data types with the | symbol


let university:string|number
university="SRM";
university=1;
//university=true;

//literal -> used to define the exact values of the defined data type

let college:"SRM"|"PSG"|"";
college="PSG";
college="SRM";
//college="GURU";

//TUPLE -> Order of an element 
//Fixed number of elements as well the data type
let person:[number,string,boolean]=[1,"ram",1];
let person1:[number,string,boolean]=[1,"ram",true];


//enum : when the values are constant we can use enum for defining the values

enum country{
    "countrycode1"="India",
    "countrycode2"="Srilanka",
    "countrycode3"="Bangaldesh"
}
console.log(country.countrycode1)


//type alais :  here we want to define the data types and values in a tempalte which can be reused 

type car={
    model:string,
    make :string,
    year : number,
    successcase :boolean|string
    rate :"15lakhs"|"20lakhs"|"40Lakhs"
}

let maruthi:car
maruthi={
    model:"sz100",
    make :"german",
    year :1998,
    successcase :true,
    //successcase :1,
    rate :"15lakhs"
}


//Type Assertion //Doesnot change the data type of the variable but consider as the type

let movie:any="sethu";
movie=123;
movie="ghilli"
console.log((movie as string).toUpperCase());

//OPTIONAL value of a parameter for a function

function race(speed:number,name?:string)
{
    console.log(`${speed} : ${name}`);

}

//race(150,"Yamaha")
race(150)

//Default value of a parameter for a function

function drink(cost:number,brand:string,quantity:String="1litre")
{
    console.log(`${brand} is costing - ${cost} with a quantity of ${quantity}`);
}
drink(150,"PEPSI");