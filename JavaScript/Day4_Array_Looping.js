//Array For loop
//FOR LOOP

let arr=["ram","sita","radha"]

// for(i=0;i<arr.length;i++)
// {
//     console.log(`The Values of the Array are ${arr[i]}`);
// }

//RETURNS AND ITERATIES OVER ALL THE VALUES OF THE ARRAY 
for(let x of arr)
{
    console.log(`The Values of the Array are ${x}`);
}

//RETURNS THE INDEX OF THE ARRAY THEN PRINT WITH THE INDEX TO RETRIVE VALUE
for(let y in arr)
{
    console.log(`The Values of the Array are ${y}`);
     console.log(`The Values of the Array are ${arr[y]}`);
}