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
/// Third question for the day ...done with the help of chatgpt

// reverse words gfg
class Solution {
    // Function to reverse words in a given string.
    reverseWords(s) {
        // code here
         let trimmed = s.trim();
         // Split by spaces and filter out any empty strings (caused by multiple spaces)
         let arr = trimmed.split(/\s+/);
         // Reverse the array and join it with a single space
         let out = arr.reverse().join(" ");
         return out;
    }
}

//3rd problem nth fibonacci number - gfg

class Solution {
    nthFibonacci(n) {
        // your code here
        
        let arr = [0,1]
        
        for(let i = 2;i<=n;i++){
            let ele = arr[arr.length-2]+arr[arr.length-1]
            arr.push(ele)
        }
        
        return arr[n]
        
    }
}
