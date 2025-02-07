class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        // code here
        let arr1 = s1.split("").sort()
        let arr2 = s2.split("").sort()
        
        if(arr1.length!==arr2.length){
            return false
        }
        
        for(let i = 0;i<arr1.length;i++){
          if(arr1[i]!==arr2[i]){
              return false
          }
        }
        
        return true
    }
}
