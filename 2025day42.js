// first repeating element gfg .....
// brute force approach.....

class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr) {
        // your code here
        //two pointer approach.......
        
        for(let i = 0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    return i+1
                    break
                }
            }
        }
        
        return -1
    }
}
