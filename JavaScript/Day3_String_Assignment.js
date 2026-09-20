// REVERSING A STRING
let str="Hellow";
      // 012345
let reverstr="";
console.log(str.length); //6

for(i=str.length-1;i>=0;i--)   //6-1 =>5 ; 5th index letter is w  //upon decrement is 4 ; 4th index letter is o
{
reverstr = reverstr+str[i];        //reverstr ="" + w   //reverstr ="w" + "o"   
}

console.log(`The Reversed String is ${reverstr}`);

// PALINDROME OR NOT
let str1="SANJU";
let reverstr1="";

console.log(`The Given String is ${str1}`);

for(j=str1.length-1;j>=0;j--)
{
reverstr1=reverstr1+str1[j]    
}

console.log(`The Reversed String is ${reverstr1}`);

if(str1==reverstr1)
{
    console.log(`The given String is a Palindrome`)  //Since Let is a block scoped we cant define ${str1}here getting a reference error
}
else
{
    console.log(`The given String is NOT a Palindrome`)
}


//STRING Replace()/ Replace All()

let test="Automation using Javascript and Java Javascript Javascript language";

console.log(test.replace("Javascript","Java")); //it should be an exactl match and it will match only very first instance alone
console.log(test.replace(/Javascript/i,"Java")); //Ignore case - Replaces first Initial Match
console.log(test.replace(/Javascript/gi,"Java")); //GI-global ignore case -  Replaces all  Match
console.log(test.replace("javascript","Java"));   //not a exact match
console.log(test.replaceAll("Javascript","Java"));

//STRING Includes()

let fruit="Watermelon";

console.log(fruit.includes("melon"));
//console.log(fruit.includes(/melon/i));  // Cant use ignore case with includes as it returns as boolean

//STRING Substring()

let veg="Apple";  
       //01234
         10123
console.log(veg.substring(0,4));        // Substring always performs n-1
console.log(veg.substring(4,0));        // Internally it considers that indexing alwasy starts from 0
console.log(veg.substring(0));          // If we give 0 then entire string is considred
console.log(veg.substring(3));          // If we give only 3 then n-1=>2 till 2nd index removed
console.log(veg.substring(-3));          // If we give negative then it considers as 0 entire string is considred
console.log(veg.substring(-3,1));        // If we give negative -3, then it considers as 0 (0,1)
           // Charat() -> Returns the character at the specified index.
console.log(veg.substring(-5, -1));      // veg.substring(0,0) =>""

//STRING CharAt()

console.log(veg.charAt(2));  

//STRING Slice()

let animal="Orangutan";
         // 012345678
         // 987654321
console.log(animal.slice(0,6));    // n-1 =>5 ->(0,5)
console.log(animal.slice(6));      // if we only 6 we are giving only the start index slice(start)
console.log(animal.substring(6));
console.log(animal.slice(6,0));     // Strat index> End Index then it returns a empty string
console.log(animal.slice(-1,-4));    // Start Index => Length + Negative Index => 9+(-1)=> 8
                                      //  end Index => Length + Negative Index => 9+(-4)=> 5 -->(8,5) Strat index> End Index then it returns a empty string
console.log(animal.slice(-4,-2));   // 9+(-4)=>5   //9+(-2)=>7  (5,7)


//STRING Split()

let birds="Flamingo-Crow-Humming Bird: Peackcock woodpecker";
let birds1=console.log(birds.split("-" ));
let birds2=console.log(birds.split(/[- ]/));  //It consider - and space
//let birds2=console.log(birds.split(/[-]/));


let caps="automation";
let caps1=console.log(caps.charAt(0).toUpperCase()+caps.slice(1));

let pagination="Page 10 of 100";
let page2=pagination.split(" "); // Now Split() returns an array[] , with the help of the indexing concept we can return the current and last page
console.log(page2);
console.log(`The Current Page is ${page2[1]}`);
console.log(`The Last Page is ${page2[3]}`);
