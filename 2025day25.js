//move all zeros to end 
// brute force approach 

class Solution {
    pushZerosToEnd(arr) {
        // code here
        
        let ans = []
        
        let count = 0
        
        for(let i = 0;i<arr.length;i++){
            if(arr[i]!==0){
                ans.push(arr[i])
            }else{
                count++
            }
        }
        
        for(let i = 0;i<count;i++){
            ans.push(0)
        }
        console.log(ans)
        return ans
    }
}
