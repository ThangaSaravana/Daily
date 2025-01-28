class Solution {
    findUnique(k, arr) {
        // Code here
       for(let i = 0;i<arr.length;i++){
           let count = 0
           for(let j = 0;j<arr.length;j++){
               if(i==j){
                   continue;
               }else{
                   if(arr[i]==arr[j]){
                       count++
                   }
               }
           }
           if(count == 0){
               return arr[i]
           }
       }
    }
}
// actually this code exceeds the time complexity 
