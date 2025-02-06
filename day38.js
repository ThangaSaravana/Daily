// common in 3 sorted arrays .......my brute force approach........
class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        // Code Here
        
        let ans = []
        
        for(let i = 0;i<arr1.length;i++){
            if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
                
                if(!ans.includes(arr1[i])){
                     ans.push(arr1[i])
                }
            }
        }
        
       
        return ans
    
    }
}
