class Solution {
    // Function to find equilibrium point in the array.
    findEquilibrium(arr) {
        // code here
        
        let lsum = 0
        let rsum = 0
        
        for(let i=0;i<arr.length;i++){
            rsum +=arr[i]
        }
        
        for(let j=0;j<arr.length;j++){
            rsum = rsum - arr[j]
            
            if(lsum == rsum){
                return j
            }
            
            lsum += arr[j]
        }
        
        return -1
    }
}
//first question find the equilibirium point ...solved with the help of youtube....
