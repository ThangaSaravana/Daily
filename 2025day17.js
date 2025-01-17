//first program of the day.....the is the bruteforce method........

class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        // Code Here
        
        let ans = []
        
        for(let i = 0;i<arr1.length;i++){
            if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
                ans.push(arr1[i])
            }
        }
        
        let final =  new Set(ans)
        
        let finalans = [...final]
        return finalans
    }
}
