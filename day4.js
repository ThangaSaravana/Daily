// printing numbers in reverse order

let arr = [ 1,2,3,4,5,6,7,8,9,10]
console.log(arr.reverse().toString());              // we can use these javascript methods........



//if a number is given we have to print it in reverse order.....

let num = "1234"

let arr2  = num.split('')    //split() splits a string into an array of substrings, and returns the array.
console.log(arr2.reverse().toString());                   // we can use split and store it in an array and we can reverse the array


//using modulus

let n = 1234

while (n>0){
      
 let rem = n%10
    console.log(rem);                          // instead we can print like this ..............
   n = Math.floor(n/10)   
}


// No of digits ..............   // if the input type is number then  we can use this method

let number = 123456

let count = 0

while(number>0){
   number = Math.floor(number/10) 
   count ++
}

console.log(count);

// using split method............       // if the input type is string then we can use this method
                                           
const numb = "234567"

let numbarr = numb.split('')

console.log("The Number of Digits of the given number is",numbarr.length);

