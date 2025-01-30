// find kth rotation gfg ....
class Solution {
    findKRotation(arr) {
        // Code Here
       let min = arr[0]
       
       for(let i = 0;i<arr.length;i++){
           min = Math.min(min,arr[i])
       }
       
       let ans = arr.indexOf(min)
       
       return ans 
    }
}
//.... the time complexity is O(n)
