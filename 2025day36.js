// binary search gfg......
class Solution {
    binarysearch(arr, k) {
        // Code Here
        let index = -1 
        
        for(let i = 0;i<arr.length;i++){
            if(arr[i]==k){
                index = i
                break;
            }
        }
        
        return index
    }
}
