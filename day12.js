
//...finding factorial of a number 

class Solution{
    factorial(n){
        //code here
        let fact = 1
        
        for(let i = n;i>=1;i--){
            fact = fact*n
            n--
        }
        
        return fact
    }
}