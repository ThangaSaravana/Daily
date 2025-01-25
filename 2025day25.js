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
//... this is the second brute force approach where we alter the original array and the time complexity is  O(2n)

class Solution {
    pushZerosToEnd(arr) {
        // code here
        let ans = []
        
        for(let i = 0;i<arr.length;i++){
            if(arr[i]!==0){
                ans.push(arr[i])
            }
        }
        
        for(let i = 0;i<ans.length;i++){
            arr[i]=ans[i]
        }
        
        for(let i = ans.length;i<arr.length;i++){
            arr[i]=0
        }
    }
}
