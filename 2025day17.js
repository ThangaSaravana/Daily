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

//..second problem ...floor in sorted arr 

class Solution {

    findFloor(arr, k) {
        // your code here
 
        
        for(let i = 0;i<arr.length;i++){
            if(arr[i]<=k && arr[i+1]<=k){
               continue;
            }else if(arr[i]<=k){
                return i
            }
        }
        
        return -1
    }
}

///..third program of the day ..................first repeating elements ...time limit exceeded.......


 * @returns {number}
 */

class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr) {
        // your code here
        for(let i = 0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(i==j){
                    continue
                }else{
                    if(arr[i]==arr[j]){
                        return i+1
                    }
                }
            }
        }
        
        return -1
    }
}
