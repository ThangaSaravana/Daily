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
// sort 0s and 1s


//..this is the second question for day 11
class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(arr) {
        // your code here
        let arr2 = arr.sort((a,b)=>a-b)
        return arr2
    }
}
