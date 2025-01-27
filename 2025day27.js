class Solution {
    sliceString(str) {
        // write your code here
        let nwstr = ""
        
        for(let i = 1;i<str.length-1;i++){
            nwstr =  nwstr+str[i]
        }
        
        return nwstr
    }
}
