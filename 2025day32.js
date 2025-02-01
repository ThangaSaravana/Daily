class Solution{
    kthDigit(A, B, K){
        //code here
        let prod = Math.pow(A,B)
        
        // console.log(prod)
        
        let ans =  prod.toString()
        
        // console.log(ans)
        
        // console.log(ans[ans.length - 1])
        
        return ans[ans.length - K]
    }
}
