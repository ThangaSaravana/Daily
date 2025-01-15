class Solution {
    // Function to check whether the number evenly divides n.
    evenlyDivides(n) {
        // code here
        if(n==0){
            return 0
        }
        
        let count = 0
        
        let N = n.toString()
        
        for(let i = 0;i<N.length;i++){
            
            if(n%parseInt(N[i])==0){
                count++
            }
            
        }
        
        return count
    }
}
//second  question for the day ....check if the string is plaindrome or not 


class Solution {
    // Function to check if a given string is a palindrome.
    isPalindrome(s) {
        // code here
        if(s.length==1){
            return true
        }
        
        let nwstr = ""
        
        for(let i=s.length-1;i>=0;i--){
            
            nwstr+=s[i]
        }
        
        if(nwstr === s){
            return true
        }else{
            return false
        }
    }
}
