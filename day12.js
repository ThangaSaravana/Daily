
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

//..searching a number gfg

class Solution {

    search(k, arr) {
        // code here
        for(let i =0;i<arr.length;i++){
            if(k==arr[i]){
                return i+1
            }
        }
        return -1
    }
}

//..if else decision making gfg

class Solution {
        compareNM(n, m) {
            // code here
            if(n<m){
                return "lesser"
            }else if(n==m){
                  return "equal"
            }else{
                return "greater"
            }
        }
    }
//...Third largest element in the array with distinct elements 

class Solution {

    thirdLargest(arr) {
        // your code here
        let max1 = arr[0]
        let max2 = 0
        let max3 = 0
        let maxarr =[]
        if(arr.length<=2){
            return -1
        }
        
        arr.forEach((val)=>{
            max1 = Math.max(max1,val)
        })
        maxarr.push(max1)
        
        arr.forEach((val)=>{
            if(max1!=val){
            max2 = Math.max(max2,val)
            }
        })
        maxarr.push(max2)
        
        arr.forEach((val)=>{
            if(max1!=val){
                if(max2!=val){
                max3 = Math.max(max3,val)
                }
            }
        })
        maxarr.push(max3)
        
        if(maxarr.length===3){
            return maxarr
        }else{
            return -1
        }
    }
}

//..Third largest element in the array without distinct elements 

