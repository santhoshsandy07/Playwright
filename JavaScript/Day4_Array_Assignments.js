// let arr=[20,30,40];

// //let arr2=arr.push(945); // Main Mistake here is its not forming  a new array its appends in the end of the same array
// arr.push(945);
// console.log(`The Length of the modified Array is ${arr.push(44)}`);
// console.log(`The modified Array is ${arr}`);


// console.log(`The Length of the modified Array is ${arr.unshift(50)}`);
// console.log(`The modified Array is ${arr}`);

// console.log(`The value contains correctly as ${arr.includes(44)}`);

// let animal=["Fox","Donkey","Monkey","Bull","Lion","Tiger"];
//            // 0      1        2       3      4      5  

// let str=animal.slice(0,3);  //["Fox","Donkey","Monkey"]
// let str1=animal.slice(3);    // ["Bull","Lion","Tiger"]
// let str2=animal.slice(-3,2); //Return an empty string because start index < end index (-3<2)  []
// let str3=animal.slice(-3,-1);  //[ "Bull","Lion"]
// let str4=animal.slice(3,-2);   // ["Bull"]
// let str5=animal.slice(3,-1);   // [ "Bull","Lion"]
// let str6=animal.slice(3,-3);   // []
// console.log(str);
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
// console.log(str5);
// console.log(str6);
// console.log(animal);


// // let animal=["Fox","Donkey","Monkey","Bull","Lion","Tiger"];
// //            // 0      1        2       3      4      5  

// let arr3=animal.splice(1,3,"Kiwi");  // Index starts at 1 and remove 3 elements
// console.log(arr3);  //["Donkey","Monkey","Bull"]
// console.log(animal); //["Fox","Kiwi","Lion","Tiger"]

// //Spread

// let names=["abc","cde","ram","guru"];
// let football=["messi","ronaldo","zidane","ramos"];
// let combine=[...names,...football,23,45,"raghav","sachs"];
// console.log(combine);


// //Sort

// console.log(names.sort());
// console.log(football.sort());
// console.log(combine.sort());

// let names2=["abc",{Name : "Sandy", Id :2, phone : "9159558188"},true,"guru",1,"$","ABC","object"];
// console.log(names2.sort());

// let a=[1,21,12,19,23,54,20,10,100];   //positive swap / negative keep
// let a1=a.sort((a,b)=>(a-b));
// console.log(a1);


// // For Loop for an Array
// let pat=[1,21,12,19,23,54,20,10,100];
// for(i=0;i<=pat.length-1;i++)
// {
//     console.log(`The value for the corresponding ${i} is ${pat[i]}`)
// }

// for(let x in pat)
// {
//     //console.log(`The corresponding indexes of the array are ${x}`)
//     console.log(`The value for the corresponding ${x} is ${pat[x]}`)
// } 

// for(let x of pat)
// {
//     console.log(`The corresponding indexes of the array are ${x}`)
//     //console.log(`The value for the corresponding ${x} is ${pat[x]}`)
// } 

let num=[34,56,12];
