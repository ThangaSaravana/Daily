
//...Palindromic array gfg...
class Solution {

    PalinArray(arr) {
        // code here
        let on =''
        let off =''
        let flag = true
        arr.forEach((val)=>{
           on =  val.toString().split("").reverse().join("")
           off = val
           if(on!=off){
               flag =false
           }
        })
        
        return flag
    }
}


//...sum of first n terms ........
class Solution {
    /**
    * @param number n
    
    * @returns number
    */
        sumOfSeries(n) {
            // code here
            
            // for(let i = 1 ;i<=n;i++){
            //     sum+=i*i*i
            // }
            
          let sum1 = n+1
          let sum2 = BigInt(n*sum1) 
          let sum3 = BigInt(sum2/2n)
          let cubic = BigInt(sum3*sum3) 
            
            return cubic.toString();
        }
    }