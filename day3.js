// c rpogram to print prime numbers from 1 to 100


/* #include <stdio.h>

int checkPrime(int num)
{
    // 0, 1 and negative numbers are not prime
    if(num < 2){
        return 0;
    }
    else{   
    // no need to run loop till num-1 as for any number x the numbers in
    // the range(num/2 + 1, num) won't be divisible anyways. 
    // Example 36 wont be divisible by anything b/w 19-35
        int x = num/2;
        for(int i = 2; i <=x; i++)
        {
            if(num % i == 0)
            {
                return 0;
            }
        }
    }
    // the number would be prime if we reach here
    return 1;
}

int main()
{
    int a = 1, b = 100;
    
    for(int i=a; i <= b; i++){
        if(checkPrime(i))
            printf("%d ",i);
    }
 
    return 0;
} */
//Time Complexity: O(N^2)
//Space Complexity O(1)







//printing prime numbers between 1 and 100 .......

const isprime = (n)=>{

   if (n<2) {
     
       return false

   }                                             // if(n==1||n==2){
                                                //     return true
                                                // }


let x = Math.ceil(n/2)                             // we are running the loop n/2 times only


for(let i=2;i<=x;i++){
    if(n%i==0){
        return false
    }
}
 return true
}

let arr = []
const check = ()=>{
  let num = 100
  for(let i = 1;i<=num;i++){

   if(isprime(i)){
       console.log(i);
       arr.push(i)
   }
}
     console.log(`There are ${arr.length} prime numbers between 1 and ${num}`);
}
check()









//checking a number prime or not.............

let num = 13
let prime = true

for(let i =2;i<num;i++){
   
    if(num%i == 0){
       prime = false
    }
    
}

if(prime==true){
    console.log("it is a prime number");
}
else{
    console.log("it is not a prime number");
}