class Solution {
    pushZerosToEnd(arr) {
        // code here
        
        let normalarr = []
        let zeroarr = []
        
        for(let i =0;i<arr.length;i++){
            if(arr[i]==0){
                zeroarr.push(0)
            }else{
                normalarr.push(arr[i])
            }
        }
        
        let ans = normalarr.concat(zeroarr)
        arr = ans
    }
}

// this is the first question for the day and the question is moving all zeros to the end of the array ...here i dont want to create an extra array ...modify the same array
