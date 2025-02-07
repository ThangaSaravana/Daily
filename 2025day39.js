// Max-Value Permutation 
class Solution {
    maxValue(arr) {
        // code here
        let nwarr = arr.sort((a,b)=>a-b)
        let mod =  1000000007
        let sum = 0
        
        for(let i = 0;i<nwarr.length;i++){
            let k = (nwarr[i]*i)%mod
            sum = (sum+k)%mod
        }
        
        return sum
    }
}
