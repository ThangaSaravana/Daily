class Solution {
    // Function to check whether the number evenly divides n.
    evenlyDivides(n) {
        // code here
        if(n==0){
            return 0
        }
        
        let count = 0
        
        let N = n.toString()
        
        for(let i = 0;i<N.length;i++){
            
            if(n%parseInt(N[i])==0){
                count++
            }
            
        }
        
        return count
    }
}
