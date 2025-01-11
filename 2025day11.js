class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
       let max = a[a.length-1]
       let ans = []
       
       for(let i = a.length-1;i>=0;i--){
           if(a[i]>=max){
               if(a[i]>max){
                   max = a[i]
               }
               ans.push(a[i])
           }
       }
       
       return ans.reverse()
    }
}
