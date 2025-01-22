class Solution{
    isValid(n){
        //code here
        if(n%5==0){
            return "YES"
        }else{
            return "NO"
        }
    }
}

/// second question a very simple question odd sum and even summm


class Solution {
    //Function to find sum of even and odd elements in an array
    EvenOddSum(N, Arr)
    {
        //your code here
        
        let oddsum = 0
        
        let evensum = 0
        
        let sumarr = []
        
        for(let i = 0;i<Arr.length;i++){
            
            if((i+1)%2==0){
                evensum+=Arr[i]
            }else{
                oddsum+=Arr[i]
            }
        }
        
        sumarr.push(oddsum)
        sumarr.push(evensum)
        
        return sumarr
    }
}
