
//value equal to index value



class Solution {
    // Function to find elements in the array that are equal to their index.
    valueEqualToIndex(arr) {
        // code here
           let arr1 = []
        for(let i = 0;i<=arr.length;i++){
            if(arr[i]==i+1){
                 arr1.push(i+1)
               
            }
        }
         return arr1
    }
}