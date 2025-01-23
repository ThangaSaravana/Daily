/// choclate distribution problem with sliding window technique

class Solution {
    findMinDiff(arr, n) {
        // code here
      let nwarr = arr.sort((a,b)=>a-b)
      let ans = arr[n-1]-arr[0]
      
      for(let i = 0;i<arr.length-n+1;i++){                // i<arr.length-n+1 ... is the sliding window technique algorithm
          
          let num = arr[i+n-1]-arr[i]
          
          ans =  Math.min(num,ans)
      }
      
      return ans
    }
}
