


class Solution {
    sumExceptFirstLast(arr) {
        // code here
        let sum = 0
        
        for(let i=0;i<arr.length;i++){
            if(i==0 || i==arr.length-1){
                sum+=0
            }else{
                sum+=arr[i]
            }
        }
        
        return sum
    }
}